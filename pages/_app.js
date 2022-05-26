import '../styles/globals.css'
import Layout from '@com/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout appProps={pageProps?.appProps || {}}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
