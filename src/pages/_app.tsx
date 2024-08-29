import type {AppProps} from "next/app";
import "../styles/global.css";
console.log("app log");
export default function myApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
