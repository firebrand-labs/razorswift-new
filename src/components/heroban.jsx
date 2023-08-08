import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import bannerimg from "../../public/images/Banner-Image.png";
import Image from "next/image";
import { Container } from "@mui/material";
import "../styles/heroban.css";
const hero = () => {
  return (
    <Stack sx={{ pt: "1%", pl: "1%", pr: "1%" }}>
      <Stack>
        <Stack sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontSize: 50,
              color: "primary.mainone",
              lineHeight: "1.0",
              fontFamily: "Bebas Neue",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "primary.main",
                pr: 3,
              }}
            >
              EMPOWERING
            </Box>
            TALENT.
          </Typography>
          <Typography
            sx={{
              fontSize: 50,
              color: "primary.mainone",
              lineHeight: "1.0",
              fontFamily: "Bebas Neue",
            }}
          >
            <Box component="span" sx={{ color: "primary.main", pr: 3 }}>
              ENABLINGING
            </Box>
            GROWTH.
          </Typography>
        </Stack>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            fontFamily: "Urbanist",
          }}
        >
          <Box component="span" sx={{ fontSize: 28, lineHeight: 1.0 }}>
            India's first unified ML enabled marketplace
          </Box>
          <Box component="span" sx={{ fontSize: 28, lineHeight: 1.0 }}>
            connecting aspirants with businesses.
          </Box>
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            fontFamily: "Urbanist",
          }}
        >
          <Link
            sx={{
              fontSize: 20,
              textDecoration: "none",
              border: "1px solid",
              borderColor: "primary.light",
              borderRadius: 50,
              backgroundColor: "primary.main",
              color: "common.white",
              pt: 0.8,
              pb: 0.8,
              pl: 2,
              pr: 2,
            }}
          >
            Build Your Profile
          </Link>
          <Link
            sx={{
              fontSize: 20,
              textDecoration: "none",
              border: "1px solid",
              borderColor: "primary.light",
              borderRadius: 50,
              pt: 0.8,
              pb: 0.8,
              pl: 2,
              pr: 2,
            }}
          >
            Get a Demo
          </Link>
        </Stack>
      </Stack>
      <Stack sx={{ alignSelf: "flex-end", mt: -4 }}>
        <Box component="span">
          <Image src={bannerimg} sx={{}} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default hero;
