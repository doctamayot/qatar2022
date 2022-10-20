import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

import { tesloApi } from "../axios";
import { useForm } from "react-hook-form";

export const Octavos = () => {
  const [octavos, setOctavos] = useState<any>();
  const [cuartos, setCuartos] = useState<any>();
  const [semis, setSemis] = useState<any>();
  const [final, setFinal] = useState<any>();
  const [jugado, setJugado] = useState<any>();
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

  const {
    register: register7,
    handleSubmit: handleSubmit7,
    formState: { errors: errors7 },
    getValues: getValues7,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register8,
    handleSubmit: handleSubmit8,
    formState: { errors: errors8 },
    getValues: getValues8,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/octavos/octavo1`,
        method: "GET",
        //data: grupo2 && grupo2.data[0].name,
      });

      setOctavos(data);

      // ...
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/cuartos/cuarto1`,
        method: "GET",
        //data: grupo2 && grupo2.data[0].name,
      });

      setCuartos(data);

      // ...
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/semis/semis1`,
        method: "GET",
        //data: grupo2 && grupo2.data[0].name,
      });

      setSemis(data);

      // ...
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/finales/tercer`,
        method: "GET",
        //data: grupo2 && grupo2.data[0].name,
      });

      setFinal(data);

      // ...
    }
    fetchData();
  }, []);

  const onSubmit1 = async (form: any) => {
    if (parseInt(getValues("golocal")) > parseInt(getValues("golvisitante"))) {
      form.resultado = "local";
    } else if (
      parseInt(getValues("golocal")) < parseInt(getValues("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = octavos.data[0]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
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

    form._id = octavos.data[1]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
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

    form._id = octavos.data[2]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
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

    form._id = octavos.data[3]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
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

    form._id = octavos.data[4]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
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

    form._id = octavos.data[5]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
  };

  const onSubmit7 = async (form: any) => {
    if (
      parseInt(getValues6("golocal")) > parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues6("golocal")) < parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = octavos.data[5]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
  };
  const onSubmit8 = async (form: any) => {
    if (
      parseInt(getValues6("golocal")) > parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues6("golocal")) < parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = octavos.data[5]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
  };

  const editar = async (id: any) => {
    console.log(typeof id);
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PATCH", // si tenemos un _id, entonces actualizar, si no crear
        data: octavos && octavos.data[id],
      });
      setJugado(data);
      // ""(form);

      //console.log(form);
      // await Swal.fire({
      //   title: form._id ? "Producto Editado" : "Producto Creado",
      //   text: "Continuar",
      //   icon: "success",
      //   confirmButtonText: "Ok",
      // });
      // await router.push(`/admin/invproducts/${idver}`);
    } catch (error) {
      console.log(error);
      //setIsSaving(false);
    }
  };
  return (
    <Grid container sx={{ padding: "5px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "60px",
          right: "180px",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Image
          src="https://res.cloudinary.com/hugotamayo/image/upload/v1666234923/qatar/azhwx6u2xznmrvjn8vpp.png"
          alt="qatar"
          width={450}
          height={450}
        />
      </Box>
      <Grid item md={3} xs={12}>
        <Grid container>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[0].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit(onSubmit1)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[0].partido.local.bandera}
                      alt={octavos && octavos.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[0].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    variant="filled"
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    variant="filled"
                    fullWidth
                    //sx={{ width: "100px" }}
                    {...register("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[0].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[0].partido.visitante.bandera}
                      alt={octavos && octavos.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[0].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[1].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[1].partido.local.bandera}
                      alt={octavos && octavos.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[1].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    variant="filled"
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register2("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[1].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[1].partido.visitante.bandera}
                      alt={octavos && octavos.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[1].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[2].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit3(onSubmit3)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[2].partido.local.bandera}
                      alt={octavos && octavos.data[2].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[2].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    variant="filled"
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register3("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[2].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[2].partido.visitante.bandera}
                      alt={octavos && octavos.data[2].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[2].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[3].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit4(onSubmit4)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[3].partido.local.bandera}
                      alt={octavos && octavos.data[3].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[3].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    variant="filled"
                    ullWidth
                    //sx={{ width: "100px" }}
                    {...register4("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[3].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[3].partido.visitante.bandera}
                      alt={octavos && octavos.data[3].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[3].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[4].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit5(onSubmit5)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[4].partido.local.bandera}
                      alt={octavos && octavos.data[4].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[4].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register5("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[4].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[4].partido.visitante.bandera}
                      alt={octavos && octavos.data[4].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[4].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[5].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit6(onSubmit6)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[5].partido.local.bandera}
                      alt={octavos && octavos.data[5].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[5].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    variant="filled"
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register6("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[5].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[5].partido.visitante.bandera}
                      alt={octavos && octavos.data[5].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[5].partido.jugado ? (
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
                      variant="contained"
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                      type="submit"
                      color="primary"
                    >
                      Enviar
                    </Button>
                  )}
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[6].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit7(onSubmit7)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[6].partido.local.bandera}
                      alt={octavos && octavos.data[6].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[6].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register7("golocal", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 numero",
                      },
                    })}
                    size="small"
                    error={!!errors7.golocal}
                    helperText={errors7.golocal?.message}
                  />
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register7("golvisitante", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 numero",
                      },
                    })}
                    size="small"
                    error={!!errors7.golocal}
                    helperText={errors7.golocal?.message}
                  />
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[6].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[6].partido.visitante.bandera}
                      alt={octavos && octavos.data[6].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[6].partido.jugado ? (
                    <Button
                      onClick={() => editar(6)}
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {octavos && octavos.data[7].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit8(onSubmit8)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={octavos && octavos.data[7].partido.local.bandera}
                      alt={octavos && octavos.data[7].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {octavos && octavos.data[7].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    variant="filled"
                    fullWidth
                    //sx={{ width: "100px" }}
                    {...register8("golocal", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 numero",
                      },
                    })}
                    size="small"
                    error={!!errors8.golocal}
                    helperText={errors8.golocal?.message}
                  />
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register8("golvisitante", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 numero",
                      },
                    })}
                    size="small"
                    error={!!errors8.golocal}
                    helperText={errors8.golocal?.message}
                  />
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {octavos && octavos.data[7].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={octavos && octavos.data[7].partido.visitante.bandera}
                      alt={octavos && octavos.data[7].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {octavos && octavos.data[7].partido.jugado ? (
                    <Button
                      onClick={() => editar(7)}
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
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} display="flex" alignItems="center">
        <Grid container>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {cuartos && cuartos.data[0].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit(onSubmit1)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[0].partido.local.bandera}
                      alt={cuartos && cuartos.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {cuartos && cuartos.data[0].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {cuartos && cuartos.data[0].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[0].partido.visitante.bandera}
                      alt={cuartos && cuartos.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {cuartos && cuartos.data[0].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {cuartos && cuartos.data[1].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[1].partido.local.bandera}
                      alt={cuartos && cuartos.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {cuartos && cuartos.data[1].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register2("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {cuartos && cuartos.data[1].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[1].partido.visitante.bandera}
                      alt={cuartos && cuartos.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {cuartos && cuartos.data[1].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {cuartos && cuartos.data[2].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit3(onSubmit3)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[2].partido.local.bandera}
                      alt={cuartos && cuartos.data[2].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {cuartos && cuartos.data[2].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register3("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {cuartos && cuartos.data[2].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[2].partido.visitante.bandera}
                      alt={cuartos && cuartos.data[2].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {cuartos && cuartos.data[2].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {cuartos && cuartos.data[3].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit4(onSubmit4)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[3].partido.local.bandera}
                      alt={cuartos && cuartos.data[3].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {cuartos && cuartos.data[3].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register4("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {cuartos && cuartos.data[3].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={cuartos && cuartos.data[3].partido.visitante.bandera}
                      alt={cuartos && cuartos.data[3].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {cuartos && cuartos.data[3].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} display="flex" alignItems="center">
        <Grid container>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {semis && semis.data[0].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit(onSubmit1)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={semis && semis.data[0].partido.local.bandera}
                      alt={semis && semis.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {semis && semis.data[0].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {semis && semis.data[0].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={semis && semis.data[0].partido.visitante.bandera}
                      alt={semis && semis.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {semis && semis.data[0].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {semis && semis.data[1].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={semis && semis.data[1].partido.local.bandera}
                      alt={semis && semis.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {semis && semis.data[1].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register2("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {semis && semis.data[1].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={semis && semis.data[1].partido.visitante.bandera}
                      alt={semis && semis.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {semis && semis.data[1].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} display="flex" alignItems="center">
        <Grid container>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {final && final.data[0].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit(onSubmit1)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={final && final.data[0].partido.local.bandera}
                      alt={final && final.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {final && final.data[0].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {final && final.data[0].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={final && final.data[0].partido.visitante.bandera}
                      alt={final && final.data[0].nombre}
                      width={60}
                      height={40}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {final && final.data[0].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: "30px",
                padding: 4,
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
              }}
            >
              {final && final.data[1].name}
            </Typography>
            <Grid
              container
              sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
            >
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <Grid item xs={12} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={final && final.data[1].partido.local.bandera}
                      alt={final && final.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {final && final.data[1].partido.local.name}
                  </Typography>
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    fullWidth
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
                  <TextField
                    type="number"
                    style={{
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                    fullWidth
                    variant="filled"
                    //sx={{ width: "100px" }}
                    {...register2("golvisitante", {
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
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                  >
                    {final && final.data[1].partido.visitante.name}
                  </Typography>
                  <Box>
                    <Image
                      src={final && final.data[1].partido.visitante.bandera}
                      alt={final && final.data[1].nombre}
                      width={80}
                      height={60}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  {final && final.data[1].partido.jugado ? (
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
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
