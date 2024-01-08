import React, { useState, useRef } from 'react'
import { Field, Form, Formik, FormFeedback } from 'formik'
import slugify from 'slugify'
import { v4 as uuid } from 'uuid'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { PhoneInput } from 'react-international-phone'
import { PhoneNumberUtil } from 'google-libphonenumber'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import {
	Button,
	Col,
	Label,
	Row,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	ModalHeader,
	Modal,
	ModalBody,
	ModalFooter,
	Spinner,
} from 'reactstrap'
import * as Yup from 'yup'
import NoSsr from '../../../../libs/utils/NoSsr'
import {
	ReactstrapInput,
	ReactstrapAuthInput,
	ReactstrapSelect,
	ReactstrapMobileNumber,
} from '../../../../libs/utils/ReactstrapInputsValidation'
import { createProperty } from '../../../../graphql/mutations'
import { useSelector } from 'react-redux'

const phoneUtil = PhoneNumberUtil.getInstance()
const isPhoneValid = (phone) => {
	try {
		return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
	} catch (error) {
		return false
	}
}

const NoDropzoneLayout = ({ previews, submitButton, input, files, dropzoneProps }) => {
	const { ref, className, style } = dropzoneProps
	return (
		<div ref={ref} className={className} style={style}>
			{previews}
			{input}
			{files.length > 0 && submitButton}
		</div>
	)
}

