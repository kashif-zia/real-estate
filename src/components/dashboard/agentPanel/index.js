import React, { useState } from 'react'
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap'
import ChatTab from '../agentPanel/chatTab'
import CreatePropertyTab from '../agentPanel/createPropertyTab'
import FavoritesTab from './favouritesTab'
import MyListingTab from './myListingTab'
import MyProfileTab from './myProfileTab'
import PrivacyTab from './privacyTab.js'
import UserDashboardTab from './agentDashboardTab'
import UserPanelSidebar from './AgentPanelSidebar'
import AgentNotifications from '../agentPanel/notificationTab'
import SuggestionsTab from '../agentPanel/suggestionRequestTab'

const BodyContent = ({ active }) => {
	const [activeTab, setActiveTab] = useState(active)

	return (
		<section className='user-dashboard small-section'>
			<Container>
				<Row>
					<UserPanelSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
					<Col lg='9'>
						{activeTab == 'Dashboard' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Dashboard'>
									<UserDashboardTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Listing' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Listing'>
									<MyListingTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Suggestions' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Suggestions'>
									<SuggestionsTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'CreateProperty' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='CreateProperty'>
									<CreatePropertyTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Profile' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Profile'>
									<MyProfileTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Favorites' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Favorites'>
									<FavoritesTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'AgentNotifications' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='AgentNotifications'>
									<AgentNotifications />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Paymnet' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Paymnet'>
									<CardsPaymentTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Privacy' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Privacy'>
									<PrivacyTab />
								</TabPane>
							</TabContent>
						)}
						{activeTab == 'Chat' && (
							<TabContent activeTab={activeTab}>
								<TabPane tabId='Chat'>
									<ChatTab />
								</TabPane>
							</TabContent>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default BodyContent
