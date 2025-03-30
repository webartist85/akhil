import "@import/styles/globals.css";
import "@import/styles/font.css";
import "@import/styles/scss/style.scss";
import { ThemeProvider } from "@import/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
