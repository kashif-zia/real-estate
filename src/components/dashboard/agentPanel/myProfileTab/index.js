import React, { useState } from 'react'
import { CheckSquare, Mail, MapPin } from 'react-feather'
import { Row } from 'reactstrap'
import ReviewStarr from '../../../elements/ReviewStarr'
import ChangeDetails from './ChangeDetails'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const MyProfileTab = () => {
	const user = useSelector((state) => state.auth)
	const [modal, setModal] = useState()
	return (
		<div className='dashboard-content'>
			<div className='my-profile' id='profile'>
				<div className='profile-info'>
					<div className='common-card'>
						<div className='user-name media'>
							<div className='media-body'>
								<h5>
									{user.name} <span className='label label-success'>Real estate {user.role}</span>
								</h5>
							</div>
							<span
								className='label label-light label-flat'
								onClick={() => setModal('editProfile')}>
								Edit
							</span>
						</div>
						<ul className='user-detail'>
							<li>
								<MapPin />
								<span>{user.address || 'N/A'}</span>
							</li>
							<li>
								<Mail />
								<span>{user.email || 'N/A'}</span>
							</li>
						</ul>
						{user.bio && <p className='font-roboto user-bio'>{user.bio}</p>}
					</div>
					<div className='common-card'>
						<Row>
							<div className='col-xxl-6 col-xl-7'>
								<div className='information-detail'>
									<div className='common-header'>
										<h5>About</h5>
									</div>
									<div className='information'>
										<ul>
											<li>
												<span>Gender :</span>
												<p>{user.gender || 'N/A'}</p>
											</li>
											<li>
												<span>Birthday :</span>
												<p>{user.birthday || 'N/A'}</p>
											</li>
											<li>
												<span>Phone number :</span>
												<a>{user.phone_number || 'N/A'}</a>
											</li>
											<li>
												<span>Address :</span>
												<p>{user.address ? user.address : user.state ? user.state : 'N/A'}</p>
											</li>
										</ul>
									</div>
								</div>
								<div className='information-detail'>
									<div className='common-header'>
										<h5>Login Details</h5>
									</div>
									<div className='information'>
										<ul>
											<li>
												<span>Password :</span>
												<a>{Array(8).fill('*').join('')}</a>
												<span
													className='label label-light label-flat'
													onClick={() => setModal('changePass')}>
													Edit
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-0'>
								<div className='about-img d-xl-block d-none'>
									<img src='/assets/images/inner-pages/2.png' className='img-fluid' alt='' />
								</div>
							</div>
						</Row>
					</div>
				</div>
			</div>
			<EditProfile toggle={'editProfile' === modal ? true : false} setModal={setModal} />
			<ChangeDetails
				toggle={modal === 'changePass' ? true : false}
				setModal={setModal}
				detail={'password'}
			/>
		</div>
	)
}

export default MyProfileTab
