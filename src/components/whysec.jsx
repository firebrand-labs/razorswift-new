import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";
const whysec = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "primary.purp",
            fontSize: "64px",
            fontFamily: "Bebas Neue",
            textAlign: "center",
            mb: "2%",
          }}
        >
          WHY RAZORSWIFT
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            mb: "3%",
            fontFamily: "urbanist",
          }}
        >
          We are a machine learning based dynamic 'digital marketplace' that
          provides the aspirant talent pool to stay continually competitive
          relative to the hiring landscape in India. We do this by harnessing
          our comprehensive knowledge partner ecosystem, which provides for
          comprehensive mentorship, learning and career progression advisory.
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            mb: "4%",
            fontFamily: "urbanist",
          }}
        >
          We use a unique 'affinity algorithm' which provides for
          identification, assessment and enablement modules resulting in
          significant process efficiency in curation and hiring, whilst saving
          significant time and cost for businesses and aspirants.
        </Typography>
        <Link
          underline="none"
          sx={{
            backgroundColor: "primary.purp",
            color: "common.white",
            pt: "10px",
            pb: "10px",
            pl: "30px",
            pr: "30px",
            borderRadius: "200px",

            cursor: "pointer",
            fontFamily: "urbanist",
          }}
        >
          Explore
        </Link>
      </Container>
    </Box>
  );
};

export default whysec;
