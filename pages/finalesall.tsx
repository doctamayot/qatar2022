import { Box } from "@mui/material";
import React from "react";
import { AuthLayout } from "../components/layouts";
import { Finalesall } from "../components/resultados/Finalesall";

const Finales = () => {
  return (
    <AuthLayout title="posiciones grupo" aviso="false">
      <Box sx={{ marginTop: "30px" }}>
        <Finalesall />;
      </Box>
    </AuthLayout>
  );
};

export default Finales;
