import Layout from '../components/layout';
import '../styles/globals.css';

// Main Layout
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
