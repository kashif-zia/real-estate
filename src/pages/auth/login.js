import React, { useEffect, useState, useRef } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { User, Lock } from 'react-feather'
import { Col, Container, Row, Spinner } from 'reactstrap'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Breadcrumb from '../../layout/Breadcrumb/Breadcrumb'
import Footer from '../../layout/footers/Footer'
import NavbarTwo from '../../layout/headers/NavbarTwo'
import { setAuthUser } from '../../libs/redux-toolkit/reducers/authReducer'
import { LoadingScreen } from '../../layout/loader/LoadingScreen'
import { ReactstrapAuthInput } from '../../libs/utils/ReactstrapInputsValidation'
import { getUser } from '../../graphql/queries'

// export const getStaticProps = async ({ locale }) => ({
// 	props: { ...(await serverSideTranslations(locale, ['common'])) },
// })

const Login = () => {
	const formikRef = useRef()
	const dispatch = useDispatch()
	const [isPasswordShow, setIsPasswordShow] = useState(false)
	const [showLoader, setShowLoader] = useState(true)
	const router = useRouter()
	const auth = useSelector((state) => state.auth)

	const handleLogin = async (values, setSubmitting, resetForm) => {
		try {
			const params = {
				username: values.email,
				password: values.password,
			}
			const user = await Auth.signIn(params)
			const role = user.attributes['custom:role']
			if (role !== values.role) {
				Auth.signOut()
				toast.error(`You are a ${role}. Please switch your role to ${role}`)
				setSubmitting(false)
				resetForm()
			} else {
				const userId = user.username
				const userDetailsAPI = await API.graphql(graphqlOperation(getUser, { id: userId }))
				const userDetails = userDetailsAPI.data['getUser']
				dispatch(
					setAuthUser({
						id: userDetails.id,
						email: userDetails.email,
						role: userDetails.role,
						name: userDetails.name,
						first_name: userDetails.first_name,
						last_name: userDetails.last_name,
						gender: userDetails.gender,
						birthday: userDetails.birthday,
						address: userDetails.address,
						city: userDetails.city,
						state: userDetails.state,
						phone_number: userDetails.phone_number,
						loggedIn: true,
						authRole: role,
					})
				)
				setSubmitting(false)
				toast.success('Login Successfully')
				resetForm()
				router.push(`/dashboard/${role}-dashboard`)
			}
		} catch (err) {
			console.log('sign_in_err', err)
			setSubmitting(false)
			resetForm()
			toast.error(err.message)
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
			<section className='login-wrap'>
				<Container>
					<Row className=' log-in'>
						<Col xl='5' lg='6' md='8' sm='10'>
							<div className='theme-card'>
								<Formik
									innerRef={formikRef}
									initialValues={{
										email: '',
										password: '',
										role: 'user',
									}}
									validationSchema={Yup.object().shape({
										email: Yup.string()
											.email('Enter valid email')
											.required('Email field is required'),
										password: Yup.string().required('Password field is required'),
									})}
									onSubmit={(values, { setSubmitting, resetForm }) => {
										handleLogin(values, setSubmitting, resetForm)
									}}
									render={({ values, isSubmitting }) => (
										<Form>
											<div className='title-3 role-switcher-container'>
												<h2>Log in</h2>
												<div className='option-setting'>
													<span>User</span>
													<label className='switch' style={{ margin: '0 10px 0' }}>
														<input
															type='checkbox'
															name='chk1'
															value='option'
															className='setting-check'
															checked={values.role === 'agent'}
															onChange={(e) => {
																formikRef.current.setFieldValue(
																	'role',
																	e.target.checked ? 'agent' : 'user'
																)
															}}
														/>
														<span className='switch-state'></span>
													</label>
													<span>Agent</span>
												</div>
											</div>
											<div className='form-group'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<div className='input-group-text'>
															<User />
														</div>
													</div>
													<Field
														name='email'
														component={ReactstrapAuthInput}
														type='text'
														className='form-control'
														placeholder='Enter Your Email'
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
											<div className='d-flex'>
												<label className='d-block mb-0' htmlFor='chk-ani'>
													<input className='checkbox_animated' id='chk-ani' type='checkbox' />{' '}
													<span>Remember me</span>
												</label>
												<Link href='/auth/forgot-password' className='font-rubik'>
													Forgot password ?
												</Link>
											</div>
											<div>
												<button
													disabled={isSubmitting ? true : false}
													type='submit'
													className='btn btn-gradient btn-pill me-sm-3 me-2'>
													{isSubmitting ? <Spinner color='light' size='sm' /> : 'Log in'}
												</button>
												<Link
													style={{ pointerEvents: isSubmitting ? 'none' : '' }}
													href='/auth/signup'
													className='btn btn-dashed btn-pill'>
													Create Account
												</Link>
											</div>
											<div className='divider'>
												<h6>or</h6>
											</div>
											<div>
												<h6>Log in with</h6>
												<div className='row social-connect'>
													<div className='col-6 mb-2'>
														<a
															href='https://www.facebook.com/'
															className='btn btn-social btn-flat facebook p-0'>
															<i className='fab fa-facebook-f'></i>
															<span>Facebook</span>
														</a>
													</div>
													<div className='col-6'>
														<a
															href='https://account.google.com'
															className='btn btn-social btn-flat google p-0'>
															<img src='/assets/images/google-icon.webp' alt='' />
															{/* <i className='fab fa-google'></i> */}
															<span>Google</span>
														</a>
													</div>
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

export default Login
