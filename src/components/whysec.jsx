import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
const whysec = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>WHY RAZORSWIFT</Typography>
      <Typography>
        We are a machine learning based dynamic 'digital marketplace' that
        provides the aspirant talent pool to stay continually competitive
        relative to the hiring landscape in India. We do this by harnessing our
        comprehensive knowledge partner ecosystem, which provides for
        comprehensive mentorship, learning and career progression advisory.
      </Typography>
      <Typography>
        We use a unique 'affinity algorithm' which provides for identification,
        assessment and enablement modules resulting in significant process
        efficiency in curation and hiring, whilst saving significant time and
        cost for businesses and aspirants.
      </Typography>
      <Link>Explore</Link>
    </Box>
  );
};

export default whysec;
