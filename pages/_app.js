import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Layout from "../components/layout";
import "../styles/globals.css";
import Script from "next/script";

const GA_MANAGER_CODE = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CODE;
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// Main Layout
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleTagManager gtmId={GA_MANAGER_CODE} />
      <GoogleAnalytics gaId={GA_ID} />
      <Script src="../utils/zoom-info" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
