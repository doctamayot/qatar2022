import {
  Box,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AuthLayout } from "../../components/layouts";
import { tesloApi } from "../../axios";
import { NextPage } from "next";

const Jugadores: NextPage = () => {
  const [usuarios, setUsuarios] = useState<any>();
  const [checked, setChecked] = React.useState<any>(false);
  const [iduser, setId] = React.useState<any>();

  const UsersLlamada = async () => {
    const { data }: any = await tesloApi({
      url: `/jugadores`,

      method: "GET",
    });

    setUsuarios(data);
    //setGrupo2(data.data.grupos[0]);
  };
  //console.log(usuarios);
  useEffect(() => {
    UsersLlamada();
  }, []);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setId(event.target.name);
    // console.log(event.target.name);

    await tesloApi({
      url: `/jugadores`,
      method: "PUT",
      data: { _id: event.target.name, isActive: event.target.checked },
    });
  };

  return (
    <AuthLayout title="jugadores" aviso="false">
      <Grid
        container
        sx={{ marginTop: "100px" }}
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "30px", textAlign: "center" }}
          >
            Usuarios {usuarios && usuarios.length - 1}
          </Typography>
          <Grid item xs={12}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                {usuarios &&
                  usuarios.map((user: any) => (
                    // <Box key={user._id} display="flex">
                    //   <Typography variant="subtitle1">{user.name}</Typography>
                    // </Box>
                    <Box key={user._id}>
                      <FormControlLabel
                        control={
                          <Switch
                            //checked={checked}
                            onChange={handleChange}
                            name={user._id}
                            defaultChecked={user.activo}
                            //inputRef={user._id}
                          />
                        }
                        label={
                          <Typography
                            variant="subtitle2"
                            sx={{ marginLeft: "20px" }}
                          >
                            {user.name} - ({user.email})
                          </Typography>
                        }
                      />
                    </Box>
                  ))}
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default Jugadores;
