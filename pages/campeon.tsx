import { Box } from "@mui/material";
import React from "react";
import { AuthLayout } from "../components/layouts";
import { Campeones } from "../components/resultados/Campeones";

const Campeon = () => {
  return (
    <AuthLayout title="posiciones grupo" aviso="false">
      <Box sx={{ marginTop: "30px" }}>
        <Campeones />
      </Box>
    </AuthLayout>
  );
};

export default Campeon;
