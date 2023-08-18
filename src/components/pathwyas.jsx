"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import data from "../utilities/pathway";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: "1px solid",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ display: "none" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#DCBDE3",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const fonthead = {
  fontSize: "clamp(45px, 3.5vw, 64px)",
};

const fonttitle = {
  fontSize: "clamp(25px, 2vw, 36px)",
  fontFamily: "Urbanist",
  fontWeight: "bold",
};

const fontdes = {
  fontSize: "clamp(15px, 1.2vw, 20px)",
  fontFamily: "Urbanist",
  fontWeight: "500",
};

export default function pathways() {
  const [expanded, setExpanded] = React.useState(null); // Change initial value to null
  const [expandedone, setExpandedone] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null); // Update to null when collapsed
  };
  const handleChangeone = (panelone) => (eventone, newExpandedone) => {
    setExpandedone(newExpandedone ? panelone : null); // Update to null when collapsed
  };

  return (
    <Box sx={{ backgroundColor: "primary.main", height: "100vh" }}>
      <Typography
        style={fonthead}
        sx={{ color: "common.white", ml: "20px", fontFamily: "Bebas Neue" }}
      >
        RAZORSWIFT PATHWAYS
      </Typography>
      <Box sx={{ display: "flex" }}>
        {/* first sec*/}
        <Box sx={{ width: "30vw" }}>
          {data.map(
            (
              item,
              index // Add index parameter to map
            ) => (
              <Accordion
                key={index} // Add a unique key for each accordion
                sx={{
                  backgroundColor: "primary.dropdown",
                  borderRadius: index === 0 ? "40px 40px 0 0" : "0",
                }}
                expanded={expanded === `panel${index}`} // Use index to identify each accordion
                onChange={handleChange(`panel${index}`)} // Use index to identify each accordion
              >
                <AccordionSummary
                  sx={{
                    borderRadius: index === 0 ? "30px 30px 0 0" : "0",
                  }}
                  aria-controls={`panel${index}d-content`} // Use index to identify each accordion
                  id={`panel${index}d-header`} // Use index to identify each accordion
                >
                  <Typography style={fonttitle}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none" }}>
                  <Typography style={fontdes}>{item.description}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
        {/* second sec*/}
        <Box sx={{ width: "30vw", ml: "30px" }}>
          {data.map(
            (
              item,
              index // Add index parameter to map
            ) => (
              <Accordion
                key={index} // Add a unique key for each accordion
                sx={{
                  backgroundColor: "primary.accord",
                  borderRadius: index === 0 ? "40px 40px 0 0" : "0",
                }}
                expanded={expandedone === `panelone${index}`} // Use index to identify each accordion
                onChange={handleChangeone(`panelone${index}`)} // Use index to identify each accordion
              >
                <AccordionSummary
                  sx={{
                    borderRadius: index === 0 ? "30px 30px 0 0" : "0",
                    backgroundColor: "primary.accord",
                  }}
                  aria-controls={`panelone${index}d-content`} // Use index to identify each accordion
                  id={`panelone${index}d-header`} // Use index to identify each accordion
                >
                  <Typography style={fonttitle}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none" }}>
                  <Typography style={fontdes}>{item.description}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
