import React, { useEffect, useState, useRef } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Mail, Key } from 'react-feather'
import { Col, Container, Row, Spinner } from 'reactstrap'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Auth } from 'aws-amplify'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Breadcrumb from '../../layout/Breadcrumb/Breadcrumb'
import Footer from '../../layout/footers/Footer'
import NavbarTwo from '../../layout/headers/NavbarTwo'
import { ReactstrapAuthInput } from '../../libs/utils/ReactstrapInputsValidation'
import { LoadingScreen } from '../../layout/loader/LoadingScreen'

// export const getStaticProps = async ({ locale }) => ({
// 	props: { ...(await serverSideTranslations(locale, ['common'])) },
// })

const VerifyOTP = () => {
	const formikRef = useRef()
	const auth = useSelector((state) => state.auth)
	const router = useRouter()
	const [showLoader, setShowLoader] = useState(true)

	const handleVerifyOTP = async (values, setSubmitting, resetForm) => {
		Auth.confirmSignUp(values.email, values.otp)
			.then((res) => {
				toast.success('Email Verified Successfully')
				setSubmitting(false)
				localStorage.removeItem('realStateUserEmail')
				resetForm()
				router.push('/auth/login')
			})
			.catch((err) => {
				if (err.code == 'CodeMismatchException') {
					toast.error('Please enter valid OTP')
				} else if (err.code == 'UserNotFoundException') {
					toast.error('User with this email not found')
				} else {
					toast.error(err.message)
				}
				console.log('verifyOTP_error', err)
				setSubmitting(false)
			})
	}

	const handleResendOTP = async (values, setSubmitting) => {
		if (values.email) {
			Auth.resendSignUp(values.email)
				.then((res) => {
					toast.success('OTP sent Successfully. Please check you email')
					setSubmitting(false)
				})
				.catch((err) => {
					toast.error(err.message)
					console.log('resendOTP_error', err)
					setSubmitting(false)
				})
		} else {
			toast.error('Please enter email first')
			setSubmitting(false)
		}
	}

	useEffect(() => {
		if (auth.loggedIn) {
			auth.authRole == 'user'
				? router.push('/dashboard/user-dashboard')
				: router.push('/dashboard/agent-dashboard')
		}
		setTimeout(() => {
			setShowLoader(false)
		}, 1700)
		const userEmail = localStorage.getItem('realStateUserEmail')
			? JSON.parse(localStorage.getItem('realStateUserEmail'))
			: ''
		if (formikRef.current) {
			formikRef.current.setFieldValue('email', userEmail)
		}
	}, [])

	return (
		<>
			{showLoader && <LoadingScreen />}
			<NavbarTwo />
			<Breadcrumb />
			<section>
				<Container>
					<Row className=' log-in sign-up'>
						<Col xl='5' lg='6' md='8' sm='10'>
							<div className='theme-card'>
								<div className='title-3 text-start'>
									<h2>Verify OTP</h2>
								</div>
								<Formik
									innerRef={formikRef}
									initialValues={{
										otp: '',
										email: '',
										clickedButton: null,
									}}
									validationSchema={Yup.object().shape({
										otp: Yup.string().required('OTP field is required'),
										email: Yup.string()
											.email('Enter valid email')
											.required('Enter your registered email'),
									})}
									onSubmit={(values, { setSubmitting, resetForm }) => {
										if (values.clickedButton == 'verifyOTP') {
											handleVerifyOTP(values, setSubmitting, resetForm)
										} else {
											handleResendOTP(values, setSubmitting)
										}
									}}
									render={({ values, isSubmitting, handleSubmit }) => (
										<Form>
											<div className='form-group'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<div className='input-group-text'>
															<Mail />
														</div>
													</div>
													<Field
														name='email'
														component={ReactstrapAuthInput}
														type='email'
														values={values.email}
														className='form-control'
														placeholder='Enter Your Email'
													/>
												</div>
											</div>
											<div className='form-group'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<div className='input-group-text'>
															<Key />
														</div>
													</div>
													<Field
														name='otp'
														component={ReactstrapAuthInput}
														type='text'
														className='form-control'
														placeholder='Enter Your OTP'
													/>
												</div>
											</div>
											<div>
												<button
													disabled={isSubmitting ? true : false}
													type='button'
													onClick={() => {
														formikRef.current.setFieldValue('clickedButton', 'verifyOTP')
														handleSubmit()
													}}
													className='btn btn-gradient btn-pill me-sm-3 me-2'>
													{isSubmitting && values.clickedButton == 'verifyOTP' ? (
														<Spinner color='light' size='sm' />
													) : (
														'Verify OTP'
													)}
												</button>
												<button
													disabled={isSubmitting ? true : false}
													type='button'
													onClick={() => {
														formikRef.current.setFieldValue('clickedButton', 'resendOTP')
														handleSubmit()
													}}
													className='btn btn-dashed btn-pill me-sm-3 me-2'>
													{isSubmitting && values.clickedButton !== 'verifyOTP' ? (
														<Spinner color='primary' size='sm' />
													) : (
														'Resend OTP'
													)}
												</button>
											</div>
										</Form>
									)}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</>
	)
}
export default VerifyOTP
