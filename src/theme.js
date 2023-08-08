"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A62973",
      mainone: "#672376",
      secbg: "#FCD3D1",
      thirdsec: "#EE5064",
    },
    // You can also customize other palette colors here if needed
    typography: {
      fontFamily: '"Bebas",Urbanist',
    },
  },
  // Other theme configurations...
});

export default theme;
