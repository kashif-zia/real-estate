import React, { useEffect, useState } from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NavbarTwo from '../../../layout/headers/NavbarTwo';

// export const getStaticProps = async ({ locale }) => ({
//   props: { ...(await serverSideTranslations(locale, ['common'])) },
// });

import Footer from '../../../layout/footers/Footer';
import Breadcrumb from '../../../layout/Breadcrumb/Breadcrumb';
import BodyContent from '../../../components/dashboard/userPanel';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { LoadingScreen } from '../../../layout/loader/LoadingScreen';

const UserDashboard = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const [showLoader, setShowLoader] = useState(true);

  // use effects

  useEffect(() => {
    if (auth.loggedIn) {
      // console.log(auth, "yban");
      auth.authRole == 'buyer' ? router.push('/dashboard/user-dashboard') : router.push('/dashboard/agent-dashboard');
    } else {
      router.push('/auth/signup');
    }
    setTimeout(() => {
      setShowLoader(false);
    }, 1700);
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      {showLoader && <LoadingScreen />}
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent active={'Dashboard'} />
      <Footer />
    </>
  );
};

export default UserDashboard;
