//MUI
import { Box, CircularProgress, Typography } from "@mui/material";

//APP
//import { PrincipalLayout } from "../layouts/PrincipalLayout";

export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        flexDirection: { xs: "column" },
      }}
      textAlign="center"
    >
      <Typography
        sx={{ fontFamily: "'Yanone Kaffeesatz', sans-serif", color: "#000" }}
        variant="h6"
        fontSize={30}
        fontWeight="200"
      >
        Creando todos los formularios
      </Typography>
      <CircularProgress
        sx={{ marginTop: "30px", color: "#000" }}
        thickness={2}
      />
    </Box>
  );
};
