import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { tesloApi } from "../../axios";

export const Resultados = () => {
  const partidosLlamada = async () => {
    const { data }: any = await tesloApi({
      url: `/partidos`,
      method: "GET",
    });

    console.log(data);
  };

  useEffect(() => {
    partidosLlamada();
  }, []);

  return (
    <Grid container>
      <Grid item>
        {/* <Box display="flex">
          <Image
            src={datos[0].local.bandera}
            alt={datos[0].nombre}
            width={80}
            height={60}
          />
          <Typography variant="subtitle1">1</Typography>
          <Typography variant="subtitle1">2</Typography>
          <Image
            src={datos[0].local.bandera}
            alt={datos[0].nombre}
            width={80}
            height={60}
          />
        </Box> */}
        hola
      </Grid>
    </Grid>
  );
};
