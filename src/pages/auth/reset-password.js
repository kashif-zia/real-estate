import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Lock, Key } from 'react-feather'
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

const ResetPassword = () => {
	const auth = useSelector((state) => state.auth)
	const router = useRouter()
	const [showLoader, setShowLoader] = useState(true)
	const [isPasswordShow, setIsPasswordShow] = useState(false)
	const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false)

	const handleResetPassword = async (values, setSubmitting, resetForm) => {
		const userEmail = localStorage.getItem('realStateUserEmail')
			? JSON.parse(localStorage.getItem('realStateUserEmail'))
			: null
		if (userEmail) {
			Auth.forgotPasswordSubmit(userEmail, values.otp, values.password)
				.then((res) => {
					toast.success('Password Reset Successfully')
					setSubmitting(false)
					localStorage.removeItem('realStateUserEmail')
					resetForm()
					router.push('/auth/login')
				})
				.catch((err) => {
					toast.error(err.message)
					console.log('resetpassword_error', err)
					setSubmitting(false)
					resetForm()
				})
		} else {
			toast.error('OTP is not valid. Please forgot your password first')
			router.push('/auth/forgot-password')
			setSubmitting(false)
			resetForm()
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
									<h2>Reset Password</h2>
								</div>
								<Formik
									initialValues={{
										otp: '',
										password: '',
										confirm_password: '',
									}}
									validationSchema={Yup.object().shape({
										otp: Yup.string().required('OTP field is required'),
										password: Yup.string()
											.required('Password field is required')
											.min(8, 'Password must be at least 8 characters')
											.matches(
												/^(?=.*[a-zA-Z])(?=.*\d)/,
												'Password must contain at least one letter and one number'
											),
										confirm_password: Yup.string()
											.required('Cofnirm Password field is required')
											.oneOf([Yup.ref('password'), null], 'Passwords must match'),
									})}
									onSubmit={(values, { setSubmitting, resetForm }) => {
										handleResetPassword(values, setSubmitting, resetForm)
									}}
									render={({ values, isSubmitting }) => (
										<Form>
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
											<div className='form-group'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<div className='input-group-text'>
															<Lock />
														</div>
													</div>
													<Field
														name='password'
														component={ReactstrapAuthInput}
														type={isPasswordShow ? 'text' : 'password'}
														className='form-control'
														placeholder='Enter Your Password'
													/>
													<div className='input-group-apend'>
														<div className='input-group-text'>
															<i
																id='pwd-icon'
																className={'far' + (isPasswordShow ? ' fa-eye-slash' : ' fa-eye')}
																onClick={() => setIsPasswordShow(!isPasswordShow)}></i>
														</div>
													</div>
												</div>
											</div>
											<div className='form-group'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<div className='input-group-text'>
															<Lock />
														</div>
													</div>
													<Field
														name='confirm_password'
														component={ReactstrapAuthInput}
														type={isConfirmPasswordShow ? 'text' : 'password'}
														className='form-control'
														placeholder='Enter Confirm Password'
													/>
													<div className='input-group-apend'>
														<div className='input-group-text'>
															<i
																id='pwd-icon'
																className={
																	'far' + (isConfirmPasswordShow ? ' fa-eye-slash' : ' fa-eye')
																}
																onClick={() =>
																	setIsConfirmPasswordShow(!isConfirmPasswordShow)
																}></i>
														</div>
													</div>
												</div>
											</div>
											<div>
												<button
													disabled={isSubmitting ? true : false}
													type='submit'
													className='btn btn-gradient btn-pill me-sm-3 me-2'>
													{isSubmitting ? <Spinner color='light' size='sm' /> : 'Reset Password'}
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
export default ResetPassword
