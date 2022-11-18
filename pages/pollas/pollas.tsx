import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { tesloApi } from "../../axios";
import Image from "next/image";
import { width } from "@mui/system";
import { AuthLayout } from "../../components/layouts";
import { Loadingdatos } from "../../components/ui";

const Pollas: NextPage = () => {
  const [grupoa, setGrupoa] = useState<any>([]);
  const [grupob, setGrupob] = useState<any>([]);
  const [grupoc, setGrupoc] = useState<any>([]);
  const [grupod, setGrupod] = useState<any>([]);
  const [grupoe, setGrupoe] = useState<any>([]);
  const [grupof, setGrupof] = useState<any>([]);
  const [grupog, setGrupog] = useState<any>([]);
  const [grupoh, setGrupoh] = useState<any>([]);
  const [posGrupoa, setPosGrupoa] = useState<any>([]);
  const [posGrupob, setPosGrupob] = useState<any>([]);
  const [posGrupoc, setPosGrupoc] = useState<any>([]);
  const [posGrupod, setPosGrupod] = useState<any>([]);
  const [posGrupoe, setPosGrupoe] = useState<any>([]);
  const [posGrupof, setPosGrupof] = useState<any>([]);
  const [posGrupog, setPosGrupog] = useState<any>([]);
  const [posGrupoh, setPosGrupoh] = useState<any>([]);
  const [octavos, setOctavos] = useState<any>([]);
  const [semis, setSemis] = useState<any>([]);
  const [cuartos, setCuartos] = useState<any>([]);
  const [finales, setFinales] = useState<any>([]);
  const [partidosGrupos, setPartidosGrupos] = useState<any>([]);
  const [datosfinales, setDatosFinales] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [hugo, setHugo] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>(false);

  const partidosLlamada = async () => {
    //setIsLoading(true);
    const { data }: any = await tesloApi({
      url: `/pollas`,
      method: "GET",
    });

    setUsers(data.polleros);
    //setIsLoading(false);
  };

  useEffect(() => {
    partidosLlamada();
  }, []);

  const handleChange = async (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    setIsLoading(true);
    const { data }: any = await tesloApi({
      url: "/pollas",
      method: "POST",
      data: { nomb: event.target.value },
    });
    setGrupoa(data.grupoa);
    setGrupob(data.grupob);
    setGrupoc(data.grupoc);
    setGrupod(data.grupod);
    setGrupoe(data.grupoe);
    setGrupof(data.grupof);
    setGrupog(data.grupog);
    setGrupoh(data.grupoh);
    setPosGrupoa(data.posgrupoa);
    setPosGrupob(data.posgrupob);
    setPosGrupoc(data.posgrupoc);
    setPosGrupod(data.posgrupod);
    setPosGrupoe(data.posgrupoe);
    setPosGrupof(data.posgrupof);
    setPosGrupog(data.posgrupog);
    setPosGrupoh(data.posgrupoh);
    setOctavos(data.octavos);
    setCuartos(data.cuartos);
    setSemis(data.semis);
    setFinales(data.finales);
    setDatosFinales(data.datosfinales);
    setIsLoading(false);
  };

  return (
    <>
      <AuthLayout title={"Pollas"} aviso="false">
        <Grid container display="flex">
          <Typography
            variant="subtitle1"
            sx={{ width: "70%", margin: "0 auto", fontSize: "35px" }}
          >
            Pollas
          </Typography>
          <Grid item xs={12}>
            <FormControl sx={{ width: "90%", marginLeft: "20px" }}>
              <InputLabel>Polleros</InputLabel>
              <Select
                defaultValue=""
                label="polleros"
                onChange={handleChange}
                sx={{
                  height: 40,
                  marginBottom: "30px",
                  marginTop: "0px",
                  marginLeft: "10px",
                }}
              >
                {users &&
                  users.map((user: any) => (
                    <MenuItem
                      value={user._id}
                      key={user._id}
                      defaultValue={"635b78c1266ea8891e6efb23"}
                    >
                      {user.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {isLoading ? (
              <Loadingdatos />
            ) : (
              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Grupo A
                  </Typography>
                  {grupoa &&
                    grupoa.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo B</Typography>
                  {grupob &&
                    grupob.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo C</Typography>
                  {grupoc &&
                    grupoc.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo D</Typography>
                  {grupod &&
                    grupod.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo E</Typography>
                  {grupoe &&
                    grupoe.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo F</Typography>
                  {grupof &&
                    grupof.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo G</Typography>
                  {grupog &&
                    grupog.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Grupo H</Typography>
                  {grupoh &&
                    grupoh.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo A
                  </Typography>
                  {posGrupoa &&
                    posGrupoa.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo B
                  </Typography>
                  {posGrupob &&
                    posGrupob.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo C
                  </Typography>
                  {posGrupoc &&
                    posGrupoc.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo D
                  </Typography>
                  {posGrupod &&
                    posGrupod.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo E
                  </Typography>
                  {posGrupoe &&
                    posGrupoe.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo F
                  </Typography>
                  {posGrupof &&
                    posGrupof.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo G
                  </Typography>
                  {posGrupog &&
                    posGrupog.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Posiciones Grupo H
                  </Typography>
                  {posGrupoh &&
                    posGrupoh.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Image
                          src={p.posicion1.bandera}
                          alt={p.posicion1.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion1.name}
                        </Typography>
                        <Image
                          src={p.posicion2.bandera}
                          alt={p.posicion2.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion2.name}
                        </Typography>
                        <Image
                          src={p.posicion3.bandera}
                          alt={p.posicion3.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion3.name}
                        </Typography>
                        <Image
                          src={p.posicion4.bandera}
                          alt={p.posicion4.name}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.posicion4.name}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Octavos</Typography>
                  {octavos &&
                    octavos.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Cuartos</Typography>
                  {cuartos &&
                    cuartos.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Semis</Typography>
                  {semis &&
                    semis.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    justifyContent: "center",
                    border: "1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle2">Finales</Typography>
                  {finales &&
                    finales.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px", fontSize: "10px" }}
                        >
                          Partido No {p.nombre}
                        </Typography>
                        <Image
                          src={p.local.bandera}
                          alt={p.nombre}
                          width={60}
                          height={30}
                          layout="fixed"
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
                          {p.golocal}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="subtitle1"
                          sx={{ margin: "5px 10px" }}
                        >
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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    justifyContent: "center",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    Posiciones finales y extras
                  </Typography>
                  {datosfinales &&
                    datosfinales.map((p: any) => (
                      <Box
                        display="flex"
                        // justifyContent="center"
                        alignItems="center"
                        key={p._id}
                        sx={{ marginTop: "0px", textAlign: "center" }}
                        flexDirection="column"
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Campeon: {p.campeon.name}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          SubCampeón: {p.sub.name}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Tercero: {p.tercero.name}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Cuarto: {p.cuarto.name}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Goleador: {p.goleador}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Más Amarillas: {p.amarillas}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Más Rojas: {p.rojas}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Grupo con más goles: {p.grupomasgoles}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Grupo con menos goles: {p.grupomenosgoles}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Equipo más Goleador: {p.masgoles}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Equipo menos Goleador: {p.menosgoles}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Valla más vencida: {p.masvencida}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ margin: "5px 10px" }}
                        >
                          Valla menos vencida: {p.menosvencida}
                        </Typography>

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
                                ? "#db541e"
                                : "#000000",
                          }}
                        >
                          puntos: {p.puntos}
                        </Typography>

                        <Divider />
                      </Box>
                    ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </AuthLayout>
    </>
  );
};

export default Pollas;
