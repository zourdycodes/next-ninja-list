import Layout from "../components/Layout";
// import "../styles/index.css";
import "../styles/globals.css";
// import "tailwindcss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* children */}
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
