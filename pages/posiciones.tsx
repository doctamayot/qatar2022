import { Box } from "@mui/material";
import React from "react";
import { AuthLayout } from "../components/layouts";
import { PosicionesC } from "../components/resultados/Posiciones";

const Posiciones = () => {
  return (
    <AuthLayout title="posiciones grupo" aviso="false">
      <Box sx={{ marginTop: "30px" }}>
        <PosicionesC />;
      </Box>
    </AuthLayout>
  );
};

export default Posiciones;
