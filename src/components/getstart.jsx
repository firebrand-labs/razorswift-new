import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import fivemen from "../../public/images/banner-image-2.svg";
const getstart = () => {
  return (
    <Box
      sx={{
        lineHeight: "1.0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 10,
        pb: 10,
      }}
    >
      <Typography
        sx={{
          fontSize: "80px",
          fontFamily: "Bebas Neue",
          color: "primary.purp",
          lineHeight: "1.0",
          mb: "2%",
        }}
      >
        READY TO GET STARTED?
      </Typography>
      <Typography sx={{ fontSize: "28px", fontFamily: "urbanist", mb: "2%" }}>
        Get identified, upskill. Grow your business and brand.
      </Typography>
      <Box sx={{ display: "flex", gap: 5, mb: "5%" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "200px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            underline="none"
            sx={{
              fontSize: "20px",
              fontFamily: "urbanist",

              color: "common.white",
            }}
          >
            Build Your Profile
          </Link>
        </Box>
        <Box
          sx={{
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: "200px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            underline="none"
            sx={{
              fontSize: "20px",
              fontFamily: "urbanist",
              color: "primary.main",
            }}
          >
            Get a Demo
          </Link>
        </Box>
      </Box>
      <Image src={fivemen} />
    </Box>
  );
};

export default getstart;
