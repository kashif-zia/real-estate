import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import {
	Button,
	Col,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
	Spinner,
} from 'reactstrap'
import { setAuthUser } from '../../../../libs/redux-toolkit/reducers/authReducer'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { updateUser } from '../../../../graphql/mutations'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
	ReactstrapInput,
	ReactstrapSelect,
} from '../../../../libs/utils/ReactstrapInputsValidation'

const EditProfile = ({ toggle, setModal }) => {
	const user = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const handleSubmit = async (values, setSubmitting, resetForm) => {
		try {
			const updatedUserAPI = await API.graphql({
				query: updateUser,
				variables: {
					input: {
						id: values.id,
						name: values.name,
						gender: values.gender,
						birthday: values.birthday,
						city: values.city,
						state: values.state,
						zipcode: values.zipcode,
						address: values.address,
						bio: values.bio,
					},
				},
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
			})
			const updatedUser = updatedUserAPI.data.updateUser
			dispatch(
				setAuthUser({
					id: updatedUser.id,
					name: updatedUser.name,
					gender: updatedUser.gender,
					birthday: updatedUser.birthday,
					city: updatedUser.city,
					state: updatedUser.state,
					zipcode: updatedUser.zipcode,
					address: updatedUser.address,
					bio: updatedUser.bio,
				})
			)
			setModal(false)
			setSubmitting(false)
			toast.success('Profile Successfully Updated')
		} catch (error) {
			console.log('profile_updated_error', error.message)
			toast.error(error.message)
			setSubmitting(false)
			setModal(false)
		}
	}

	return (
		<>
			<div className='modal fade edit-profile-modal' id='edit-profile'>
				<div className='modal-dialog modal-lg'>
					<Modal className='modal-content' isOpen={toggle} size='lg'>
						<Formik
							initialValues={{
								id: user.id,
								name: user.name,
								gender: user.gender || 'Male',
								birthday: user.birthday || '',
								address: user.address || '',
								city: user.city || '',
								state: user.state || '',
								zipcode: user.zipcode || '',
								bio: user.bio || '',
							}}
							validationSchema={Yup.object().shape({
								name: Yup.string().required('Name field is required'),
							})}
							onSubmit={(values, { setSubmitting, resetForm }) => {
								handleSubmit(values, setSubmitting, resetForm)
							}}
							render={({ values, isSubmitting }) => (
								<Form>
									<ModalHeader className='modal-header'>
										<p className='modal-title'>Edit Profile</p>
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
										<Row className=' gx-3'>
											<Col md='6' className='form-group'>
												<Label htmlFor='name'>Full Name</Label>
												<Field
													name='name'
													id='name'
													component={ReactstrapInput}
													type='text'
													className='form-control'
													placeholder='Enter Your Name'
												/>
											</Col>
											<Col md='6' className='form-group col-md-6'>
												<Label htmlFor='gender'>Gender</Label>
												<Field
													name='gender'
													id='gender'
													component={ReactstrapSelect}
													type='text'
													className='form-control'
													inputprops={{
														options: ['Male', 'Female'],
													}}
												/>
											</Col>
											<div className='form-group col-md-6'>
												<Label htmlFor='birthday'>Birthday</Label>
												<Field
													name='birthday'
													id='birthday'
													component={ReactstrapInput}
													type='date'
													className='form-control'
													placeholder='18 april'
												/>
											</div>
											<div className='form-group col-md-6'>
												<Label htmlFor='inputCity'>City</Label>
												<Field
													name='city'
													id='inputCity'
													component={ReactstrapInput}
													type='text'
													className='form-control'
													placeholder='Enter Your City'
												/>
											</div>
											<div className='form-group col-md-6'>
												<label htmlFor='inputState'>State</label>
												<Field
													name='state'
													id='inputState'
													component={ReactstrapSelect}
													type='text'
													className='form-control'
													inputprops={{
														options: ['Punjab', 'Balochistan', 'KPK', 'Sindh', 'Baltistan'],
													}}
												/>
											</div>
											<div className='form-group col-md-6'>
												<label htmlFor='zipCode'>Zip Code</label>
												<Field
													name='zipcode'
													id='zipCode'
													component={ReactstrapInput}
													type='text'
													className='form-control'
													placeholder='Enter Zip Code'
												/>
											</div>

											<div className='form-group col-12'>
												<Label htmlFor='inputAddress'>Address</Label>
												<Field
													name='address'
													id='inputAddress'
													component={ReactstrapInput}
													type='text'
													className='form-control'
													placeholder='Enter Zip Code'
												/>
											</div>

											<div className='form-group col-md-12'>
												<label htmlFor='bio'>Bio</label>
												<Field
													name='bio'
													id='bio'
													component={ReactstrapInput}
													type='textarea'
													className='form-control'
													placeholder='Enter Your Bio'
												/>
											</div>
										</Row>
									</ModalBody>
									<ModalFooter className='modal-footer'>
										<Button
											type='button'
											className='btn btn-dashed btn-pill'
											data-bs-dismiss='modal'
											onClick={() => {
												setModal(false)
											}}>
											Cancel
										</Button>
										<Button
											type='submit'
											disabled={isSubmitting ? true : false}
											className='btn btn-gradient btn-pill'
											data-bs-dismiss='modal'>
											{isSubmitting ? <Spinner color='light' size='sm' /> : 'Save Changes'}
										</Button>
									</ModalFooter>
								</Form>
							)}
						/>
					</Modal>
				</div>
			</div>
		</>
	)
}

export default EditProfile
