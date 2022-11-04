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

export const Resultados = () => {
  const [datos, setdatos] = useState<any>([]);
  //const [partido, setPartido] = useState<any>("1");
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
    const { data }: any = await tesloApi({
      url: `/partidos`,
      method: "GET",
    });

    setAllPartidos(data.partidos);
    setdatos(data.users);
    setIsLoading(false);
  };

  const handleChange = async (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const { data }: any = await tesloApi({
      url: `/partidos`,
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
    <Grid container display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        <Loadingdatos />
      ) : (
        <Grid item md={6} sx={{ textAlign: "center" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Partido</InputLabel>
            <Select
              //value={partido}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="1"
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
                  <MenuItem value={p.nombre} key={p._id}>
                    {p.ronda === "grupos"
                      ? `Grupos ${p.local.name} vs ${p.visitante.name}`
                      : p.ronda === "octavos"
                      ? `Octavos ${p.local.name} vs ${p.visitante.name}`
                      : p.ronda === "cuartos"
                      ? `Cuartos ${p.local.name} vs ${p.visitante.name}`
                      : p.ronda === "semis"
                      ? `Semis ${p.local.name} vs ${p.visitante.name}`
                      : p.ronda === "final"
                      ? `Finales ${p.local.name} vs ${p.visitante.name}`
                      : "hola"}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          {datos && (
            <Box
              display="flex"
              // justifyContent="center"
              alignItems="center"
              key={datos[0] && datos[0]?._id}
              sx={{ marginTop: "20px", textAlign: "center" }}
            >
              <Image
                src={datos[0] && datos[0].local.bandera}
                alt={datos[0] && datos[0]?.nombre}
                width={60}
                height={30}
                layout="fixed"
              />
              <Typography
                variant="subtitle1"
                sx={{ margin: "5px 10px", color: "#439638" }}
              >
                {datos[0] && datos[0]?.golocal}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                variant="subtitle1"
                sx={{ margin: "5px 10px", color: "#439638" }}
              >
                {datos[0] && datos[0]?.golvisitante}
              </Typography>

              <Image
                src={datos[0] && datos[0].visitante.bandera}
                alt={datos[0] && datos[0]?.nombre}
                width={60}
                height={30}
                layout="fixed"
              />

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
                sx={{ marginTop: "20px", textAlign: "center" }}
              >
                <Image
                  src={p.local.bandera}
                  alt={p.nombre}
                  width={60}
                  height={30}
                  layout="fixed"
                />
                <Typography variant="subtitle1" sx={{ margin: "5px 10px" }}>
                  {p.golocal}
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="subtitle1" sx={{ margin: "5px 10px" }}>
                  {p.golvisitante}
                </Typography>
                <Image
                  src={p.visitante.bandera}
                  alt={p.nombre}
                  width={60}
                  height={30}
                  layout="fixed"
                />

                <Typography
                  variant="subtitle1"
                  sx={{
                    margin: "5px 10px",
                    fontSize: { xs: "10px", md: "20px" },
                    color:
                      p.puntos === 6
                        ? "#439638"
                        : p.puntos === 3
                        ? "#133e9b"
                        : p.puntos === 2
                        ? "#dbc816"
                        : p.puntos === 1
                        ? "#000000"
                        : "#8f121a3",
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
                  {cambioNombre(p.user.name)}
                </Typography>
                <Divider />
              </Box>
            ))}
        </Grid>
      )}
    </Grid>
  );
};
