import React, { useEffect, useState } from 'react'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavbarTwo from '../../../layout/headers/NavbarTwo'

// export const getStaticProps = async ({ locale }) => ({
//   props: { ...(await serverSideTranslations(locale, ['common'])) },
// });

import Footer from '../../../layout/footers/Footer'
import Breadcrumb from '../../../layout/Breadcrumb/Breadcrumb'
import BodyContent from '../../../components/dashboard/agentPanel'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { LoadingScreen } from '../../../layout/loader/LoadingScreen'
import {fGRAPHQL_AUTH_MODE,graphqlOperation} from "@aws-amplify/api"
import {createProperty} from "../../../graphql/mutations"

const UserDashboard = () => {
	const router = useRouter()
	const auth = useSelector((state) => state.auth)
	const [showLoader, setShowLoader] = useState(true)

	// use effects

	useEffect(() => {
		if (auth.loggedIn) {
			console.log(auth, 'yban')
			auth.authRole == 'buyer'
				? router.push('/dashboard/user-dashboard')
				: router.push('/dashboard/agent-dashboard')
		} else {
			router.push('/auth/signup')
		}
		setTimeout(() => {
			console.log(auth, 'yban')

			setShowLoader(false)
		}, 1700)
	}, [])

	return (
		<>
			{showLoader && <LoadingScreen />}
			<NavbarTwo />
			<Breadcrumb />
			<BodyContent active={'Dashboard'} />
			<Footer />
		</>
	)
}

export default UserDashboard
