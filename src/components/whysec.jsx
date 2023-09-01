import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
// import { Container } from "@mui/material";
const whysec = () => {
  const headfont = {
    fontSize: "clamp(50px, 4vw, 64px)",
  };
  const paraone = {
    fontSize: "clamp(15px, 1.4vw, 20px)",
  };
  const numbersec = {
    fontSize: "clamp(30px, 2.4vw, 40px)",
  };
  const numbersecdescription = {
    fontSize: "clamp(10px, 1.1vw, 16px)",
  };
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",
        height: "100vh",
        pl: "15px",
        pr: "15px",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "flex-start",
          width: "40vw",
        }}
      >
        <Typography
          style={headfont}
          sx={{
            color: "primary.purp",

            fontFamily: "Bebas Neue",
            textAlign: "center",
            mb: "2%",
          }}
        >
          WHY RAZORSWIFT
        </Typography>
        <Typography
          style={paraone}
          sx={{
            fontSize: "20px",
            textAlign: "center",
            mb: "3%",
            fontFamily: "urbanist",
            textAlign: "justify",
          }}
        >
          We are a machine learning based dynamic 'digital marketplace' that
          provides the aspirant talent pool to stay continually competitive
          relative to the hiring landscape in India. We do this by harnessing
          our comprehensive knowledge partner ecosystem, which provides for
          comprehensive mentorship, learning and career progression advisory.
        </Typography>
        <Typography
          style={paraone}
          sx={{
            fontSize: "20px",
            textAlign: "justify",
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "45vw",
        }}
      >
        <Box
          sx={{
            height: "clamp(250px, 19.3vw, 270px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.pinktwo",
            }}
          >
            <Typography
              style={numbersec}
              sx={{ color: "primary.purp", fontFamily: "Urbanist" }}
            >
              70%
            </Typography>
            <Typography
              style={numbersecdescription}
              sx={{ fontFamily: "Urbanist" }}
            >
              <b>Improvement</b> in new hire <b>retention.</b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.redpinktwo",
              marginTop: "20px",
            }}
          >
            <Typography
              style={numbersec}
              sx={{ color: "primary.purp", fontFamily: "Urbanist" }}
            >
              70%
            </Typography>
            <Typography
              style={numbersecdescription}
              sx={{ fontFamily: "Urbanist" }}
            >
              <b>Improvement</b> in new hire <b>retention.</b>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "clamp(250px, 19.3vw, 270px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginLeft: "30px",
          }}
        >
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.redpink",
            }}
          >
            <Typography
              style={numbersec}
              sx={{ color: "primary.purp", fontFamily: "Urbanist" }}
            >
              70%
            </Typography>
            <Typography
              style={numbersecdescription}
              sx={{ fontFamily: "Urbanist" }}
            >
              <b>Improvement</b> in new hire <b>retention.</b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.redpinkthree",
              marginTop: "20px",
            }}
          >
            <Typography
              style={numbersec}
              sx={{ color: "primary.purp", fontFamily: "Urbanist" }}
            >
              70%
            </Typography>
            <Typography
              style={numbersecdescription}
              sx={{ fontFamily: "Urbanist" }}
            >
              <b>Improvement</b> in new hire <b>retention.</b>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default whysec;
