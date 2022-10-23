import { FC } from "react";
import Head from "next/head";
import { MenuLateral, Navbar } from "../ui";
import { Box } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <MenuLateral />
      <main>
        <Box>{children}</Box>
      </main>
    </>
  );
};
