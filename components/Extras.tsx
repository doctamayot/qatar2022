import React from "react";
import { LoadingPartido } from "./ui";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { tesloApi } from "../axios";
import { useForm } from "react-hook-form";

export const Extras = () => {
  const [cargando, setcargando] = useState<any>(false);
  const [jugado, setJugado] = useState<any>(false);
  const [datos, setDatos] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const gruposLlamada = async () => {
    const data: any = await tesloApi({
      url: `/extras/datosfinal`,

      method: "GET",
    });

    setDatos(data.data[0]);
  };
  //console.log(datos);
  // console.log(grupo2);

  useEffect(() => {
    gruposLlamada();
  }, [jugado]);

  const onSubmit1 = async (form: any) => {
    form.jugado = true;

    setcargando(true);
    try {
      const { data } = await tesloApi({
        url: `/extras/datosfinal`,
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
        url: `/extras/datosfinal`,
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
    <Grid container sx={{ marginTop: "100px" }}>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "40px", marginLeft: { md: "50px", xs: "10px" } }}
      >
        PUNTOS EXTRA
      </Typography>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          backgroundColor: "#bbb7be33",
          padding: { lg: "50px 0 10px 100px" },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit1)}>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Goleador
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("goleador", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.goleador}
              helperText={errors.goleador?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.goleador}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Valla más vencida
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("masvencida", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.masvencida}
              helperText={errors.masvencida?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.masvencida}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Valla menos vencida
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("menosvencida", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.menosvencida}
              helperText={errors.menosvencida?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.menosvencida}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Equipo con más rojas
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("rojas", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.rojas}
              helperText={errors.rojas?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.rojas}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Equipo con más amarillas
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("amarillas", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.amarillas}
              helperText={errors.amarillas?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.amarillas}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Equipo más goleador
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("masgoles", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.masgoles}
              helperText={errors.masgoles?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.masgoles}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Equipo menos goleador
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("menosgoles", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.menosgoles}
              helperText={errors.menosgoles?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.menosgoles}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Grupo con más goles
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("grupomasgoles", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.grupomasgoles}
              helperText={errors.grupomasgoles?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.grupomasgoles}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              Grupo con menos goles
            </Typography>
            <TextField
              type="text"
              style={{
                height: 40,
                marginBottom: "30px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
              variant="filled"
              //sx={{ width: "100px" }}
              {...register("grupomenosgoles", {
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Mínimo 1 numero",
                },
              })}
              size="small"
              error={!!errors.grupomenosgoles}
              helperText={errors.grupomenosgoles?.message}
            />
            <Typography
              component="span"
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginTop: "300px" }}
            >
              {datos && datos.grupomenosgoles}
            </Typography>
          </Box>

          {datos && datos.jugado ? (
            <Button
              onClick={() => editar(0)}
              variant="contained"
              color="warning"
              sx={{
                marginRight: "10px",
                marginTop: "25px",
                width: "200px",
                marginBottom: "50px",
                marginLeft: { md: "50px" },
              }}
            >
              editar
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                marginRight: "10px",
                marginTop: "25px",
                width: "200px",
                marginBottom: "50px",
                marginLeft: { xs: "70px" },
              }}
              type="submit"
              color="primary"
            >
              Enviar
            </Button>
          )}
        </form>
      </Grid>
    </Grid>
  );
};
