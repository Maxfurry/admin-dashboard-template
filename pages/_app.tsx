import {AppProps} from "next/app";
import globalStyle from "../styles/global.style";

export default ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <style jsx>{globalStyle}</style>
  </>
);
