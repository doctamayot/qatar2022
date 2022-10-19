import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

import { tesloApi } from "../axios";
import { useForm } from "react-hook-form";

export const Grupoa = () => {
  const [datos, setDatos] = useState<any>();
  const [formu, setFormu] = useState<any>();
  const [grupo, setGrupo] = useState<any>();
  const [grupo2, setGrupo2] = useState<any>();
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

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/partidos/partidosa`,
        method: "GET",
        //data: form,
      });

      setDatos(data);

      // ...
    }
    fetchData();
  }, [jugado, formu]);

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/grupos/grupoa`,
        method: "PUT",
        //data: form,
      });

      setGrupo(data);

      // ...
    }
    fetchData();
  }, [formu, jugado]);

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/grupos/grupoa`,
        method: "GET",
        //data: form,
      });

      setGrupo2(data);

      // ...
    }
    fetchData();
  }, [grupo]);

  console.log(datos && datos.data);

  const onSubmit1 = async (form: any) => {
    if (parseInt(getValues("golocal")) > parseInt(getValues("golvisitante"))) {
      form.resultado = "local";
    } else if (
      parseInt(getValues("golocal")) < parseInt(getValues("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else form.resultado = "empate";

    form._id = datos.data[0]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
      setFormu(form);

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

    form._id = datos.data[1]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
      setFormu(form);

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

    form._id = datos.data[2]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
      setFormu(form);

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

    form._id = datos.data[3]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
      setFormu(form);

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

    form._id = datos.data[4]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
      setFormu(form);

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

    form._id = datos.data[5]._id;
    form.jugado = true;
    try {
      const { data } = await tesloApi({
        url: `/admin/partido`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
      setFormu(form);

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
        data: datos && datos.data[id],
      });
      setJugado(data);
      // setFormu(form);

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
    <Grid
      container
      sx={{ padding: "10px" }}
      display="flex"
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#e9b721",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: "30px", padding: 4 }}
        >
          Grupo {grupo2 && grupo2.data[0].name}
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit1)}></form>
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
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {datos && datos.data[0].local.name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              {datos && datos.data[0].local.bandera ? (
                <Image
                  src={datos.data[0].local.bandera}
                  alt={datos.data[0].nombre}
                  width={80}
                  height={60}
                />
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
              {datos && datos.data[0].visitante.bandera ? (
                <Image
                  src={datos.data[0].visitante.bandera}
                  alt={datos.data[0].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[0].visitante.name}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {datos && datos.data[0].jugado ? (
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
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {datos && datos.data[1].local.name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              {datos && datos.data[1].local.bandera ? (
                <Image
                  src={datos.data[1].local.bandera}
                  alt={datos.data[1].nombre}
                  width={80}
                  height={60}
                />
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
              {datos && datos.data[1].visitante.bandera ? (
                <Image
                  src={datos.data[1].visitante.bandera}
                  alt={datos.data[1].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[1].visitante.name}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {datos && datos.data[1].jugado ? (
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
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {datos && datos.data[2].local.name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              {datos && datos.data[2].local.bandera ? (
                <Image
                  src={datos.data[2].local.bandera}
                  alt={datos.data[2].nombre}
                  width={80}
                  height={60}
                />
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
              {datos && datos.data[2].visitante.bandera ? (
                <Image
                  src={datos.data[2].visitante.bandera}
                  alt={datos.data[2].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[2].visitante.name}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {datos && datos.data[2].jugado ? (
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
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {datos && datos.data[3].local.name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              {datos && datos.data[3].local.bandera ? (
                <Image
                  src={datos.data[3].local.bandera}
                  alt={datos.data[3].nombre}
                  width={80}
                  height={60}
                />
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
              {datos && datos.data[3].visitante.bandera ? (
                <Image
                  src={datos.data[3].visitante.bandera}
                  alt={datos.data[3].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[3].visitante.name}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {datos && datos.data[3].jugado ? (
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
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {datos && datos.data[4].local.name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              {datos && datos.data[4].local.bandera ? (
                <Image
                  src={datos.data[4].local.bandera}
                  alt={datos.data[4].nombre}
                  width={80}
                  height={60}
                />
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
              {datos && datos.data[4].visitante.bandera ? (
                <Image
                  src={datos.data[4].visitante.bandera}
                  alt={datos.data[4].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[4].visitante.name}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {datos && datos.data[4].jugado ? (
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
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {datos && datos.data[5].local.name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              {datos && datos.data[5].local.bandera ? (
                <Image
                  src={datos.data[5].local.bandera}
                  alt={datos.data[5].nombre}
                  width={80}
                  height={60}
                />
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
              {datos && datos.data[5].visitante.bandera ? (
                <Image
                  src={datos.data[5].visitante.bandera}
                  alt={datos.data[5].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[5].visitante.name}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {datos && datos.data[5].jugado ? (
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
        md={8}
        sx={{
          textAlign: "center",
          color: "#0c0b0b",
          padding: 2,
          border: "1px solid",
        }}
      >
        <Grid container>
          <Grid item xs={1} display="flex" flexDirection="column">
            <Typography
              variant="h5"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              Pos
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              1
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              2
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              3
            </Typography>
            <Typography
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
            xs={2}
            display="flex"
            flexDirection="column"
            sx={{ marginLeft: "5px" }}
          >
            <Typography
              variant="h5"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              Equipo
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.name}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.name}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.name}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.name}
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
              variant="h5"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              GF
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.golesfavor}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.golesfavor}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.golesfavor}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.golesfavor}
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
              variant="h5"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              GC
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.golescontra}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.golescontra}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.golescontra}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.golescontra}
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
              variant="h5"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              GD
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.difgoles}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.difgoles}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.difgoles}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.difgoles}
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
              variant="h5"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              Pts
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.puntos}
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#95eb99",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.puntos}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.puntos}
            </Typography>
            <Typography
              sx={{
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.puntos}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div">
          Grupo {grupo2 && grupo2.data[0].name}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: "20px", padding: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit1)}>
          <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
            Partido No {datos && datos.data[0].nombre}
          </Typography>
          <Grid
            container
            display="flex"
            alignItems="end"
            sx={{ backgroundColor: "#bbb7be33", marginTop: "10px" }}
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "auto", marginLeft: "10px" }}
            >
              <Typography
                component="span"
                sx={{ marginRight: "10px", fontWeight: "bold" }}
              >
                {datos && datos.data[0].local.name}
              </Typography>
              {datos && datos.data[0].local.bandera ? (
                <Image
                  src={datos.data[0].local.bandera}
                  alt={datos.data[0].nombre}
                  width={80}
                  height={60}
                />
              ) : null}

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

              {datos && datos.data[0].visitante.bandera ? (
                <Image
                  src={datos.data[0].visitante.bandera}
                  alt={datos.data[0].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
              <Typography
                component="span"
                sx={{ margin: "0 10px", fontWeight: "bold" }}
              >
                {" "}
                {datos && datos.data[0].visitante.name}
              </Typography>

              {datos && datos.data[0].jugado ? (
                <Button
                  onClick={() => editar(0)}
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "10px", marginRight: "10px", fontSize: 10 }}
                >
                  editar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ marginLeft: "10px", marginRight: "10px", fontSize: 10 }}
                  type="submit"
                >
                  Enviar
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: "20px", padding: "10px" }}>
        <form onSubmit={handleSubmit2(onSubmit2)}>
          <Typography>Partido No {datos && datos.data[1].nombre}</Typography>
          <Grid
            container
            display="flex"
            alignItems="end"
            sx={{ border: "1px solid" }}
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "auto", marginLeft: "10px" }}
            >
              {datos && datos.data[1].local.bandera ? (
                <Image
                  src={datos.data[1].local.bandera}
                  alt={datos.data[1].nombre}
                  width={80}
                  height={60}
                />
              ) : null}

              <Typography component="span" sx={{ marginLeft: "10px" }}>
                {datos && datos.data[1].local.name}
              </Typography>

              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "40px",
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
              <Typography component="span" sx={{ margin: "0 10px" }}>
                {" "}
                {datos && datos.data[1].visitante.name}
              </Typography>
              {datos && datos.data[1].visitante.bandera ? (
                <Image
                  src={datos.data[1].visitante.bandera}
                  alt={datos.data[1].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "0px",
                  marginLeft: "10px",
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
              {datos && datos.data[1].jugado ? (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "30px" }}
                  onClick={() => editar(1)}
                >
                  editar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ marginLeft: "30px" }}
                  type="submit"
                >
                  Enviar
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: "20px", padding: "10px" }}>
        <form onSubmit={handleSubmit3(onSubmit3)}>
          <Typography>Partido No {datos && datos.data[2].nombre}</Typography>
          <Grid
            container
            display="flex"
            alignItems="end"
            sx={{ border: "1px solid" }}
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "auto", marginLeft: "10px" }}
            >
              {datos && datos.data[2].local.bandera ? (
                <Image
                  src={datos.data[2].local.bandera}
                  alt={datos.data[2].nombre}
                  width={80}
                  height={60}
                />
              ) : null}

              <Typography component="span" sx={{ marginLeft: "10px" }}>
                {datos && datos.data[2].local.name}
              </Typography>

              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "40px",
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
              <Typography component="span" sx={{ margin: "0 10px" }}>
                {" "}
                {datos && datos.data[2].visitante.name}
              </Typography>
              {datos && datos.data[2].visitante.bandera ? (
                <Image
                  src={datos.data[2].visitante.bandera}
                  alt={datos.data[2].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "0px",
                  marginLeft: "10px",
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
              {datos && datos.data[2].jugado ? (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "30px" }}
                  onClick={() => editar(2)}
                >
                  editar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ marginLeft: "30px" }}
                  type="submit"
                >
                  Enviar
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: "20px", padding: "10px" }}>
        <form onSubmit={handleSubmit4(onSubmit4)}>
          <Typography>Partido No {datos && datos.data[3].nombre}</Typography>
          <Grid
            container
            display="flex"
            alignItems="end"
            sx={{ border: "1px solid" }}
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "auto", marginLeft: "10px" }}
            >
              {datos && datos.data[3].local.bandera ? (
                <Image
                  src={datos.data[3].local.bandera}
                  alt={datos.data[3].nombre}
                  width={80}
                  height={60}
                />
              ) : null}

              <Typography component="span" sx={{ marginLeft: "10px" }}>
                {datos && datos.data[3].local.name}
              </Typography>

              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "40px",
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
              <Typography component="span" sx={{ margin: "0 10px" }}>
                {" "}
                {datos && datos.data[3].visitante.name}
              </Typography>
              {datos && datos.data[3].visitante.bandera ? (
                <Image
                  src={datos.data[3].visitante.bandera}
                  alt={datos.data[3].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "0px",
                  marginLeft: "10px",
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
              {datos && datos.data[3].jugado ? (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "30px" }}
                  onClick={() => editar(3)}
                >
                  editar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ marginLeft: "30px" }}
                  type="submit"
                >
                  Enviar
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: "20px", padding: "10px" }}>
        <form onSubmit={handleSubmit5(onSubmit5)}>
          <Typography>Partido No {datos && datos.data[4].nombre}</Typography>
          <Grid
            container
            display="flex"
            alignItems="end"
            sx={{ border: "1px solid" }}
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "auto", marginLeft: "10px" }}
            >
              {datos && datos.data[4].local.bandera ? (
                <Image
                  src={datos.data[4].local.bandera}
                  alt={datos.data[4].nombre}
                  width={80}
                  height={60}
                />
              ) : null}

              <Typography component="span" sx={{ marginLeft: "10px" }}>
                {datos && datos.data[4].local.name}
              </Typography>

              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "40px",
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
              <Typography component="span" sx={{ margin: "0 10px" }}>
                {" "}
                {datos && datos.data[4].visitante.name}
              </Typography>
              {datos && datos.data[4].visitante.bandera ? (
                <Image
                  src={datos.data[4].visitante.bandera}
                  alt={datos.data[4].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "0px",
                  marginLeft: "10px",
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
              {datos && datos.data[4].jugado ? (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "30px" }}
                  onClick={() => editar(4)}
                >
                  editar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ marginLeft: "30px" }}
                  type="submit"
                >
                  Enviar
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: "20px", padding: "10px" }}>
        <form onSubmit={handleSubmit6(onSubmit6)}>
          <Typography>Partido No {datos && datos.data[5].nombre}</Typography>
          <Grid
            container
            display="flex"
            alignItems="end"
            sx={{ border: "1px solid" }}
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              sx={{ height: "auto", marginLeft: "10px" }}
            >
              {datos && datos.data[5].local.bandera ? (
                <Image
                  src={datos.data[5].local.bandera}
                  alt={datos.data[5].nombre}
                  width={80}
                  height={60}
                />
              ) : null}

              <Typography component="span" sx={{ marginLeft: "10px" }}>
                {datos && datos.data[5].local.name}
              </Typography>

              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "40px",
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
              <Typography component="span" sx={{ margin: "0 10px" }}>
                {" "}
                {datos && datos.data[5].visitante.name}
              </Typography>
              {datos && datos.data[5].visitante.bandera ? (
                <Image
                  src={datos.data[5].visitante.bandera}
                  alt={datos.data[5].nombre}
                  width={80}
                  height={60}
                />
              ) : null}
              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "0px",
                  marginLeft: "10px",
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
              {datos && datos.data[5].jugado ? (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "30px" }}
                  onClick={() => editar(5)}
                >
                  editar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ marginLeft: "30px" }}
                  type="submit"
                >
                  Enviar
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box display="flex"></Box>
        <Grid container>
          <Grid item xs={2} display="flex" flexDirection="column">
            <Typography variant="h5" component="span">
              Pos
            </Typography>
            <Typography>1</Typography>
            <Typography>2</Typography>
            <Typography>3</Typography>
            <Typography>4</Typography>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column">
            <Typography variant="h5" component="span">
              Equipo
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.name}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.name}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.name}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.name}
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column">
            <Typography variant="h5" component="span">
              GF
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.golesfavor}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.golesfavor}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.golesfavor}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.golesfavor}
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column">
            <Typography variant="h5" component="span">
              GC
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.golescontra}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.golescontra}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.golescontra}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.golescontra}
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column">
            <Typography variant="h5" component="span">
              GD
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.difgoles}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.difgoles}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.difgoles}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.difgoles}
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column">
            <Typography variant="h5" component="span">
              Pts
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion1.puntos}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion2.puntos}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion3.puntos}
            </Typography>
            <Typography>
              {grupo2 && grupo2.data[0] && grupo2.data[0].posicion4.puntos}
            </Typography>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};
