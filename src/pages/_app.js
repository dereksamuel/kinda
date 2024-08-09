import "@/assets/fonts/stylesheet.css";
import GeneralStyles from "@/styled-components";

export default function App({ Component, pageProps }) {
  return (
    <GeneralStyles>
      <Component {...pageProps} />
    </GeneralStyles>
  );
}
