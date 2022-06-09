import "../styles/globals.css";
import type { AppProps } from "next/app";
import Announcement from "../components/announcement/Announcement";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Announcement label="Admission open" link="hello" type="link" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
