import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import GeneralStyles from "@/styled-components";

import "@/assets/fonts/stylesheet.css";

export default function App({ Component, pageProps }) {
  return (
    <GeneralStyles>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </GeneralStyles>
  );
}
