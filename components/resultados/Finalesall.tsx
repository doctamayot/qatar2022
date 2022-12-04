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

export const Finalesall = () => {
  const [datos, setdatos] = useState<any>([]);
  const [jugadores, setJugadores] = useState<any>("1");
  const [allPartidos, setAllPartidos] = useState<any>();
  const [objeto, setObjeto] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>(true);

  // const {
  //   formState: { errors },
  // } = useForm<any>({
  //   //defaultValues: "",
  // }) as any;

  useEffect(() => {
    partidosLlamada();
  }, []);

  // useEffect(() => {
  //   recorrer();
  // }, []);

  const partidosLlamada = async () => {
    setIsLoading(true);
    const { data }: any = await tesloApi({
      url: `/finalesall`,
      method: "GET",
    });

    setAllPartidos(data.matrizcuartos);
    setdatos(data.matrix);
    setJugadores(data.jugadores);
    setObjeto(data.arreglo);
    setIsLoading(false);
  };

  console.log(objeto);

  const handleChange = async (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const { data }: any = await tesloApi({
      url: `/finalesall`,
      method: "POST",
      data: { nomb: event.target.value },
    });

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
  let matrix: any = [];

  const recorrer = () => {
    for (const dato of objeto) {
      matrix.push({
        user: dato[0],
        locales: dato[1].map((x: any) => x.local),
        visitantes: dato[1].map((x: any) => x.visitante),
      });
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
              Equipo puesto en Cuartos de final
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Grupo</InputLabel>
              <Select
                //value={partido}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="57"
                label="Valla más vencida"
                onChange={handleChange}
                sx={{
                  height: 40,
                  marginBottom: "30px",
                  marginTop: "0px",
                  marginLeft: "10px",
                }}
              >
                <MenuItem value="57">Cuartos</MenuItem>
                {/* <MenuItem value="58">Cuartos 2</MenuItem>
                <MenuItem value="59">Cuartos 3</MenuItem>
                <MenuItem value="60">Cuartos 4</MenuItem> */}
              </Select>
            </FormControl>

            <Box
              display="flex"
              justifyContent="center"
              //alignItems="center"
              key={datos[0]?._id}
              sx={{ marginTop: "20px", textAlign: "center" }}
            >
              {allPartidos &&
                allPartidos.map((p: any, i: any) => (
                  <Box sx={{ marginLeft: "5px" }} key={i}>
                    <Image
                      src={p}
                      alt={p}
                      width={30}
                      height={20}
                      layout="fixed"
                    />
                  </Box>
                ))}

              {/* <Box sx={{ marginLeft: "5px" }}>
                <Image
                  src={datos[0].visitante.bandera}
                  alt={datos[0]?.visitante.nombre}
                  width={40}
                  height={30}
                  layout="fixed"
                />
              </Box> */}
            </Box>

            <Divider />
            <Typography
              variant="subtitle1"
              sx={{ margin: "5px 10px", fontSize: "20px" }}
            >
              {cambioNombre(datos && datos[0] && datos[0]?.user.name)}
            </Typography>

            {objeto &&
              objeto.slice(1).map((p: any) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={p[0]}
                  sx={{
                    marginTop: "20px",
                    marginLeft: { md: "50px", xs: "20x" },
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontSize: "15px" }}>
                    {p[0] && cambioNombre(p[0])}
                  </Typography>
                  {p[1].map((x: any) => (
                    <Grid key={x.local} display="flex" flexDirection="column">
                      <Box display="flex">
                        <Box
                          sx={{ marginLeft: "15px" }}
                          display="flex"
                          flexDirection="column"
                        >
                          <Image
                            src={x.local}
                            alt={x.visitante}
                            width={26}
                            height={20}
                            layout="fixed"
                          />
                          {/* <Typography
                          variant="subtitle1"
                          sx={{
                            margin: "5px 1px",
                            fontSize: { xs: "5px", md: "14px" },
                            color:
                              x.puntos === 4
                                ? "#439638"
                                : x.puntos === 3
                                ? "#133e9b"
                                : x.puntos === 4
                                ? "#dbc816"
                                : x.puntos === 1
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          Pts: {x.puntos}
                        </Typography> */}
                        </Box>
                        <Box
                          sx={{ marginLeft: "15px" }}
                          display="flex"
                          flexDirection="column"
                        >
                          <Image
                            src={x.visitante}
                            alt={x.visitante}
                            width={26}
                            height={20}
                            layout="fixed"
                          />
                          {/* <Typography
                          variant="subtitle1"
                          sx={{
                            margin: "5px 1px",
                            fontSize: { xs: "5px", md: "14px" },
                            color:
                              x.puntos === 4
                                ? "#439638"
                                : x.puntos === 3
                                ? "#133e9b"
                                : x.puntos === 4
                                ? "#dbc816"
                                : x.puntos === 1
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          Pts: {x.puntos}
                        </Typography> */}
                        </Box>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          margin: "5px 1px",
                          fontSize: { xs: "10px", md: "14px" },
                          color:
                            x.puntos === 8
                              ? "#439638"
                              : x.puntos === 4
                              ? "#133e9b"
                              : x.puntos === 4
                              ? "#dbc816"
                              : x.puntos === 1
                              ? "#db541e"
                              : "#000000",
                        }}
                      >
                        Puntos: {x.puntos}
                      </Typography>
                    </Grid>
                  ))}

                  {/* <Typography
                    variant="subtitle1"
                    sx={{
                      margin: "5px 10px",
                      fontSize: { xs: "10px", md: "20px" },
                      color:
                        p.puntos === 8
                          ? "#439638"
                          : p.puntos === 4
                          ? "#133e9b"
                          : p.puntos === 4
                          ? "#dbc816"
                          : p.puntos === 1
                          ? "#db541e"
                          : "#000000",
                    }}
                  >
                    puntos: {p[1].map((x: any) => `${x.puntos} - `)}
                  </Typography> */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      margin: "5px 10px",
                      fontSize: { xs: "1px", md: "20px" },
                    }}
                  >
                    {p.user && cambioNombre(p.user)}
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
