import React, { useEffect, useState, useRef } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { User, Lock, Mail, Phone } from 'react-feather'
import { Col, Container, Row, Spinner } from 'reactstrap'
import { PhoneInput } from 'react-international-phone'
import { PhoneNumberUtil } from 'google-libphonenumber'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
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

const phoneUtil = PhoneNumberUtil.getInstance()
const isPhoneValid = (phone) => {
	try {
		return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
	} catch (error) {
		return false
	}
}

const SignUp = () => {
	const formikRef = useRef()
	const auth = useSelector((state) => state.auth)
	const router = useRouter()
	const [showLoader, setShowLoader] = useState(true)
	const [isPasswordShow, setIsPasswordShow] = useState(false)
	const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false)

	const handleSignUp = async (values, setSubmitting, resetForm) => {
		const params = {
			username: values.email,
			password: values.password,
			phone_number: values.phone_number,
			attributes: {
				name: values.name,
				phone_number: values.phone_number,
				'custom:role': values.role,
			},
		}
		Auth.signUp(params)
			.then((res) => {
				toast.success(`User Created Successfully. OTP has been sent to ${params.username}`)
				setSubmitting(false)
				localStorage.setItem('realStateUserEmail', JSON.stringify(values.email))
				resetForm()
				router.push('/auth/verify-otp')
			})
			.catch((err) => {
				toast.error(err.message)
				console.log('signup_error', err)
				setSubmitting(false)
				resetForm()
			})
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
									<h2>Sign up</h2>
								</div>
								<Formik
									innerRef={formikRef}
									initialValues={{
										name: '',
										email: '',
										phone_number: '',
										password: '',
										confirm_password: '',
										role: 'user',
									}}
									validationSchema={Yup.object().shape({
										name: Yup.string().required('Name field is required'),
										email: Yup.string()
											.email('Enter valid email')
											.required('Email field is required'),
										phone_number: Yup.string()
											.required('Phone Number field is required')
											.test('is-valid-mobile', 'Invalid phone number', (value) =>
												isPhoneValid(value)
											),
										password: Yup.string()
											.required('Password field is required')
											.min(8, 'Password must be at least 8 characters')
											.matches(
												/^(?=.*[a-zA-Z])(?=.*\d)/,
												'Password must contain at least one letter and one number'
											),
										confirm_password: Yup.string()
											.required('Confirm Password field is required')
											.oneOf([Yup.ref('password'), null], 'Passwords must match'),
									})}
									onSubmit={(values, { setSubmitting, resetForm }) => {
										values.phone_number = values.phone_number.replace(/[^0-9+]/g, '')
										handleSignUp(values, setSubmitting, resetForm)
									}}
									render={({ values, isSubmitting, errors, touched }) => (
										<Form>
											<div className='form-group'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<div className='input-group-text'>
															<User />
														</div>
													</div>
													<Field
														name='name'
														component={ReactstrapAuthInput}
														type='text'
														className='form-control'
														placeholder='Enter Your Name'
													/>
												</div>
											</div>
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
														className='form-control'
														placeholder='Enter Your Email'
													/>
												</div>
											</div>
											<div className='form-group'>
												<div className='input-group'>
													<PhoneInput
														value={values.phone_number}
														className={
															errors.phone_number && touched.phone_number ? 'is-invalid' : ''
														}
														defaultCountry='pk'
														id='PhoneNumber'
														onChange={(phone) =>
															formikRef.current.setFieldValue('phone_number', phone)
														}
													/>
													{errors.phone_number && touched.phone_number && (
														<div
															className={
																touched.phone_number
																	? 'invalid-feedback d-block'
																	: 'invalid-feedback'
															}>
															{errors.phone_number}
														</div>
													)}
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
												<div className='InputradioGroup'>
													<div className='user-role'>
														<Field
															name='role'
															id='user'
															value='user'
															type='radio'
															checked={values.role == 'user'}
															component={ReactstrapAuthInput}
															className='radio'
														/>
														<label htmlFor='user'>User</label>
													</div>
													<div className='user-role'>
														<Field
															name='role'
															id='agent'
															value='agent'
															type='radio'
															checked={values.role == 'agent'}
															component={ReactstrapAuthInput}
															className='radio'
														/>
														<label htmlFor='agent'>Agent</label>
													</div>
												</div>
												<button
													disabled={isSubmitting ? true : false}
													type='submit'
													className='btn btn-gradient btn-pill me-sm-3 me-2'>
													{isSubmitting ? <Spinner color='light' size='sm' /> : 'Create Account'}
												</button>
												<Link
													style={{ pointerEvents: isSubmitting ? 'none' : '' }}
													href='/auth/login'
													className='btn btn-dashed btn-pill'>
													Log in
												</Link>
											</div>
											<div className='divider'>
												<h6>or</h6>
											</div>
											<div>
												<h6>Sign up with-+</h6>
												<div className='row social-connect'>
													<Col sm='6'>
														<a
															href='https://www.facebook.com/'
															className='btn btn-social btn-flat facebook p-0'>
															<i className='fab fa-facebook-f'></i>
															<span>Facebook</span>
														</a>
													</Col>
													<Col sm='6'>
														<a
															href='https://account.google.com'
															className='btn btn-social btn-flat google p-0'>
															<i className='fab fa-google'></i>
															<span>Google</span>
														</a>
													</Col>
												</div>
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
export default SignUp
