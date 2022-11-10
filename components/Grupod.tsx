import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

import { tesloApi } from "../axios";
import { useForm } from "react-hook-form";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";
import { LoadingPartido } from "./ui";

export const Grupod = () => {
  const [datos, setDatos] = useState<any>();

  const [grupo2, setGrupo2] = useState<any>();
  const [jugado, setJugado] = useState<any>(false);
  const [cargando, setcargando] = useState<any>(false);
  const { data: session, status }: any = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    getValues: getValues2,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
    getValues: getValues3,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register4,
    handleSubmit: handleSubmit4,
    formState: { errors: errors4 },
    getValues: getValues4,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register5,
    handleSubmit: handleSubmit5,
    formState: { errors: errors5 },
    getValues: getValues5,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register6,
    handleSubmit: handleSubmit6,
    formState: { errors: errors6 },
    getValues: getValues6,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const gruposLlamada = async () => {
    setcargando(true);
    try {
      const data: any = await tesloApi({
        url: `/grupos/grupod`,

        method: "GET",
      });

      setDatos(data.data.partidos);
      setGrupo2(data.data.grupos[0]);
    } catch (error) {}
    setcargando(false);
  };
  // console.log(datos);
  // console.log(grupo2);

  useEffect(() => {
    gruposLlamada();
  }, [jugado]);

  const onSubmit1 = async (form: any) => {
    if (parseInt(getValues("golocal")) > parseInt(getValues("golvisitante"))) {
      form.resultado = "local";
    } else if (
      parseInt(getValues("golocal")) < parseInt(getValues("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos && datos[0]._id;
    form.jugado = true;
    form.grupoid = grupo2._id;

    setcargando(true);
    try {
      const { data } = await tesloApi({
        url: `/grupos/grupod`,
        method: "PUT",
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };

  const onSubmit2 = async (form: any) => {
    if (
      parseInt(getValues2("golocal")) > parseInt(getValues2("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues2("golocal")) < parseInt(getValues2("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos[1]._id;
    form.jugado = true;
    form.grupoid = grupo2._id;

    setcargando(true);

    try {
      const { data } = await tesloApi({
        url: `/grupos/grupod`,
        method: "PUT",
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };
  const onSubmit3 = async (form: any) => {
    if (
      parseInt(getValues3("golocal")) > parseInt(getValues3("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues3("golocal")) < parseInt(getValues3("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos[2]._id;
    form.jugado = true;
    form.grupoid = grupo2._id;

    setcargando(true);
    try {
      const { data } = await tesloApi({
        url: `/grupos/grupod`,
        method: "PUT",
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };
  const onSubmit4 = async (form: any) => {
    if (
      parseInt(getValues4("golocal")) > parseInt(getValues4("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues4("golocal")) < parseInt(getValues4("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos[3]._id;
    form.jugado = true;
    form.grupoid = grupo2._id;

    setcargando(true);
    try {
      const { data } = await tesloApi({
        url: `/grupos/grupod`,
        method: "PUT",
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };
  const onSubmit5 = async (form: any) => {
    if (
      parseInt(getValues5("golocal")) > parseInt(getValues5("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues5("golocal")) < parseInt(getValues5("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos[4]._id;
    form.jugado = true;
    form.grupoid = grupo2._id;

    setcargando(true);
    try {
      const { data } = await tesloApi({
        url: `/grupos/grupod`,
        method: "PUT",
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };
  const onSubmit6 = async (form: any) => {
    if (
      parseInt(getValues6("golocal")) > parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues6("golocal")) < parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos[5]._id;
    form.jugado = true;
    form.grupoid = grupo2._id;

    setcargando(true);
    try {
      const { data } = await tesloApi({
        url: `/grupos/grupod`,
        method: "PUT",
        data: form,
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };

  const editar = async (id: any) => {
    setcargando(true);
    try {
      await tesloApi({
        url: `/grupos/grupod`,
        method: "PATCH",
        data: datos && datos[id],
      });
    } catch (error) {
      console.log(error);
    }
    setcargando(false);
    setJugado(!jugado);
  };

  return (
    <>
      {datos && grupo2 && (
        <Grid
          container
          sx={{ padding: "10px", marginTop: "30px" }}
          display="flex"
          justifyContent="center"
        >
          {cargando === true ? (
            <LoadingPartido />
          ) : (
            <>
              <Grid
                item
                xs={12}
                sx={{
                  backgroundColor: "#e9b721",
                  textAlign: "center",
                  color: "#fff",
                  display: { md: "flex" },
                }}
              >
                <Grid
                  container
                  sx={{ display: { sm: "flex" }, alignItems: "center" }}
                >
                  <Grid item md={4}>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "30px",
                        padding: 4,
                        fontFamily: "'Yanone Kaffeesatz', sans-serif",
                      }}
                    >
                      Grupo {grupo2 && grupo2.name}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Image
                      src={datos && datos[0].local.bandera}
                      alt={datos && datos[0].nombre}
                      width={70}
                      height={40}
                    />
                  </Grid>
                  <Grid
                    item
                    md={2}
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Image
                      src={datos && datos[0].visitante.bandera}
                      alt={datos && datos[0].nombre}
                      width={70}
                      height={40}
                    />
                  </Grid>
                  <Grid
                    item
                    md={2}
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Image
                      src={datos && datos[3].local.bandera}
                      alt={datos && datos[3].nombre}
                      width={70}
                      height={40}
                    />
                  </Grid>
                  <Grid
                    item
                    md={2}
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Image
                      src={datos && datos[3].visitante.bandera}
                      alt={datos && datos[3].nombre}
                      width={70}
                      height={40}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* <form onSubmit={handleSubmit(onSubmit1)}></form> */}

              <>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ backgroundColor: "#bbb7be33", margin: "20px 10px" }}
                >
                  <form onSubmit={handleSubmit(onSubmit1)}>
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ padding: "10px" }}
                    >
                      <Grid item md={2} xs={3} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {datos && datos[0].local.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[0].local.bandera ? (
                          <Image
                            src={datos[0].local.bandera}
                            alt={datos[0].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[0].golocal}
                          </Typography>
                        ) : null}
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors.golocal}
                          helperText={errors.golocal?.message}
                        />
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          variant="filled"
                          {...register("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors.golvisitante}
                          helperText={errors.golvisitante?.message}
                        />
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[0].visitante.bandera ? (
                          <Image
                            src={datos[0].visitante.bandera}
                            alt={datos[0].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[0].golvisitante}
                          </Typography>
                        ) : null}
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ margin: "0 10px", fontWeight: "bold" }}
                        >
                          {" "}
                          {datos && datos[0].visitante.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {datos && datos[0].jugado ? (
                          <Button
                            onClick={() => editar(0)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ backgroundColor: "#bbb7be33", margin: "20px 10px" }}
                >
                  <form onSubmit={handleSubmit2(onSubmit2)}>
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ padding: "10px" }}
                    >
                      <Grid item md={2} xs={3} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {datos && datos[1].local.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[1].local.bandera ? (
                          <Image
                            src={datos[1].local.bandera}
                            alt={datos[1].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[1].golocal}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register2("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors2.golocal}
                          helperText={errors2.golocal?.message}
                        />
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          variant="filled"
                          {...register2("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors2.golvisitante}
                          helperText={errors2.golvisitante?.message}
                        />
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[1].visitante.bandera ? (
                          <Image
                            src={datos[1].visitante.bandera}
                            alt={datos[1].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[1].golvisitante}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={3} md={2} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ margin: "0 10px", fontWeight: "bold" }}
                        >
                          {" "}
                          {datos && datos[1].visitante.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {datos && datos[1].jugado ? (
                          <Button
                            onClick={() => editar(1)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ backgroundColor: "#bbb7be33", margin: "20px 10px" }}
                >
                  <form onSubmit={handleSubmit3(onSubmit3)}>
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ padding: "10px" }}
                    >
                      <Grid item md={2} xs={3} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {datos && datos[2].local.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[2].local.bandera ? (
                          <Image
                            src={datos[2].local.bandera}
                            alt={datos[2].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[2].golocal}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register3("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors3.golocal}
                          helperText={errors3.golocal?.message}
                        />
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          variant="filled"
                          {...register3("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors3.golvisitante}
                          helperText={errors3.golvisitante?.message}
                        />
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[2].visitante.bandera ? (
                          <Image
                            src={datos[2].visitante.bandera}
                            alt={datos[2].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[2].golvisitante}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={3} md={2} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ margin: "0 10px", fontWeight: "bold" }}
                        >
                          {" "}
                          {datos && datos[2].visitante.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {datos && datos[2].jugado ? (
                          <Button
                            onClick={() => editar(2)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ backgroundColor: "#bbb7be33", margin: "20px 10px" }}
                >
                  <form onSubmit={handleSubmit4(onSubmit4)}>
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ padding: "10px" }}
                    >
                      <Grid item md={2} xs={3} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {datos && datos[3].local.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[3].local.bandera ? (
                          <Image
                            src={datos[3].local.bandera}
                            alt={datos[3].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[3].golocal}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register4("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors4.golocal}
                          helperText={errors4.golocal?.message}
                        />
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          variant="filled"
                          {...register4("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors4.golvisitante}
                          helperText={errors4.golvisitante?.message}
                        />
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[3].visitante.bandera ? (
                          <Image
                            src={datos[3].visitante.bandera}
                            alt={datos[3].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[3].golvisitante}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={3} md={2} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ margin: "0 10px", fontWeight: "bold" }}
                        >
                          {" "}
                          {datos && datos[3].visitante.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {datos && datos[3].jugado ? (
                          <Button
                            onClick={() => editar(3)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ backgroundColor: "#bbb7be33", margin: "20px 10px" }}
                >
                  <form onSubmit={handleSubmit5(onSubmit5)}>
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ padding: "10px" }}
                    >
                      <Grid item md={2} xs={3} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {datos && datos[4].local.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[4].local.bandera ? (
                          <Image
                            src={datos[4].local.bandera}
                            alt={datos[4].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[4].golocal}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register5("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors5.golocal}
                          helperText={errors5.golocal?.message}
                        />
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          variant="filled"
                          {...register5("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors5.golvisitante}
                          helperText={errors5.golvisitante?.message}
                        />
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[4].visitante.bandera ? (
                          <Image
                            src={datos[4].visitante.bandera}
                            alt={datos[4].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[4].golvisitante}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={3} md={2} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ margin: "0 10px", fontWeight: "bold" }}
                        >
                          {" "}
                          {datos && datos[4].visitante.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {datos && datos[4].jugado ? (
                          <Button
                            onClick={() => editar(4)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ backgroundColor: "#bbb7be33", margin: "20px 10px" }}
                >
                  <form onSubmit={handleSubmit6(onSubmit6)}>
                    <Grid
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ padding: "10px" }}
                    >
                      <Grid item md={2} xs={3} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {datos && datos[5].local.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[5].local.bandera ? (
                          <Image
                            src={datos[5].local.bandera}
                            alt={datos[5].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[5].golocal}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register6("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors6.golocal}
                          helperText={errors6.golocal?.message}
                        />
                      </Grid>
                      <Grid item xs={5} md={2} textAlign="center">
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          variant="filled"
                          {...register6("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors6.golvisitante}
                          helperText={errors6.golvisitante?.message}
                        />
                      </Grid>
                      <Grid item xs={3} md={2} textAlign="center">
                        {datos && datos[5].visitante.bandera ? (
                          <Image
                            src={datos[5].visitante.bandera}
                            alt={datos[5].nombre}
                            width={80}
                            height={60}
                          />
                        ) : null}
                        {datos ? (
                          <Typography variant="subtitle1">
                            {datos[5].golvisitante}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item xs={3} md={2} textAlign="center">
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ margin: "0 10px", fontWeight: "bold" }}
                        >
                          {" "}
                          {datos && datos[5].visitante.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {datos && datos[5].jugado ? (
                          <Button
                            onClick={() => editar(5)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </>

              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  textAlign: "center",
                  color: "#0c0b0b",
                  padding: 2,
                  border: "1px solid",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    sm={1}
                    xs={2}
                    display="flex"
                    flexDirection="column"
                  >
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      Pos
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      1
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      2
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      3
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      4
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={2}
                    display="flex"
                    flexDirection="column"
                    sx={{ marginLeft: "5px" }}
                  >
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      Equipo
                    </Typography>
                    <Box
                      display="flex"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "14px",
                        marginTop: "10px",
                      }}
                    >
                      <Image
                        src={grupo2 && grupo2.posicion1.bandera}
                        alt="polla"
                        width={40}
                        height={20}
                      />
                      <Typography
                        sx={{ marginLeft: "5px", fontSize: "15px" }}
                        variant="subtitle2"
                      >
                        {grupo2 && grupo2 && grupo2.posicion1.name}
                      </Typography>
                    </Box>

                    <Box
                      display="flex"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "14px",
                        marginTop: "10px",
                      }}
                    >
                      <Image
                        src={grupo2 && grupo2 && grupo2.posicion2.bandera}
                        alt="polla"
                        width={40}
                        height={20}
                      />
                      <Typography
                        sx={{ marginLeft: "5px", fontSize: "15px" }}
                        variant="subtitle2"
                      >
                        {grupo2 && grupo2 && grupo2.posicion2.name}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      sx={{
                        padding: "14px",
                        marginTop: "10px",
                      }}
                    >
                      <Image
                        src={grupo2 && grupo2 && grupo2.posicion3.bandera}
                        alt="polla"
                        width={40}
                        height={20}
                      />
                      <Typography
                        sx={{ marginLeft: "5px", fontSize: "15px" }}
                        variant="subtitle2"
                      >
                        {grupo2 && grupo2 && grupo2.posicion3.name}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      sx={{
                        padding: "14px",
                        marginTop: "10px",
                      }}
                    >
                      <Image
                        src={grupo2 && grupo2 && grupo2.posicion4.bandera}
                        alt="polla"
                        width={40}
                        height={20}
                      />
                      <Typography
                        sx={{ marginLeft: "5px", fontSize: "15px" }}
                        variant="subtitle2"
                      >
                        {grupo2 && grupo2 && grupo2.posicion4.name}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    display="flex"
                    flexDirection="column"
                    sx={{
                      marginLeft: "5px",
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      GF
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion1.golesfavor}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion2.golesfavor}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion3.golesfavor}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion4.golesfavor}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    display="flex"
                    flexDirection="column"
                    sx={{
                      marginLeft: "5px",
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      GC
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion1.golescontra}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion2.golescontra}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion3.golescontra}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion4.golescontra}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    display="flex"
                    flexDirection="column"
                    sx={{
                      marginLeft: "5px",
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      GD
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion1.difgoles}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion2.difgoles}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion3.difgoles}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion4.difgoles}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    display="flex"
                    flexDirection="column"
                    sx={{ marginLeft: "5px" }}
                  >
                    <Typography
                      variant="subtitle2"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      Pts
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion1.puntos}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#95eb99",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion2.puntos}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion3.puntos}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {grupo2 && grupo2 && grupo2.posicion4.puntos}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </>
  );
};
