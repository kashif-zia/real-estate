import { Auth } from 'aws-amplify'
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import {
	Button,
	Col,
	FormFeedback,
	FormText,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
	Spinner,
} from 'reactstrap'
import { ReactstrapInput } from '../../../../libs/utils/ReactstrapInputsValidation'

const ChangeDetails = ({ toggle, setModal, detail }) => {
	const [isCurrentPasswordShow, setIsCurrentPasswordShow] = useState(false)
	const [isNewPasswordShow, setIsNewPasswordShow] = useState(false)
	const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false)

	const handleSubmit = async (values, setSubmitting, resetForm) => {
		try {
			const user = await Auth.currentAuthenticatedUser()
			await Auth.changePassword(user, values.password, values.new_password)
			resetForm()
			setModal(false)
			setSubmitting(false)
			toast.success(`Password successfully changed`)
		} catch (error) {
			setSubmitting(false)
			if (error.code === 'NotAuthorizedException') {
				toast.error(`Your current password is incorrect. Please enter correct password`)
			} else {
				toast.error(error.message)
			}
			console.log(`reset_password error: ${error.message}`)
		}
	}
	return (
		<>
			<Modal className='modal-content password-change-modal' isOpen={toggle} size='lg'>
				<Formik
					initialValues={{
						password: '',
						new_password: '',
						confirm_password: '',
						role: 'user',
					}}
					validationSchema={Yup.object().shape({
						password: Yup.string().required('Password field is required'),
						new_password: Yup.string()
							.required('New Password field is required')
							.min(8, 'Password must be at least 8 characters')
							.matches(
								/^(?=.*[a-zA-Z])(?=.*\d)/,
								'Password must contain at least one letter and one number'
							),
						confirm_password: Yup.string()
							.required('Confirm Password field is required')
							.oneOf([Yup.ref('new_password'), null], 'Passwords must match'),
					})}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						handleSubmit(values, setSubmitting, resetForm)
					}}
					render={({ values, isSubmitting }) => (
						<Form>
							<ModalHeader className='modal-header'>
								<p className='modal-title'>Change {detail}</p>
								<Button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
									onClick={() => setModal(false)}>
									<span aria-hidden='true'>×</span>
								</Button>
							</ModalHeader>
							<ModalBody className='modal-body'>
								<Row className='row gx-3'>
									<Col sm='12' className='form-group'>
										<Label htmlFor='old'>Current {detail}</Label>
										<div className='input-group'>
											<Field
												name='password'
												component={ReactstrapInput}
												type={isCurrentPasswordShow ? 'text' : 'password'}
												className='form-control'
												placeholder='Enter Your Current Password'
											/>
											<div className='input-group-apend'>
												<div className='input-group-text'>
													<i
														id='pwd-icon'
														className={
															'far' + (isCurrentPasswordShow ? ' fa-eye-slash' : ' fa-eye')
														}
														onClick={() => setIsCurrentPasswordShow(!isCurrentPasswordShow)}></i>
												</div>
											</div>
										</div>
									</Col>
									<Col sm='12' className='form-group'>
										<Label htmlFor='new'>New {detail}</Label>
										<div className='input-group'>
											<Field
												name='new_password'
												component={ReactstrapInput}
												type={isNewPasswordShow ? 'text' : 'password'}
												className='form-control'
												placeholder='Enter Your New Password'
											/>
											<div className='input-group-apend'>
												<div className='input-group-text'>
													<i
														id='pwd-icon'
														className={'far' + (isNewPasswordShow ? ' fa-eye-slash' : ' fa-eye')}
														onClick={() => setIsNewPasswordShow(!isNewPasswordShow)}></i>
												</div>
											</div>
										</div>
									</Col>
									<Col sm='12' className='form-group'>
										<Label htmlFor='comfirm'>Confirm {detail}</Label>
										<div className='input-group'>
											<Field
												name='confirm_password'
												component={ReactstrapInput}
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
														onClick={() => setIsConfirmPasswordShow(!isConfirmPasswordShow)}></i>
												</div>
											</div>
										</div>
									</Col>
								</Row>
							</ModalBody>
							<ModalFooter className='modal-footer'>
								<Button
									type='button'
									className='btn btn-dashed btn-pill'
									data-bs-dismiss='modal'
									onClick={() => setModal(false)}>
									Cancel
								</Button>
								<Button
									type='submit'
									className='btn btn-gradient btn-pill'
									disabled={isSubmitting ? true : false}
									data-bs-dismiss='modal'>
									{isSubmitting ? <Spinner color='light' size='sm' /> : 'Save changes'}
								</Button>
							</ModalFooter>
						</Form>
					)}
				/>
			</Modal>
		</>
	)
}

export default ChangeDetails
