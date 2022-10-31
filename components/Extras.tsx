import React from "react";
import { LoadingPartido } from "./ui";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { tesloApi } from "../axios";
import { useForm } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material/Select";

export const Extras = () => {
  const [cargando, setcargando] = useState<any>(false);
  const [jugado, setJugado] = useState<any>(false);
  const [datos, setDatos] = useState<any>();
  const [equipos, setEquipos] = useState<any>();
  const [age, setAge] = React.useState("");
  const [age2, setAge2] = React.useState("");

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
    //console.log(data);
    setDatos(data.data.datos[0]);
    setEquipos(data.data.equipos);
  };
  // console.log(datos);
  // console.log(equipos);

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
    <>
      {cargando === true ? (
        <LoadingPartido />
      ) : (
        <Grid container sx={{ marginTop: "100px" }} display="flex">
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "40px",
              //marginLeft: { md: "50px", xs: "10px" },
              width: "50%",
              margin: "0 auto",

              textAlign: "center",
            }}
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
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
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
                  Seleccionado: {datos && datos.goleador}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Valla más vencida
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Escoge un equipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="Valla más vencida"
                    //onChange={handleChange}
                    {...register("masvencida", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    {equipos &&
                      equipos.map((e: { name: string; _id: string }) => (
                        <MenuItem value={e.name} key={e._id}>
                          {e.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccinado: {datos && datos.masvencida}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Valla menos vencida
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Escoge un equipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="Valla más vencida"
                    //onChange={handleChange}
                    {...register("menosvencida", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    {equipos &&
                      equipos.map((e: { name: string; _id: string }) => (
                        <MenuItem value={e.name} key={e._id}>
                          {e.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccionado: {datos && datos.menosvencida}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Equipo con más rojas
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Escoge un equipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="rojas"
                    //onChange={handleChange}
                    {...register("rojas", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    {equipos &&
                      equipos.map((e: { name: string; _id: string }) => (
                        <MenuItem value={e.name} key={e._id}>
                          {e.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccionado: {datos && datos.rojas}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Equipo con más amarillas
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Escoge un equipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="Amarillas"
                    //onChange={handleChange}
                    {...register("amarillas", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    {equipos &&
                      equipos.map((e: { name: string; _id: string }) => (
                        <MenuItem value={e.name} key={e._id}>
                          {e.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccionado: {datos && datos.amarillas}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Equipo más goleador
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Escoge un equipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="Valla más vencida"
                    //onChange={handleChange}
                    {...register("masgoles", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    {equipos &&
                      equipos.map((e: { name: string; _id: string }) => (
                        <MenuItem value={e.name} key={e._id}>
                          {e.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccionado: {datos && datos.masgoles}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Equipo menos goleador
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Escoge un equipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="Valla más vencida"
                    //onChange={handleChange}
                    {...register("menosgoles", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    {equipos &&
                      equipos.map((e: { name: string; _id: string }) => (
                        <MenuItem value={e.name} key={e._id}>
                          {e.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccionado: {datos && datos.menosgoles}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Grupo con más goles
                </Typography>
                {/* <TextField
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
                /> */}

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Selección
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="A"
                    label="Valla más vencida"
                    //onChange={handleChange}
                    {...register("grupomasgoles", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                    <MenuItem value="E">E</MenuItem>
                    <MenuItem value="F">F</MenuItem>
                    <MenuItem value="G">G</MenuItem>
                    <MenuItem value="H">H</MenuItem>
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "300px" }}
                >
                  Seleccionado: {datos && datos.grupomasgoles}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "30px",
                  border: "1px solid",
                  width: { md: "50%" },
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  Grupo con menos goles
                </Typography>
                {/* <TextField
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
                /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Selección
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="A"
                    label="Valla más vencida"
                    //onChange={handleChange}
                    {...register("grupomenosgoles", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 1,
                        message: "Mínimo 1 palabra",
                      },
                    })}
                    sx={{
                      width: "200px",
                      height: 40,
                      marginBottom: "30px",
                      marginTop: "0px",
                      marginLeft: "10px",
                    }}
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                    <MenuItem value="E">E</MenuItem>
                    <MenuItem value="F">F</MenuItem>
                    <MenuItem value="G">G</MenuItem>
                    <MenuItem value="H">H</MenuItem>
                  </Select>
                </FormControl>
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginTop: "-1000px" }}
                >
                  Seleccionado: {datos && datos.grupomenosgoles}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                {datos && datos.jugado ? (
                  <Button
                    onClick={() => editar(0)}
                    variant="contained"
                    color="warning"
                    sx={{
                      width: "50%",
                      marginBottom: "200px",
                    }}
                    type="submit"
                  >
                    editar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      width: "50%",
                      marginBottom: "200px",
                    }}
                    type="submit"
                    color="primary"
                  >
                    Enviar
                  </Button>
                )}
              </Box>
            </form>
          </Grid>
        </Grid>
      )}
    </>
  );
};
