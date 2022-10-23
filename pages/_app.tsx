import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { UiProvider } from "../context";
//import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </ThemeProvider>
  );
}

export default MyApp;
