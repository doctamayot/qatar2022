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

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
  }, []);

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
  }, [formu]);

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

  console.log(grupo2 && grupo2.data);

  const onSubmit = async (form: any) => {
    
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

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography>Partido No {datos && datos.data[0].nombre}</Typography>
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
              {datos && datos.data[0].local.bandera ? (
                <Image
                  src={datos.data[0].local.bandera}
                  alt={datos.data[0].nombre}
                  width={20}
                  height={12}
                />
              ) : null}

              <Typography component="span" sx={{ marginLeft: "10px" }}>
                {datos && datos.data[0].local.name}
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
              <Typography component="span" sx={{ margin: "0 10px" }}>
                {" "}
                {datos && datos.data[0].visitante.name}
              </Typography>
              {datos && datos.data[0].visitante.bandera ? (
                <Image
                  src={datos.data[0].visitante.bandera}
                  alt={datos.data[0].nombre}
                  width={20}
                  height={12}
                />
              ) : null}
              <TextField
                margin="dense"
                type="number"
                style={{
                  height: 40,
                  marginBottom: "40px",
                  marginLeft: "10px",
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
              <Button
                variant="contained"
                sx={{ marginLeft: "30px" }}
                type="submit"
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        hola
      </Grid>
    </Grid>
  );
};
