import { FC } from "react";
import Head from "next/head";
import { MenuLateral, Navbar } from "../ui";
import { Box, Typography, Link, Button, Grid } from "@mui/material";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";
import NextLink from "next/link";

interface Props {
  title: string;
  children: React.ReactNode;
  aviso: string;
}

export const AuthLayout: FC<Props> = ({ children, title, aviso }) => {
  const { data: session, status }: any = useSession();

  //console.log(session && session.user.activo);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>
        <Navbar />
        {session && session.user.activo === false && aviso === "true" ? (
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              width: "100%",
              backgroundColor: "red",
              position: "absolute",
              color: "#fff",
              marginTop: "-30px",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
              Tu usuario no esta activo, debes pagar el valor de la apuesta para
              activarte!!!
            </Typography>
          </Box>
        ) : null}
      </nav>

      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ marginTop: "100px" }}
      >
        <NextLink href="/grilla" passHref>
          <Link>
            <Button
              variant="text"
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: "700",

                color: "#ffffff",
                backgroundColor:
                  session && session.user.activo === true ? "#1e411b" : "#fff",
                padding: "10px",
                visibility:
                  session && session.user.activo === true
                    ? "visible"
                    : "hidden",
                cursor:
                  session && session.user.activo === true ? "pointer" : "help",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontSize: { md: "17.2px", xs: "14px" } }}
              >
                Grilla y Posiciones
              </Typography>
            </Button>
          </Link>
        </NextLink>
      </Grid>

      <MenuLateral />

      <main>
        <Box>{children}</Box>
      </main>
    </>
  );
};
