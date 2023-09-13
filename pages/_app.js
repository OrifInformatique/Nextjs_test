
// to remove when all pages are in the app router
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
