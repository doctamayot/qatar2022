import type { NextPage } from "next";

import { useEffect, useState } from "react";

import { AuthLayout } from "../components/layouts";
import { Grid, Button, Box, Typography, Divider } from "@mui/material";
import { useSession, signIn, getProviders } from "next-auth/react";
import { tesloApi } from "../axios";
import { Loading } from "../components/ui";
import { useRouter } from "next/router";
import { EmojiEventsOutlined, Google } from "@mui/icons-material";
import { Resultados } from "../components/resultados/resultados";

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
  const [usuarios, setUsuarios] = useState([] as any);
  const [prov, setProv] = useState([] as any);
  const [userin, setUserin] = useState([] as any);
  const router = useRouter();
  const { data: session, status }: any = useSession();

  useEffect(() => {
    (async () => {
      const providers = await getProviders();
      setProv(providers as any);
    })();
  }, []);

  const users = async () => {
    const { data } = await tesloApi({
      url: `/apuesta/apuesta`,
      method: "GET",
    });

    setUserin(data.user);
    setUsuarios(data.users);
  };

  // if (usuarios) {
  //   let pot1 = usuarios.length * 100000 * 0.75;
  //   let pot2 = usuarios.length * 100000 * 0.2;
  //   let pot3 = usuarios.length * 100000 * 0.05;

  //   console.log(pot1);
  //   console.log(pot2);
  //   console.log(pot3);
  // }

  useEffect(() => {
    users();
  }, []);

  const [cargando, setCargando] = useState(false);

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
  //console.log(user);

  return (
    <AuthLayout title="Polla tamayo" aviso="false">
      {cargando ? (
        <Loading />
      ) : (
        <Grid
          sx={{
            marginTop:
              session && session.user.activo === true ? "30px" : "-30px",
            padding: "30px",
          }}
          container
        >
          {/* <Resultados /> */}
          {userin && userin.empezado === false ? (
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Button
                onClick={editar}
                sx={{
                  margin: "40px 0px 30px 0px",
                  width: { md: "40%", xs: "100%" },
                }}
              >
                Crear Formularios
              </Button>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Box sx={{ textAlign: "center", marginTop: "10px" }}>
                <Typography variant="subtitle1" sx={{ fontSize: "50px" }}>
                  POT( POTENCIAL)
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <EmojiEventsOutlined
                    color="success"
                    sx={{ fontSize: "80px" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ marginLeft: "20px", fontSize: "40px" }}
                  >
                    $ 750.000
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <EmojiEventsOutlined
                    color="action"
                    sx={{ fontSize: "80px" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ marginLeft: "20px", fontSize: "40px" }}
                  >
                    $ 200.000
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <EmojiEventsOutlined
                    color="warning"
                    sx={{ fontSize: "80px" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ marginLeft: "20px", fontSize: "40px" }}
                  >
                    $ 50.000
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: { lg: "50px", xs: "40px", marginTop: "100px" },
                }}
              >
                Bienvenidos de nuevo a la Polla Tamayo Qatar 2022
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: "40px" }}>
                Reglamento
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="left"
              alignItems="left"
              flexDirection="column"
              sx={{ width: { lg: "50%" }, margin: "0 auto" }}
            >
              <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
                Condiciones para jugar
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                El valor de la apuesta es de $125.000 de los cuales $25.000
                seran destinados para mantenimiento y producción de la
                aplicación
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                El valor debe ser consignado en el daviplata o nequi No
                3144261190, para que el usuario sea activado
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Para registrarse debes tener un correo asociado a gmail.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Deben llenar el formulario con los resultados de los partidos
                antes del 20 de noviembre de 2022
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="left"
              alignItems="left"
              flexDirection="column"
              sx={{ width: { lg: "50%" }, margin: "0 auto" }}
            >
              <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
                Premios
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                El primer lugar ganara el 75% del pot acumulado dependiendo del
                numero de jugador
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                El segundo lugar ganara el 20% del pot acumulado dependiendo del
                numero de jugadores
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                El tercer lugar ganara el 5% del pot acumulado dependiendo del
                numero de jugadores
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="left"
              alignItems="left"
              flexDirection="column"
              sx={{ width: { lg: "50%" }, margin: "0 auto" }}
            >
              <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
                Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Resultado exacto 6 Puntos
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "17px" }}>
                Si no coge el resultado exacto:
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Ganador o empate 2 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Numero de goles de algun equipo 1 Punto
              </Typography>
              <Divider />
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Posiciones exactas del grupo 7 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Equipo puesto en octavos de final 3 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Equipo puesto en cuartos de final 4 Puntos
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Equipo puesto en Semifinal 5 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Equipo puesto en el partido de tercer puesto 6 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Equipo puesto en la final 7 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Campeón 10 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                SubCampeón 7 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Tercer Puesto 5 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Cuarto Puesto 3 Puntos
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              >
                Pronosticos Extra 5 puntos cada uno
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "15px", marginTop: "5px", marginLeft: "15px" }}
              ></Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              {!session ? (
                <>
                  <Typography variant="subtitle2" sx={{ fontSize: "50px" }}>
                    Para comenzar a llenar el formulario debes Loguearte
                  </Typography>
                  <Button
                    sx={{ marginBottom: "50px" }}
                    onClick={() =>
                      signIn(prov.google.id, {
                        callbackUrl: "/",
                      })
                    }
                  >
                    <Google sx={{ fontSize: "50px" }} />
                  </Button>
                </>
              ) : null}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            {userin && userin.empezado === false ? (
              <Button
                onClick={editar}
                sx={{
                  margin: "40px 0px 30px 0px",
                  width: { md: "40%", xs: "100%" },
                }}
              >
                Crear Formularios
              </Button>
            ) : null}
          </Grid>
        </Grid>
      )}
    </AuthLayout>
  );
};

export default Home;
