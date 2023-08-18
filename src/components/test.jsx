"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Internsec from "../components/internsec";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import data from "../utilities/intern.js";
import dropdata from "../utilities/dropdown.js";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Test() {
  const [age, setAge] = React.useState("1");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
  };

  const selectedDropdownData = dropdata.find((itemlist) => itemlist.id === age);
  const selectedMainData = data.find((item) => item.id === age);

  return (
    <Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            displayEmpty
          >
            {dropdata &&
              dropdata.map((itemlist) => (
                <MenuItem key={itemlist.id} value={itemlist.id}>
                  {itemlist.title}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Internsec contchnage={selectedMainData} />
    </Box>
  );
}
