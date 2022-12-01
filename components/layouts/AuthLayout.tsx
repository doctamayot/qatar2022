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
        {/* {session && session.user.activo === false && aviso === "true" ? (
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
        ) : null} */}
      </nav>

      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ marginTop: "100px" }}
      >
        <Box display="flex">
          <NextLink href="/grilla" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",

                  color: "#ffffff",
                  backgroundColor: "#1e411b",

                  padding: "10px",

                  cursor: "pointer",
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
          <NextLink href="/posiciones" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  marginLeft: "10px",
                  color: "#ffffff",
                  backgroundColor: "#202894",

                  padding: "10px",

                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { md: "17.2px", xs: "14px" } }}
                >
                  Posiciones Grupos
                </Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/datosfinal" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  marginLeft: "10px",
                  color: "#ffffff",
                  backgroundColor: "#289455",

                  padding: "10px",

                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { md: "17.2px", xs: "14px" } }}
                >
                  Extras
                </Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/pollas/pollas" passHref>
            <Link>
              <Button
                variant="text"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "700",
                  marginLeft: "10px",
                  width: "100%",

                  color: "#ffffff",
                  backgroundColor: "#a01e1e",

                  padding: "10px",

                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { md: "17.2px", xs: "14px" } }}
                >
                  Pollas
                </Typography>
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Grid>

      <MenuLateral />

      <main>
        <Box>{children}</Box>
      </main>
    </>
  );
};
