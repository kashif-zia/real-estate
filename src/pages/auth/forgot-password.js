import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { User } from 'react-feather'
import { useRouter } from 'next/navigation'
import Breadcrumb from '../../layout/Breadcrumb/Breadcrumb'
import Footer from '../../layout/footers/Footer'
import NavbarTwo from '../../layout/headers/NavbarTwo'
import { Auth } from 'aws-amplify'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { LoadingScreen } from '../../layout/loader/LoadingScreen'
import { ReactstrapAuthInput } from '../../libs/utils/ReactstrapInputsValidation'

// export const getStaticProps = async ({ locale }) => ({
// 	props: { ...(await serverSideTranslations(locale, ['common'])) },
// })

const ForgotPassword = () => {
	const [showLoader, setShowLoader] = useState(true)
	const auth = useSelector((state) => state.auth)
	const router = useRouter()

	const handleForgotPassword = async (values, setSubmitting, resetForm) => {
		try {
			await Auth.forgotPassword(values.email)
			localStorage.setItem('realStateUserEmail', JSON.stringify(values.email))
			toast.success('OTP sent to your email successfully!')
			setSubmitting(false)
			resetForm()
			router.push('/auth/reset-password')
		} catch (error) {
			console.error('Error sending password reset code', error)
			toast.error(error.message)
			setSubmitting(false)
			resetForm()
		}
	}

	useEffect(() => {
		if (auth.loggedIn) {
			console.log(auth, 'yban')
			auth.authRole == 'buyer'
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
					<div className='row log-in'>
						<div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
							<div className='theme-card'>
								<div className='title-3 text-start'>
									<h2>Forgot your password</h2>
								</div>
								<Formik
									initialValues={{
										email: '',
									}}
									validationSchema={Yup.object().shape({
										email: Yup.string()
											.email('Enter valid email')
											.required('Email field is required'),
									})}
									onSubmit={(values, { setSubmitting, resetForm }) => {
										handleForgotPassword(values, setSubmitting, resetForm)
									}}
									render={({ values, isSubmitting }) => (
										<Form>
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
											<div>
												<button
													disabled={isSubmitting ? true : false}
													type='submit'
													className='btn btn-gradient btn-pill me-sm-3 me-2'>
													{isSubmitting ? <Spinner color='light' size='sm' /> : 'Forgot Password'}
												</button>
											</div>
										</Form>
									)}
								/>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<Footer />
		</>
	)
}

export default ForgotPassword
