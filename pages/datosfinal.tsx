import { Box } from "@mui/material";
import React from "react";
import { AuthLayout } from "../components/layouts";
import { Datosfinales } from "../components/resultados/Datosfinales";

const Datos = () => {
  return (
    <AuthLayout title="posiciones grupo" aviso="false">
      <Box sx={{ marginTop: "30px" }}>
        <Datosfinales />
      </Box>
    </AuthLayout>
  );
};

export default Datos;
