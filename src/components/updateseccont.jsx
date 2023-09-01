import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import rightarrow from "../../public/images/Arrow.png";
const updateseccont = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        backgroundColor: "primary.secbg",
        p: "10px",
        height: "40px",
        overflowY: "hidden",
      }}
    >
      <Typography
        component="p"
        sx={{ fontSize: "28px", fontFamily: "Urbanist" }}
      >
        Check out the newly added Python pathway
      </Typography>
      <Box component="span">
        <Image src={rightarrow} />
      </Box>
    </Box>
  );
};

export default updateseccont;
