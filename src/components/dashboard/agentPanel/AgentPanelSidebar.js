/**
 * It takes the file from the input field and displays it in the image tag
 * @returns A Col component with a div inside of it.
 */
import React from 'react'
import { Camera } from 'react-feather'
import { useSelector } from 'react-redux'
import { Col, Nav, NavItem, NavLink } from 'reactstrap'

const UserPanelSidebar = ({ activeTab, setActiveTab }) => {
	const user = useSelector((state) => state.auth)
	return (
		<Col lg='3'>
			<div className='sidebar-user sticky-cls'>
				<div className='user-profile'>
					<div className='media'>
						<div className='change-pic'>
							<img src='/assets/images/avatar/3.jpg' className='img-fluid update_img' alt='' />
							<div className='change-hover'>
								<button type='button' className='btn'>
									<Camera />
								</button>
								<input
									className='updateimg'
									type='file'
									name='img'
									// onChange='readURL(this,0)'
								/>
							</div>
						</div>
						<div className='media-body'>
							<h5>{user.first_name ? user.first_name + ' ' + user.last_name : user.name}</h5>
							<h6 className='font-roboto'>{user.email}</h6>
							<h6 className='font-roboto mb-0'>{user.phone_number}</h6>
						</div>
					</div>
					<div className='connected-social'>
						<h6>Connect with</h6>
						<ul className='agent-social'>
							<li>
								<a href='https://www.facebook.com/' className='facebook'>
									<i className='fab fa-facebook-f'></i>
								</a>
							</li>
							{/* <li>
                <a href='https://twitter.com/' className='twitter'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li> */}
							<li>
								<a href='https://account.google.com' className='google'>
									<i className='fab fa-google'></i>
								</a>
							</li>
							{/* <li>
                <a href='https://www.linkedin.com/' className='linkedin'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li> */}
						</ul>
					</div>
				</div>
				<div className='dashboard-list'>
					<Nav tabs className='right-line-tab'>
						<NavItem>
							<NavLink
								className={activeTab === 'Dashboard' ? 'active' : ''}
								onClick={() => setActiveTab('Dashboard')}>
								Dashboard
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'Profile' ? 'active' : ''}
								onClick={() => setActiveTab('Profile')}>
								My Profile
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'Listing' ? 'active' : ''}
								onClick={() => setActiveTab('Listing')}>
								My Listing
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'Suggestions' ? 'active' : ''}
								onClick={() => setActiveTab('Suggestions')}>
								Suggestion Request
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'CreateProperty' ? 'active' : ''}
								onClick={() => setActiveTab('CreateProperty')}>
								create property
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'Favorites' ? 'active' : ''}
								onClick={() => setActiveTab('Favorites')}>
								Wishlist
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'AgentNotifications' ? 'active' : ''}
								onClick={() => setActiveTab('AgentNotifications')}>
								Notifications
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'Privacy' ? 'active' : ''}
								onClick={() => setActiveTab('Privacy')}>
								Setting
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === 'Chat' ? 'active' : ''}
								onClick={() => setActiveTab('Chat')}>
								Chat
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</div>
		</Col>
	)
}

export default UserPanelSidebar
