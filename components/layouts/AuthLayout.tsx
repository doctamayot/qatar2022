import { FC } from "react";
import Head from "next/head";
import { MenuLateral, Navbar } from "../ui";
import { Box, Typography } from "@mui/material";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";

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

      <MenuLateral />

      <main>
        <Box>{children}</Box>
      </main>
    </>
  );
};
