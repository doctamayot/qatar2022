import {
  Grid,
  Box,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { tesloApi } from "../../axios";

import { Loadingdatos } from "../ui";

export const PosicionesC = () => {
  const [datos, setdatos] = useState<any>([]);
  const [jugadores, setJugadores] = useState<any>("1");
  const [allPartidos, setAllPartidos] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>(true);

  // const {
  //   formState: { errors },
  // } = useForm<any>({
  //   //defaultValues: "",
  // }) as any;

  useEffect(() => {
    partidosLlamada();
  }, []);

  const partidosLlamada = async () => {
    setIsLoading(true);
    const { data }: any = await tesloApi({
      url: `/posiciones`,
      method: "GET",
    });

    setAllPartidos(data.posiciones);
    setdatos(data.users);
    setJugadores(data.jugadores);
    setIsLoading(false);
  };

  const handleChange = async (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const { data }: any = await tesloApi({
      url: `/posiciones`,
      method: "POST",
      data: { nomb: event.target.value },
    });
    //console.log(partido);
    setdatos(data);
    setIsLoading(false);
  };

  const cambioNombre = (nombre: any) => {
    const nombreArray: string[] = nombre?.split(" ");
    if (nombreArray) {
      const palabra1 = nombreArray[0] || undefined;
      const palabra2 = nombreArray[1] || undefined;
      const nuevo = palabra1 + " " + palabra2;
      return nuevo;
    }
  };

  return (
    <>
      {isLoading ? (
        <Loadingdatos />
      ) : (
        <Grid container display="flex" justifyContent="center">
          <Grid item md={5} xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">
              Puntuación de grupo exacto y equipo puesto en octavos
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Grupo</InputLabel>
              <Select
                //value={partido}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="A"
                label="Valla más vencida"
                onChange={handleChange}
                sx={{
                  height: 40,
                  marginBottom: "30px",
                  marginTop: "0px",
                  marginLeft: "10px",
                }}
              >
                {allPartidos &&
                  allPartidos.map((p: any) => (
                    <MenuItem value={p.name} key={p._id}>
                      {p.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {datos && (
              <Box
                display="flex"
                justifyContent="center"
                //alignItems="center"
                key={datos[0] && datos[0]?._id}
                sx={{ marginTop: "20px", textAlign: "center" }}
              >
                <Box sx={{ marginLeft: "5px" }}>
                  <Image
                    src={datos[0] && datos[0].posicion1.bandera}
                    alt={datos[0] && datos[0]?.posicion1.nombre}
                    width={40}
                    height={30}
                    layout="fixed"
                  />
                </Box>

                <Box sx={{ marginLeft: "5px" }}>
                  <Image
                    src={datos[0] && datos[0].posicion2.bandera}
                    alt={datos[0] && datos[0]?.posicion1.nombre}
                    width={40}
                    height={30}
                    layout="fixed"
                  />
                </Box>

                <Box sx={{ marginLeft: "5px" }}>
                  <Image
                    src={datos[0] && datos[0].posicion3.bandera}
                    alt={datos[0] && datos[0]?.posicion1.nombre}
                    width={40}
                    height={30}
                    layout="fixed"
                  />
                </Box>

                <Box sx={{ marginLeft: "5px" }}>
                  <Image
                    src={datos[0] && datos[0].posicion4.bandera}
                    alt={datos[0] && datos[0]?.posicion1.nombre}
                    width={40}
                    height={30}
                    layout="fixed"
                  />
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{ margin: "5px 10px", fontSize: "20px" }}
                >
                  {cambioNombre(datos && datos[0] && datos[0]?.user.name)}
                </Typography>
                <Divider />
              </Box>
            )}
            {datos &&
              datos.slice(1).map((p: any) => (
                <Box
                  display="flex"
                  // justifyContent="center"
                  alignItems="center"
                  key={p._id}
                  sx={{
                    marginTop: "20px",
                    marginLeft: { md: "100px", xs: "35px" },
                  }}
                >
                  <Box sx={{ marginLeft: "5px" }}>
                    <Image
                      src={p.posicion1.bandera}
                      alt={p.posicion1.nombre}
                      width={40}
                      height={30}
                      layout="fixed"
                    />
                  </Box>

                  <Box sx={{ marginLeft: "5px" }}>
                    <Image
                      src={p.posicion2.bandera}
                      alt={p.posicion1.nombre}
                      width={40}
                      height={30}
                      layout="fixed"
                    />
                  </Box>

                  <Box sx={{ marginLeft: "5px" }}>
                    <Image
                      src={p.posicion3.bandera}
                      alt={p.posicion1.nombre}
                      width={40}
                      height={30}
                      layout="fixed"
                    />
                  </Box>

                  <Box sx={{ marginLeft: "5px" }}>
                    <Image
                      src={p.posicion4.bandera}
                      alt={p.posicion1.nombre}
                      width={40}
                      height={30}
                      layout="fixed"
                    />
                  </Box>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      margin: "5px 10px",
                      fontSize: { xs: "10px", md: "20px" },
                      color:
                        p.puntos === 13
                          ? "#439638"
                          : p.puntos === 6
                          ? "#133e9b"
                          : p.puntos === 3
                          ? "#dbc816"
                          : p.puntos === 1
                          ? "#db541e"
                          : "#000000",
                    }}
                  >
                    puntos: {p.puntos}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      margin: "5px 10px",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    {p.user && cambioNombre(p.user.name)}
                  </Typography>
                  <Divider />
                </Box>
              ))}
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ textAlign: "center", marginTop: { xs: "40px", md: "0px" } }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontSize: "25px" }}>
                Tabla De Posiciones
              </Typography>
              <Box
                display="flex"
                sx={{ width: { xs: "95%", md: "70%" }, margin: "0 auto" }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    borderLeft: "1px solid #000",
                    borderRight: "1px solid #000",
                    borderBottom: "1px solid #000",
                    borderTop: "1px solid #000",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Rank
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    borderBottom: "1px solid #000",
                    borderTop: "1px solid #000",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Pollero
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    borderLeft: "1px solid #000",
                    borderRight: "1px solid #000",
                    borderBottom: "1px solid #000",
                    borderTop: "1px solid #000",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Puntos
                </Typography>
              </Box>
            </Box>
            {jugadores &&
              jugadores.slice(1).map((jug: any, index: any) => (
                <Box
                  key={jug._id}
                  sx={{ width: { xs: "95%", md: "70%" }, margin: "0 auto" }}
                >
                  <Box
                    display="flex"
                    sx={{
                      fontSize: "20px",
                      backgroundColor:
                        jug == jugadores[1] ||
                        jug.puntos === jugadores[1].puntos
                          ? "#309127"
                          : // : jug == jugadores[2] || jug.puntos===
                            // ? "#165885"
                            // : jug == jugadores[3]
                            // ? "#ccbb26"
                            "#fff",
                      color:
                        jug == jugadores[1] ||
                        jug.puntos === jugadores[1].puntos
                          ? "#fcfcfc"
                          : // : jug == jugadores[2] || jug.puntos===
                            // ? "#165885"
                            // : jug == jugadores[3]
                            // ? "#ccbb26"
                            "black",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        borderBottom: "0.5px solid #000000",

                        borderLeft: "0.5px solid #000000",
                        width: "100%",
                        padding: "5px",
                        fontSize: { xs: "15px", md: "20px" },
                      }}
                    >
                      {jug == jugadores[1] || jug.puntos === jugadores[1].puntos
                        ? 1
                        : index + 1}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        borderBottom: "0.5px solid #000000",
                        borderRight: "0.5px solid #000000",
                        borderLeft: "0.5px solid #000000",
                        width: "100%",
                        padding: "5px",
                        fontSize: { xs: "15px", md: "15px" },
                      }}
                    >
                      {jug.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        borderBottom: "1px solid #000",
                        borderRight: "0.5px solid #000000",
                        width: "100%",
                        padding: "5px",
                      }}
                    >
                      {jug.puntos}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};
