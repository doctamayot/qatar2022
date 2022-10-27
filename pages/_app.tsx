import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";
import { UiProvider } from "../context";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SessionProvider session={session}>
        <UiProvider>
          <Component {...pageProps} />
        </UiProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
