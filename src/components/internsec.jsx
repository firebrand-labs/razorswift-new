import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import aspiratvect from "../../public/images/aspirants-vector.svg";
import internmain from "../../public/images/placeholder-image.png";
import internone from "../../public/images/icon-1.svg";
import Whattoexp from "./whattoexp";
import data from "../utilities/intern.js";

const internsec = ({ contchnage }) => {
  console.log(contchnage);
  const imgs = {
    width: "500px",
    height: "initial",
  };
  // const [selectedId, setSelectedId] = useState(nestedData[0].id);
  return (
    <Box
      sx={{
        backgroundColor: "primary.pinkint",
        pt: "5%",
        pb: "5%",
        pl: "3%",
        pr: "3%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Image src={aspiratvect} />
          <Typography
            sx={{
              fontSize: "55px",
              fontFamily: "urbanist",
              fontWeight: "500",
            }}
          >
            {contchnage.firstsec.toptitleone}
          </Typography>
          <Typography
            sx={{
              fontSize: "77px",
              lineHeight: "1.0",
              fontFamily: "urbanist",
              fontWeight: "600",
              mb: "3%",
            }}
          >
            Jobs.
          </Typography>
          <Typography
            sx={{ fontSize: "22px", fontFamily: "urbanist", mb: "5%" }}
          >
            Whether you're a student or an experienced professional,
            <br /> everything possible through our corporate cohorts.
          </Typography>
          <Box
            sx={{
              backgroundColor: "common.white",
              width: "fit-content",
              borderRadius: "200px",
              pt: "5px",
              pb: "5px",
              pl: "20px",
              pr: "20px",
              cursor: "pointer",
            }}
          >
            <Link
              underline="none"
              sx={{
                fontSize: "20px",
                color: "primary.purp",
                fontFamily: "urbanist",
              }}
            >
              Explore
            </Link>
          </Box>
        </Box>

        <Box>
          <Image style={imgs} src={internmain} />
        </Box>
      </Box>
      {/* second */}
      <Whattoexp />
    </Box>
  );
};

export default internsec;
