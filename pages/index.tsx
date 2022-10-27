import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Octavos } from "../components/Octavos";
import { Grupoa } from "../components/Grupoa";
import { AuthLayout } from "../components/layouts";
import { Grid, Button } from "@mui/material";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";
import { tesloApi } from "../axios";
import { Loading } from "../components/ui";
import { useRouter } from "next/router";
// const options = {
//   method: "GET",
//   url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
//   params: {
//     league: "1",
//     season: "2022",
//     from: "2022-11-19",
//     to: "2022-12-25",
//     timezone: "America/Bogota",
//   },
//   headers: {
//     "X-RapidAPI-Key": "a554d9c755mshce5f186db9e6066p1a0aeajsn9d88b7d58946",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// };

const Home: NextPage = () => {
  const [data, setData] = useState([] as any);
  const router = useRouter();
  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       //console.log(response.data);

  //       setData(response.data.response);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);
  // console.log(data);

  const [cargando, setCargando] = useState(false);
  const { data: session, status }: any = useSession();

  const editar = async (id: any) => {
    setCargando(true);
    const user: any = { _id: session && session.user._id };
    try {
      await tesloApi({
        url: `/apuesta/apuesta`,
        method: "POST",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
    router.push("grupos/grupoa");
    // setJugado(!jugado);
  };

  return (
    <AuthLayout title="Polla tamayo">
      {cargando ? (
        <Loading />
      ) : (
        <Grid sx={{ marginTop: "100px" }}>
          <Button onClick={editar}>Empezar</Button>
        </Grid>
      )}
    </AuthLayout>
  );
};

export default Home;
