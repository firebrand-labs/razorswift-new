import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import sshot from "../../public/images/screenshot.png";
const whatwedo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.thirdsec",
        pt: "5%",
        pb: "5%",
        pl: "1%",
        pr: "1%",
      }}
    >
      <Box>
        <Image src={sshot} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="p"
            sx={{
              fontSize: "64px",
              color: "common.white",
              fontFamily: "Bebas Neue",
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography sx={{ fontSize: "14px", fontFamily: "Urbanist" }}>
            Explain the overall process of how RazorSwift works,
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="p"
            sx={{
              fontSize: "72px",
              fontFamily: "Bebas Neue",
              color: "common.white",
            }}
          >
            ENROLL
          </Typography>
          <Typography
            sx={{ fontSize: "20px", color: "common.white", mb: "3%" }}
          >
            Start by signing up with us, if you are looking to score big. Sign
            up is as easy as sending a message on WhatsApp.
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "common.white" }}>
            Let's address the aspirants first, and talk about a simple signing
            up process and in a broader sense what the company offers to them -
            we will keep this within 3 lines. In this point, we can also mention
            the 'students' and 'experienced professional' distinction.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default whatwedo;
