import '../../public/assets/scss/app.scss';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TapToTop from '../layout/TapToTop';
import Customizer from '../layout/Customizer';
import { store, persistor } from '../../src/libs/redux-toolkit/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';
import StoreOldData from '../libs/utils/StoreOldData';
import 'react-toastify/dist/ReactToastify.css';
import { ConfigDB } from '../config/themeCustomizerConfig';
import AmplifyProvider from '../libs/providers';
// PHONE NUMBER PACKAGE CSS 
import "react-international-phone/style.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      document.documentElement.style.setProperty(
        '--theme-default',
        ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : '#4b55c4'
      );
      document.documentElement.style.setProperty(
        '--theme-default2',
        ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : '#4b55c4'
      );
    });
    document.documentElement.style.setProperty(
      '--theme-default',
      ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : '#4b55c4'
    );
    document.documentElement.style.setProperty(
      '--theme-default2',
      ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : '#4b55c4'
    );
  }, [router.events]);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Sheltos - Filter search with slider home page" />
        <meta name="keywords" content="sheltos" />
        <meta name="author" content="sheltos" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <title>Realestate | IDENBRID.INC</title>
      </Head>
      <AmplifyProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            <Customizer />
            <TapToTop />
            <StoreOldData />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={'light'}
            />
          </PersistGate>
        </Provider>
      </AmplifyProvider>
    </>
  );
}

export default MyApp
