import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {persistStore} from 'redux-persist';
import {PageLoading} from '../src/screens/page-loading';
import {ReduxPersistGate} from '../src/components/redux-persist-gate';
import {constants} from '../src/utils/constants';
import {GoogleAnalytics} from '../src/components/google-analytics';
import {useIsRTL} from '../src/utils/trans';
import {AppProps} from 'next/app'
import {ToastContainer} from "react-toastify";
import "styles/globals.css"

const queryClient = new QueryClient();

let persistor = persistStore(store);

function MyApp({Component, pageProps}: AppProps) {
  const isRTL = useIsRTL();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ReduxPersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <PageLoading/>
          <ToastContainer />
          <GoogleAnalytics gaId={constants?.ga?.id}/>
        </ReduxPersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
