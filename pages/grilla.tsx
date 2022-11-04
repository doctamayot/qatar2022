import { Box } from "@mui/material";
import React from "react";
import { AuthLayout } from "../components/layouts";
import { Resultados } from "../components/resultados/resultados";

const Grilla = () => {
  return (
    <AuthLayout title="Grilla" aviso="false">
      <Box sx={{ marginTop: "30px" }}>
        <Resultados />;
      </Box>
    </AuthLayout>
  );
};

export default Grilla;