const CreatePropertyTab = () => {
	const formikRef = useRef()
	const dropzoneRef = useRef()
	const [activeTab, setActiveTab] = useState('1')
	const [files, setFiles] = useState([])
	const user = useSelector((state) => state.auth)

	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	const handleChangeStatus = ({ meta, file }, status) => {
		console.log(files, file, status)
		if (status == 'done') {
			setFiles((state) => {
				return [...state, file]
			})
		}
		if (status == 'removed') {
			setFiles((prevFiles) =>
				prevFiles.filter(
					(existfile) =>
						existfile.name !== file.name &&
						existfile.lastModified !== file.lastModified &&
						existfile.size !== file.size
				)
			)
		}
	}

	const uploadGallery = async () => {
		try {
			const uploadPromises = files.map(async (file) => {
				const newUuid = uuid()
				const level = 'public'
				const result = await Storage.put(`${newUuid}_${file.name}`, file, {
					level,
				})
				return result.key
			})
			const uploadedKeys = await Promise.all(uploadPromises)
			return uploadedKeys
		} catch (error) {
			console.error('Error uploading files:', error)
		}
	}

	return (
		<NoSsr>
			<Formik
				innerRef={formikRef}
				initialValues={{
					ownerId: user.id,
					property_purpose: 'sell',
					property_category: 'home',
					propety_type: 'house',
					property_price: 0,
					monthly_rent: 0,
					price_unit: 'PKR',
					max_rooms: 0,
					beds: 0,
					kitchens: 0,
					baths: 0,
					area: 0,
					area_unit: 'Marla',
					title: '',
					description: '',
					address: {
						address: '',
						city: 'Lahore',
						landmark: '',
						zipcode: '',
					},
					contact_info: {
						email: '',
						landline: '',
						mobile: user.phone_number,
					},
					video: '',
					features: {
						main: {
							flooring: '',
							electricity_backup: '',
							built_in_year: null,
							parking_spaces: null,
							floors: null,
							floors_in_building: null,
							lobby_in_building: null,
							number_of_units: null,
							elevators: null,
							central_air_conditioning: false,
							public_parking: false,
							double_glazed_windows: false,
							underground_parking: false,
							waste_disposal: false,
							central_heating: false,
							service_elevators_in_building: false,
							furnished: false,
						},
						plot: {
							nearby_water_resources: false,
							disputed: false,
							possesion: false,
							sui_gas: false,
							electricity: false,
							tube_wells: false,
							irrigation: false,
							perimeter_fencing: false,
							accessible_by_road: false,
							boundary_wall: false,
							boundary_lines: false,
							land_fertility: false,
						},
						bussiness: {
							broadban_internet_access: false,
							cable_tv_ready: false,
							intercom: false,
							atm_machine: false,
							mediaroom_in_building: false,
							conference_room_in_building: null,
						},
						community: {
							swimming_pool: false,
							lawn: false,
							medical_center: false,
							gym: false,
							kids_play_area: false,
							day_care_center: false,
							mosque: false,
							bbq_area: false,
							community_center: false,
						},
						healthcare: {
							swimming_pool: false,
							lawn: false,
							jacuzzi: false,
							sauna: false,
						},
						nearby: {
							schools: false,
							hospitals: false,
							shopping_malls: false,
							restaurants: false,
							airport_distance: null,
							public_transport_service: false,
						},
						other: {
							emergency_exit: false,
							cctv: false,
							free_wifi: false,
							free_parking: false,
							air_conditioning: false,
						},
					},
				}}
				validationSchema={Yup.object().shape({
					title: Yup.string().required('Property Title Field is required'),
					description: Yup.string().required('Property Description Field is required'),
					property_price: Yup.number().when('property_purpose', {
						is: 'sell',
						then: Yup.number().required('Property Price Field is required'),
						otherwise: Yup.number().nullable(''),
					}),
					monthly_rent: Yup.string().when('property_purpose', {
						is: 'rent',
						then: Yup.string().required('Monthly Rent Field is required'),
						otherwise: Yup.string().nullable(''),
					}),
					area: Yup.number().required('Area Field is required'),
					contact_info: Yup.object().shape({
						email: Yup.string().required('Enail field is required'),
						mobile: Yup.string()
							.required('Phone Number field is required')
							.test('is-valid-mobile', 'Invalid phone number', (value) => isPhoneValid(value)),
					}),
					address: Yup.object().shape({
						address: Yup.string().required('Address field is required'),
						city: Yup.string().required('City Field is required'),
					}),
				})}
				onSubmit={async (values, { resetForm }) => {
					const uniqueIdForSlug = uuid()
					values.slug = slugify(`${values.title}-${uniqueIdForSlug}`, { lower: true })
					const galleryKeys = await uploadGallery()
					values.gallery = galleryKeys
					await API.graphql({
						...graphqlOperation(createProperty, { input: values }),
						authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
					})
					setFiles([])
					resetForm()
					if (dropzoneRef.current) {
						dropzoneRef.current.files = []
					}
				}}
				render={({ values, isSubmitting, errors, touched }) => {
					return (
						<Form>
							<div className='dashboard-content'>
								<div className='create-tab' id='create-property'>
									<div className='property-wizard common-card'>
										<div className='common-header'>
											<h5>Create property</h5>
										</div>
										<div className='create-property-form'>
											<div className='form-inputs'>
												<h6>Basic information</h6>
												<Row className='gx-2 gx-sm-12'>
													<Col sm='12' className='form-group'>
														<label className='property-type'>Select Purpose</label>
														<div className='InputradioGroup mb-2'>
															<div className='user-role  mt-2'>
																<Field
																	name='property_purpose'
																	id='sell'
																	value='sell'
																	type='radio'
																	checked={values.property_purpose == 'sell'}
																	component={ReactstrapAuthInput}
																	className='radio'
																/>
																<label htmlFor='sell'>Sell</label>
															</div>
															<div className='user-role mt-2'>
																<Field
																	name='property_purpose'
																	id='rent'
																	value='rent'
																	type='radio'
																	checked={values.property_purpose == 'rent'}
																	component={ReactstrapAuthInput}
																	className='radio'
																/>
																<label htmlFor='rent'>Rent</label>
															</div>
														</div>
													</Col>
													<Col sm='12' className='form-group'>
														<label className='property-type'>Select Property Type</label>
														<div className='property-type-tab'>
															<Nav tabs>
																<NavItem>
																	<NavLink
																		className={activeTab == '1' ? 'active' : ''}
																		onClick={(e) => {
																			setActiveTab('1')
																			formikRef.current.setFieldValue('property_category', 'home')
																		}}>
																		Home
																	</NavLink>
																</NavItem>
																<NavItem>
																	<NavLink
																		className={activeTab == '2' ? 'active' : ''}
																		onClick={(e) => {
																			setActiveTab('2')
																			formikRef.current.setFieldValue('property_category', 'plot')
																		}}>
																		Plot
																	</NavLink>
																</NavItem>
																<NavItem>
																	<NavLink
																		className={activeTab == '3' ? 'active' : ''}
																		onClick={(e) => {
																			setActiveTab('3')
																			formikRef.current.setFieldValue(
																				'property_category',
																				'commercial'
																			)
																		}}>
																		Commercial
																	</NavLink>
																</NavItem>
															</Nav>
															<TabContent activeTab={activeTab}>
																<TabPane tabId='1'>
																	<div className='InputradioGroup'>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='house'
																				className='radio'
																				id='house'
																				type='radio'
																				checked={values.propety_type == 'house'}
																			/>
																			<label htmlFor='house'>House</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='flat'
																				className='radio'
																				id='flat'
																				type='radio'
																				checked={values.propety_type == 'flat'}
																			/>
																			<label htmlFor='flat'>Flat</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='upperportion'
																				className='radio'
																				id='upperportion'
																				type='radio'
																				checked={values.propety_type == 'upperportion'}
																			/>
																			<label htmlFor='upperportion'>Upper Portion</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='lowerportion'
																				className='radio'
																				id='lowerportion'
																				type='radio'
																				checked={values.propety_type == 'lowerportion'}
																			/>
																			<label htmlFor='lowerportion'>Lower Portion</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='farmhouse'
																				className='radio'
																				id='farmhouse'
																				type='radio'
																				checked={values.propety_type == 'farmhouse'}
																			/>
																			<label htmlFor='farmhouse'>Farm House</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='room'
																				className='radio'
																				id='room'
																				type='radio'
																				checked={values.propety_type == 'room'}
																			/>
																			<label htmlFor='room'>Room</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='penthouse'
																				className='radio'
																				id='penthouse'
																				type='radio'
																				checked={values.propety_type == 'penthouse'}
																			/>
																			<label htmlFor='penthouse'>Penthouse</label>
																		</div>
																	</div>
																</TabPane>
																<TabPane tabId='2'>
																	<div className='InputradioGroup'>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='residentialplot'
																				className='radio'
																				id='residentialplot'
																				type='radio'
																				checked={values.propety_type == 'residentialplot'}
																			/>
																			<label htmlFor='residentialplot'>Residential Plot</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='commercialplot'
																				className='radio'
																				id='commercialplot'
																				type='radio'
																				checked={values.propety_type == 'commercialplot'}
																			/>
																			<label htmlFor='commercialplot'>Commercial Plot</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='agriculturalland'
																				className='radio'
																				id='agriculturalland'
																				type='radio'
																				checked={values.propety_type == 'agriculturalland'}
																			/>
																			<label htmlFor='agriculturalland'>Agricultural Land</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='industrialland'
																				className='radio'
																				id='industrialland'
																				type='radio'
																				checked={values.propety_type == 'industrialland'}
																			/>
																			<label htmlFor='industrialland'>Industrial Land</label>
																		</div>
																		{values.property_purpose === 'sell' && (
																			<>
																				<div className='property-radio-item'>
																					<Field
																						name='propety_type'
																						value='plotfile'
																						className='radio'
																						id='plotfile'
																						type='radio'
																						checked={values.propety_type == 'plotfile'}
																					/>
																					<label htmlFor='plotfile'>Plot File</label>
																				</div>
																				<div className='property-radio-item'>
																					<Field
																						name='propety_type'
																						value='plotform'
																						className='radio'
																						id='plotform'
																						type='radio'
																						checked={values.propety_type == 'plotform'}
																					/>
																					<label htmlFor='plotform'>Plot Form</label>
																				</div>
																			</>
																		)}
																	</div>
																</TabPane>
																<TabPane tabId='3'>
																	<div className='InputradioGroup'>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='office'
																				className='radio'
																				id='office'
																				type='radio'
																				checked={values.propety_type == 'office'}
																			/>
																			<label htmlFor='office'>Office</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='shop'
																				className='radio'
																				id='shop'
																				type='radio'
																				checked={values.propety_type == 'shop'}
																			/>
																			<label htmlFor='shop'>Shop</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='warehouse'
																				className='radio'
																				id='warehouse'
																				type='radio'
																				checked={values.propety_type == 'warehouse'}
																			/>
																			<label htmlFor='warehouse'>warehouse</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='factory'
																				className='radio'
																				id='factory'
																				type='radio'
																				checked={values.propety_type == 'factory'}
																			/>
																			<label htmlFor='factory'>Factory</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='building'
																				className='radio'
																				id='building'
																				type='radio'
																				checked={values.propety_type == 'building'}
																			/>
																			<label htmlFor='building'>Building</label>
																		</div>
																		<div className='property-radio-item'>
																			<Field
																				name='propety_type'
																				value='other'
																				className='radio'
																				id='propety_type_other'
																				type='radio'
																				checked={values.propety_type == 'other'}
																			/>
																			<label htmlFor='propety_type_other'>Other</label>
																		</div>
																	</div>
																</TabPane>
															</TabContent>
														</div>
													</Col>
													{values.property_category !== 'plot' &&
														values.propety_type !== 'room' &&
														values.propety_type !== 'penthouse' && (
															<>
																<Col sm='6' md='4' className='form-group'>
																	<Field
																		name='max_rooms'
																		component={ReactstrapSelect}
																		type='number'
																		className='form-control'
																		label='Max Rooms'
																		inputprops={{
																			options: ['0','1', '2', '3', '4', '5', '6'],
																		}}
																	/>
																</Col>
																<Col sm='6' md='4' className='form-group'>
																	<Field
																		name='beds'
																		component={ReactstrapSelect}
																		type='number'
																		className='form-control'
																		label='Beds'
																		inputprops={{
																			options: ['0','1', '2', '3', '4', '5', '6'],
																		}}
																	/>
																</Col>
																<Col sm='6' md='4' className='form-group'>
																	<Field
																		name='kitchens'
																		component={ReactstrapSelect}
																		type='number'
																		className='form-control'
																		label='Kitchens'
																		inputprops={{
																			options: ['0','1', '2', '3', '4', '5', '6'],
																		}}
																	/>
																</Col>
																<Col sm='6' md='4' className='form-group'>
																	<Field
																		name='baths'
																		component={ReactstrapSelect}
																		type='number'
																		className='form-control'
																		label='Baths'
																		inputprops={{
																			options: ['0','1', '2', '3', '4', '5', '6'],
																		}}
																	/>
																</Col>
															</>
														)}
													<Col sm='12' md='8' className='form-group'>
														<Row>
															<Col sm='7' style={{ paddingRight: 0 }}>
																<Field
																	name='area'
																	type='number'
																	className='form-control'
																	component={ReactstrapInput}
																	label='Area'
																	placeholder='85 Sq Ft'
																/>
															</Col>
															<Col sm='5'>
																<Field
																	name='area_unit'
																	component={ReactstrapSelect}
																	type='text'
																	className='form-control mb-0'
																	label='Area Unit'
																	inputprops={{
																		options: ['Marla', 'Sq. Ft.', 'Sq. Mt.', 'Sq. Yd.', 'Kanal'],
																	}}
																/>
															</Col>
														</Row>
													</Col>
													<Col sm='12' md='8' className='form-group'>
														<Row>
															<Col sm='7' style={{ paddingRight: 0 }}>
																{values.property_purpose === 'sell' ? (
																	<Field
																		name='property_price'
																		type='number'
																		className='form-control'
																		component={ReactstrapInput}
																		label='Property Price'
																		placeholder='Enter Price'
																	/>
																) : (
																	<Field
																		name='monthly_rent'
																		type='number'
																		className='form-control'
																		component={ReactstrapInput}
																		label='Monthly Rent'
																		placeholder='Enter Rent'
																	/>
																)}
															</Col>
															<Col sm='5'>
																<Field
																	name='price_unit'
																	component={ReactstrapSelect}
																	type='text'
																	className='form-control mb-0'
																	label='Price Unit'
																	inputprops={{
																		options: ['PKR', 'USD'],
																	}}
																/>
															</Col>
														</Row>
													</Col>
													<Col sm='12' className='form-group'>
														<Field
															name='title'
															type='text'
															className='form-control'
															component={ReactstrapInput}
															label='Title'
															placeholder=''
														/>
													</Col>
													<Col sm='12' className='form-group'>
														<Field
															type='textarea'
															name='description'
															component={ReactstrapInput}
															className='form-control'
															rows={4}
															label='Description'
														/>
													</Col>
													{values.propety_type !== 'room' &&
														values.propety_type !== 'penthouse' &&
														values.propety_type !== 'plotfile' &&
														values.propety_type !== 'industrialland' &&
														values.propety_type !== 'plotform' && (
															<Col sm='12' className='form-froup'>
																<h6 className='mb-2'>Feature and Amenities</h6>
																<p className='mb-0'>
																	Add additional features e.g. parking spaces, waste disposal,
																	internet etc.
																</p>
																<Button  onClick={toggle} className='mt-3 btn-gradient'>
																	Add Amenities
																</Button>
															</Col>
														)}
												</Row>
												<Modal isOpen={modal} centered size='xl' className='feature-modal'>
													<ModalHeader>
														Feature and Amenities
														<Button
															type='button'
															className='btn-close'
															data-bs-dismiss='modal'
															aria-label='Close'
															onClick={() => setModal(false)}>
															<span aria-hidden='true'>×</span>
														</Button>
													</ModalHeader>
													<ModalBody>
														<div className='feature-amenities-modal'>
															<Nav>
																<NavItem>
																	<NavLink
																		className={activeTab == '1' ? 'active' : ''}
																		onClick={() => setActiveTab('1')}>
																		{values.property_category == 'plot'
																			? 'Plot Features'
																			: 'Main Features'}
																	</NavLink>
																</NavItem>
																{values.property_category !== 'plot' && (
																	<>
																		<NavItem>
																			<NavLink
																				className={activeTab == '2' ? 'active' : ''}
																				onClick={() => setActiveTab('2')}>
																				Business and Communication
																			</NavLink>
																		</NavItem>
																		<NavItem>
																			<NavLink
																				className={activeTab == '3' ? 'active' : ''}
																				onClick={() => setActiveTab('3')}>
																				Community Features
																			</NavLink>
																		</NavItem>
																		<NavItem>
																			<NavLink
																				className={activeTab == '4' ? 'active' : ''}
																				onClick={() => setActiveTab('4')}>
																				Healthcare Recreational
																			</NavLink>
																		</NavItem>
																	</>
																)}
																<NavItem>
																	<NavLink
																		className={activeTab == '5' ? 'active' : ''}
																		onClick={() => setActiveTab('5')}>
																		Nearby Locations
																	</NavLink>
																</NavItem>
															</Nav>
															<TabContent activeTab={activeTab}>
																{values.property_category === 'plot' ? (
																	<TabPane tabId='1'>
																		<Row className='my-3'>
																			<Col md={12} lg={6}>
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='water_resource'>
																						Nearby Water Resources
																					</label>
																					<Field
																						name='features.plot.nearby_water_resources'
																						value={true}
																						checked={values.features.plot.nearby_water_resources}
																						className='checkbox_animated color-2'
																						id='possession'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='possession'>
																						Possesion
																					</label>
																					<Field
																						name='features.plot.possesion'
																						value={true}
																						checked={values.features.plot.possesion}
																						className='checkbox_animated color-2'
																						id='possession'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='electricity'>
																						Electricity
																					</label>
																					<Field
																						name='features.plot.electricity'
																						value={true}
																						checked={values.features.plot.electricity}
																						className='checkbox_animated color-2'
																						id='electricity'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='irrigation'>
																						Irrigation
																					</label>
																					<Field
																						name='features.plot.irrigation'
																						value={true}
																						checked={values.features.plot.irrigation}
																						className='checkbox_animated color-2'
																						id='irrigation'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='accessible_by_road'>
																						Accessible by Road
																					</label>
																					<Field
																						name='features.plot.accessible_by_road'
																						value={true}
																						checked={values.features.plot.accessible_by_road}
																						className='checkbox_animated color-2'
																						id='accessible_by_road'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='land_fertility'>
																						Land Fertility
																					</label>
																					<Field
																						name='features.plot.land_fertility'
																						value={true}
																						checked={values.features.plot.land_fertility}
																						className='checkbox_animated color-2'
																						id='land_fertility'
																						type='checkbox'
																					/>
																				</div>
																			</Col>
																			<Col md={12} lg={6}>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='disputed'>
																						Disputed
																					</label>
																					<Field
																						name='features.plot.disputed'
																						value={true}
																						checked={values.features.plot.disputed}
																						className='checkbox_animated color-2'
																						id='disputed'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='sui_gas'>
																						Sui Gas
																					</label>
																					<Field
																						name='features.plot.sui_gas'
																						value={true}
																						checked={values.features.plot.sui_gas}
																						className='checkbox_animated color-2'
																						id='sui_gas'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='tube_wells'>
																						Tube Wells
																					</label>
																					<Field
																						name='features.plot.tube_wells'
																						value={true}
																						checked={values.features.plot.tube_wells}
																						className='checkbox_animated color-2'
																						id='tube_wells'
																						type='checkbox'
																					/>
																				</div>
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='perimeter_fencing'>
																						Perimeter Fencing
																					</label>
																					<Field
																						name='features.plot.perimeter_fencing'
																						value={true}
																						checked={values.features.plot.perimeter_fencing}
																						className='checkbox_animated color-2'
																						id='perimeter_fencing'
																						type='checkbox'
																					/>
																				</div>
																				{values.propety_type == 'agriculturalland' ? (
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='boundary_lines'>
																							Boundary Lines
																						</label>
																						<Field
																							name='features.plot.boundary_lines'
																							value={true}
																							checked={values.features.plot.boundary_lines}
																							className='checkbox_animated color-2'
																							id='boundary_lines'
																							type='checkbox'
																						/>
																					</div>
																				) : (
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='boundary_wall'>
																							Boundary Wall
																						</label>
																						<Field
																							name='features.plot.boundary_wall'
																							value={true}
																							checked={values.features.plot.boundary_wall}
																							className='checkbox_animated color-2'
																							id='boundary_wall'
																							type='checkbox'
																						/>
																					</div>
																				)}
																			</Col>
																		</Row>
																	</TabPane>
																) : (
																	<TabPane tabId='1'>
																		<Row className='my-3'>
																			<Col md={12} lg={6}>
																				{values.propety_type !== 'factory' && (
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='flooring'>
																							Flooring
																						</label>
																						<Field
																							name='features.main.flooring'
																							component={ReactstrapSelect}
																							type='text'
																							className='form-control mb-0'
																							id='flooring'
																							inputprops={{
																								options: [
																									'None',
																									'Tiles',
																									'Marbeles',
																									'Wooden',
																									'Chipe',
																									'Cement',
																									'Other',
																								],
																							}}
																						/>
																					</div>
																				)}
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='built_in_year'>
																						Built in year
																					</label>
																					<Field
																						name='features.main.built_in_year'
																						type='number'
																						className='form-control'
																						component={ReactstrapInput}
																						id='built_in_year'
																					/>
																				</div>
																				<div className='amenities'>
																					<label className='field-attribue' htmlFor='floors'>
																						Floors
																					</label>
																					<Field
																						name='features.main.floors'
																						type='number'
																						className='form-control'
																						component={ReactstrapInput}
																						id='floors'
																					/>
																				</div>
																				{(values.propety_type === 'flat' ||
																					values.propety_type === 'office') && (
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='lobby_in_building'>
																							Lobby in Building
																						</label>
																						<Field
																							name='features.main.lobby_in_building'
																							type='number'
																							className='form-control'
																							component={ReactstrapInput}
																							id='lobby_in_building'
																						/>
																					</div>
																				)}
																				{values.propety_type === 'building' && (
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='no_of_units'>
																							Number of Units
																						</label>
																						<Field
																							name='features.main.number_of_units'
																							type='number'
																							className='form-control'
																							component={ReactstrapInput}
																							id='no_of_units'
																						/>
																					</div>
																				)}
																				{values.propety_type !== 'factory' && (
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='air_conditioning'>
																							Central Air Conditioning
																						</label>
																						<Field
																							name='features.main.central_air_conditioning'
																							value={true}
																							checked={
																								values.features.main.central_air_conditioning
																							}
																							className='checkbox_animated color-2'
																							id='air_conditioning'
																							type='checkbox'
																						/>
																					</div>
																				)}
																				{values.propety_type === 'building' && (
																					<>
																						<div className='amenities'>
																							<label
																								className='field-attribue'
																								htmlFor='public_parking'>
																								Public Parking
																							</label>
																							<Field
																								name='features.main.public_parking'
																								value={true}
																								checked={values.features.main.public_parking}
																								className='checkbox_animated color-2'
																								id='public_parking'
																								type='checkbox'
																							/>
																						</div>
																						<div className='amenities'>
																							<label
																								className='field-attribue'
																								htmlFor='underground_parking'>
																								Underground Parking
																							</label>
																							<Field
																								name='features.main.underground_parking'
																								value={true}
																								checked={values.features.main.underground_parking}
																								className='checkbox_animated color-2'
																								id='underground_parking'
																								type='checkbox'
																							/>
																						</div>
																					</>
																				)}
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='waste_disposal'>
																						Waste Disposal
																					</label>
																					<Field
																						name='features.main.waste_disposal'
																						value={true}
																						checked={values.features.main.waste_disposal}
																						className='checkbox_animated color-2'
																						id='waste_disposal'
																						type='checkbox'
																					/>
																				</div>
																			</Col>
																			<Col md={12} lg={6}>
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='electricity_backup'>
																						Electricity Backup
																					</label>
																					<Field
																						name='features.main.electricity_backup'
																						component={ReactstrapSelect}
																						type='text'
																						id='electricity_backup'
																						className='form-control mb-0'
																						inputprops={{
																							options: [
																								'None',
																								'Generator',
																								'Ups',
																								'Solar',
																								'Other',
																							],
																						}}
																					/>
																				</div>
																				<div className='amenities'>
																					<label
																						className='field-attribue'
																						htmlFor='parking_spaces'>
																						Parking Spaces
																					</label>
																					<Field
																						name='features.main.parking_spaces'
																						type='number'
																						className='form-control'
																						component={ReactstrapInput}
																						id='parking_spaces'
																					/>
																				</div>
																				{(values.propety_type === 'flat' ||
																					values.propety_type === 'shop' ||
																					values.propety_type === 'building' ||
																					values.propety_type === 'office') && (
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='floors_in_building'>
																							Floors in Building
																						</label>
																						<Field
																							name='features.main.floors_in_building'
																							type='number'
																							className='form-control'
																							component={ReactstrapInput}
																							id='floors_in_building'
																						/>
																					</div>
																				)}
																				{values.propety_type !== 'house' &&
																					values.propety_type !== 'upperportion' &&
																					values.propety_type !== 'lowerportion' &&
																					values.propety_type !== 'farmhouse' && (
																						<div className='amenities'>
																							<label className='field-attribue' htmlFor='elevators'>
																								Elevators
																							</label>
																							<Field
																								name='features.main.elevators'
																								type='number'
																								className='form-control'
																								component={ReactstrapInput}
																								id='elevators'
																							/>
																						</div>
																					)}
																				{values.propety_type !== 'shop' &&
																					values.propety_type !== 'factory' &&
																					values.propety_type !== 'building' &&
																					values.propety_type !== 'warehouse' && (
																						<div className='amenities'>
																							<label
																								className='field-attribue'
																								htmlFor='glazed_windows'>
																								Double Glazed Windows
																							</label>
																							<Field
																								name='features.main.double_glazed_windows'
																								value={true}
																								checked={values.features.main.double_glazed_windows}
																								className='checkbox_animated color-2'
																								id='glazed_windows'
																								type='checkbox'
																							/>
																						</div>
																					)}
																				{values.propety_type !== 'factory' && (
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='central_heating'>
																							Central Heating
																						</label>
																						<Field
																							name='features.main.central_heating'
																							value={true}
																							checked={values.features.main.central_heating}
																							className='checkbox_animated color-2'
																							id='central_heating'
																							type='checkbox'
																						/>
																					</div>
																				)}
																				{values.propety_type !== 'house' &&
																					values.propety_type !== 'upperportion' &&
																					values.propety_type !== 'lowerportion' &&
																					values.propety_type !== 'farmhouse' &&
																					values.propety_type !== 'warehouse' &&
																					values.propety_type !== 'factory' && (
																						<div className='amenities'>
																							<label
																								className='field-attribue'
																								htmlFor='service_elevator'>
																								Service Elevators in Building
																							</label>
																							<Field
																								name='features.main.service_elevators_in_building'
																								value={true}
																								checked={
																									values.features.main.service_elevators_in_building
																								}
																								className='checkbox_animated color-2'
																								id='service_elevator'
																								type='checkbox'
																							/>
																						</div>
																					)}

																				{values.propety_type !== 'shop' &&
																					values.propety_type !== 'factory' &&
																					values.propety_type !== 'building' &&
																					values.propety_type !== 'warehouse' && (
																						<div className='amenities'>
																							<label className='field-attribue' htmlFor='furnished'>
																								Furnished
																							</label>
																							<Field
																								name='features.main.furnished'
																								value={true}
																								checked={values.features.main.furnished}
																								className='checkbox_animated color-2'
																								id='furnished'
																								type='checkbox'
																							/>
																						</div>
																					)}
																			</Col>
																		</Row>
																	</TabPane>
																)}
																{values.property_category !== 'plot' && (
																	<>
																		<TabPane tabId='2'>
																			<Row className='my-3'>
																				<Col md={12} lg={6}>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='conference_room'>
																							Conference Room in Building
																						</label>
																						<Field
																							name='features.bussiness.conference_room_in_building'
																							type='number'
																							className='form-control'
																							component={ReactstrapInput}
																							id='conference_room'
																						/>
																					</div>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='satellite-cable'>
																							Satellite or Cable TV Ready
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.bussiness.cable_tv_ready'
																								value={true}
																								checked={values.features.bussiness.cable_tv_ready}
																								className='checkbox_animated color-2'
																								id='satellite-cable'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='atm'>
																							ATM Machines
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.bussiness.atm_machine'
																								value={true}
																								checked={values.features.bussiness.atm_machine}
																								className='checkbox_animated color-2'
																								id='atm'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='media_room'>
																							Business Center or Media Room in Building
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.bussiness.mediaroom_in_building'
																								value={true}
																								checked={
																									values.features.bussiness.mediaroom_in_building
																								}
																								className='checkbox_animated color-2'
																								id='media_room'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																				</Col>
																				<Col md={12} lg={6}>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='internet-access'>
																							Broadband Internet Access
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.bussiness.broadban_internet_access'
																								value={true}
																								checked={
																									values.features.bussiness.broadban_internet_access
																								}
																								className='checkbox_animated color-2'
																								id='internet-access'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='intercom'>
																							Intercom
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.bussiness.intercom'
																								value={true}
																								checked={values.features.bussiness.intercom}
																								className='checkbox_animated color-2'
																								id='intercom'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																				</Col>
																			</Row>
																		</TabPane>
																		<TabPane tabId='3'>
																			<Row className='my-3'>
																				<Col md={12} lg={6}>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='community-swimming-pool'>
																							Community Swimming Pool
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.swimming_pool'
																								value={true}
																								checked={values.features.community.swimming_pool}
																								className='checkbox_animated color-2'
																								id='community-swimming-pool'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='medical-mentre'>
																							First Aid or Medical Centre
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.medical_center'
																								value={true}
																								checked={values.features.community.medical_center}
																								className='checkbox_animated color-2'
																								id='medical-mentre'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='kids-play'>
																							Kids Play Area
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.kids_play_area'
																								value={true}
																								checked={values.features.community.kids_play_area}
																								className='checkbox_animated color-2'
																								id='kids-play'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='mosque'>
																							Mosque
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.mosque'
																								value={true}
																								checked={values.features.community.mosque}
																								className='checkbox_animated color-2'
																								id='mosque'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																				</Col>
																				<Col md={12} lg={6}>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='community-lawn'>
																							Community Lawn or Garden
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.lawn'
																								value={true}
																								checked={values.features.community.lawn}
																								className='checkbox_animated color-2'
																								id='community-lawn'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='community-gym'>
																							Community Gym
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.gym'
																								value={true}
																								checked={values.features.community.gym}
																								className='checkbox_animated color-2'
																								id='community-gym'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='care-center'>
																							Day Care Centre
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.day_care_center'
																								value={true}
																								checked={values.features.community.day_care_center}
																								className='checkbox_animated color-2'
																								id='care-center'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='barbeque-area'>
																							Barbeque Area
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.bbq_area'
																								value={true}
																								checked={values.features.community.bbq_area}
																								className='checkbox_animated color-2'
																								id='barbeque-area'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='community-center'>
																							Community Centre
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.community.community_center'
																								value={true}
																								checked={values.features.community.community_center}
																								className='checkbox_animated color-2'
																								id='community-center'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																				</Col>
																			</Row>
																		</TabPane>
																		<TabPane tabId='4'>
																			<Row className='my-3'>
																				<Col md={12} lg={6}>
																					<div className='amenities'>
																						<label
																							className='field-attribue'
																							htmlFor='swimming-pool'>
																							Swimming Pool
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.healthcare.swimming_pool'
																								value={true}
																								checked={values.features.healthcare.swimming_pool}
																								className='checkbox_animated color-2'
																								id='swimming-pool'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='jacuzzi'>
																							Jacuzzi
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.healthcare.jacuzzi'
																								value={true}
																								checked={values.features.healthcare.jacuzzi}
																								className='checkbox_animated color-2'
																								id='jacuzzi'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																				</Col>
																				<Col md={12} lg={6}>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='lawn_garden'>
																							Lawn or Garden
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.healthcare.lawn'
																								value={true}
																								checked={values.features.healthcare.lawn}
																								className='checkbox_animated color-2'
																								id='lawn_garden'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																					<div className='amenities'>
																						<label className='field-attribue' htmlFor='sauna'>
																							Sauna
																						</label>
																						<div className='mb-0'>
																							<Field
																								name='features.healthcare.sauna'
																								value={true}
																								checked={values.features.healthcare.sauna}
																								className='checkbox_animated color-2'
																								id='sauna'
																								type='checkbox'
																							/>
																						</div>
																					</div>
																				</Col>
																			</Row>
																		</TabPane>
																	</>
																)}
																<TabPane tabId='5'>
																	<Row className='my-3'>
																		<Col md={12} lg={6}>
																			<div className='amenities'>
																				<label
																					className='field-attribue'
																					htmlFor='airport_distance'>
																					Distance From Airport (kms)
																				</label>
																				<Field
																					name='features.nearby.airport_distance'
																					type='number'
																					className='form-control'
																					component={ReactstrapInput}
																					id='airport_distance'
																				/>
																			</div>
																			<div className='amenities'>
																				<label className='field-attribue'>Nearby Schools</label>
																				<Field
																					name='features.nearby.schools'
																					value={true}
																					checked={values.features.nearby.schools}
																					className='checkbox_animated color-2'
																					id='community-center'
																					type='checkbox'
																				/>
																			</div>
																			<div className='amenities'>
																				<label
																					className='field-attribue'
																					htmlFor='nearby_shopping_malls'>
																					Nearby Shopping Malls
																				</label>
																				<Field
																					name='features.nearby.shopping_malls'
																					value={true}
																					checked={values.features.nearby.shopping_malls}
																					className='checkbox_animated color-2'
																					id='community-center'
																					type='checkbox'
																				/>
																			</div>
																		</Col>
																		<Col md={12} lg={6}>
																			<div className='amenities'>
																				<label
																					className='field-attribue'
																					htmlFor='nearby_hospitals'>
																					Nearby Hospitals
																				</label>
																				<Field
																					name='features.nearby.hospitals'
																					value={true}
																					checked={values.features.nearby.hospitals}
																					className='checkbox_animated color-2'
																					id='community-center'
																					type='checkbox'
																				/>
																			</div>
																			<div className='amenities'>
																				<label
																					className='field-attribue'
																					htmlFor='nearby_restaurants'>
																					Nearby Restaurants
																				</label>
																				<Field
																					name='features.nearby.restaurants'
																					value={true}
																					checked={values.features.nearby.restaurants}
																					className='checkbox_animated color-2'
																					id='community-center'
																					type='checkbox'
																				/>
																			</div>
																			<div className='amenities'>
																				<label
																					className='field-attribue'
																					htmlFor='public_transport'>
																					Nearby Public Transport Service
																				</label>
																				<Field
																					name='features.nearby.public_transport_service'
																					value={true}
																					checked={values.features.nearby.public_transport_service}
																					className='checkbox_animated color-2'
																					id='community-center'
																					type='checkbox'
																				/>
																			</div>
																		</Col>
																	</Row>
																</TabPane>
															</TabContent>
														</div>
													</ModalBody>
													<ModalFooter>
														<Button color='secondary' onClick={toggle}>
															Cancel
														</Button>
														<Button  onClick={toggle} className='add-amenities btn-gradient'>
															Add Amenities
														</Button>
													</ModalFooter>
												</Modal>
											</div>
											<div className='form-inputs'>
												<h6>Address</h6>
												<Row className=' gx-3'>
													<Col sm='6' className='form-group'>
														<Field
															name='contact_info.email'
															component={ReactstrapInput}
															type='text'
															className='form-control'
															placeholder='Enter email'
															label='Email'
														/>
													</Col>
													<Col sm='6' className='form-group'>
														<Field
															type='text'
															name='address.zipcode'
															component={ReactstrapInput}
															className='form-control'
															label='Zip code'
															placeholder='39702'
														/>
													</Col>
													<Col sm='6' md='4' className='form-group'>
														<Field
															name='address.city'
															component={ReactstrapSelect}
															type='text'
															className='form-control'
															label='Any City'
															inputprops={{
																options: [
																	'Lahore',
																	'Islamabad',
																	'Karachi',
																	'Peshawar',
																	'Gujranwala',
																	'Quetta',
																],
															}}
														/>
													</Col>
													<Col sm='6' md='4' className='form-group'>
														<Field
															name='address.landmark'
															type='text'
															component={ReactstrapInput}
															className='form-control'
															placeholder='landmark place name'
															label='Landmark'
														/>
													</Col>
													<Col sm='6' md='4' className='form-group'>
														<Label htmlFor='PhoneNumber' className={'label-color'}>
															Phone Number
														</Label>
														<PhoneInput
															value={values.contact_info.mobile}
															className={
																errors.contact_info?.mobile && touched.contact_info?.mobile
																	? 'is-invalid'
																	: ''
															}
															defaultCountry='pk'
															id='PhoneNumber'
															onChange={(phone) =>
																formikRef.current.setFieldValue('contact_info.mobile', phone)
															}
														/>
														{errors.contact_info?.mobile && touched.contact_info?.mobile && (
															<div
																className={
																	touched.contact_info?.mobile
																		? 'invalid-feedback d-block'
																		: 'invalid-feedback'
																}>
																{errors.contact_info.mobile}
															</div>
														)}
													</Col>
													<Col sm='12' className='form-group'>
														<Field
															type='text'
															name='address.address'
															component={ReactstrapInput}
															className='form-control'
															label='Address'
															placeholder='Address of your property'
														/>
													</Col>
												</Row>
											</div>
											<div className='form-inputs'>
												<h6>Gallery</h6>
												<div className='dropzone' id='multiFileUpload'>
													<div className='dz-message needsclick'>
														<i className='fas fa-cloud-upload-alt' />
														<Dropzone
															ref={dropzoneRef}
															LayoutComponent={NoDropzoneLayout}
															onChangeStatus={handleChangeStatus}
															multiple={true}
															canCancel={true}
															canRemove={true}
															inputContent='Drop A File'
															styles={{
																dropzoneActive: {
																	borderColor: 'green',
																},
															}}
														/>
														<h6>Drop files here or click to upload.</h6>
														<span className='note needsclick'>
															(This is just a demo dropzone. Selected files are <strong>not</strong>{' '}
															actually uploaded.)
														</span>
													</div>
												</div>
												<Row className='gx-3'>
													<Col sm='12' className='form-group'>
														<Field
															name='video'
															component={ReactstrapInput}
															type='text'
															className='form-control'
															placeholder='Video link'
															label='Video'
														/>
													</Col>
													<Col sm='12' className='form-group'>
														<Label>Additional features</Label>
														<div className='feature-checkbox'>
															<Label htmlFor='chk-ani'>
																<Field
																	name='features.other.emergency_exit'
																	value={true}
																	checked={values.features.other.emergency_exit}
																	className='checkbox_animated color-2'
																	id='chk-ani'
																	type='checkbox'
																/>{' '}
																Emergency Exit
															</Label>
															<Label htmlFor='chk-ani1'>
																<Field
																	name='features.other.cctv'
																	value={true}
																	checked={values.features.other.cctv}
																	className='checkbox_animated color-2'
																	id='chk-ani1'
																	type='checkbox'
																/>{' '}
																CCTV
															</Label>
															<Label htmlFor='other_feature_free_wifi'>
																<Field
																	name='features.other.free_wifi'
																	value={true}
																	checked={values.features.other.free_wifi}
																	className='checkbox_animated color-2'
																	id='other_feature_free_wifi'
																	type='checkbox'
																/>{' '}
																Free Wi-Fi
															</Label>
															<Label htmlFor='other_feature_free_parking'>
																<Field
																	name='features.other.free_parking'
																	value={true}
																	checked={values.features.other.free_parking}
																	className='checkbox_animated color-2'
																	id='other_feature_free_parking'
																	type='checkbox'
																/>{' '}
																Free Parking In The Area
															</Label>
															<Label htmlFor='other_feature_air_conditioning'>
																<Field
																	name='features.other.air_conditioning'
																	value={true}
																	className='checkbox_animated color-2'
																	id='other_feature_air_conditioning'
																	checked={values.features.other.air_conditioning}
																	type='checkbox'
																/>{' '}
																Air Conditioning
															</Label>
														</div>
													</Col>
												</Row>
											</div>
											<div className='text-end'>
												<Button
													disabled={isSubmitting ? true : false}
													type='submit'
													className='btn btn-gradient color-2 btn-pill'>
													{isSubmitting ? <Spinner color='light' size='sm' /> : 'Add property'}
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Form>
					)
				}}
			/>
		</NoSsr>
	)
}

export default CreatePropertyTab
