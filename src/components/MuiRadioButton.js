import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="Job-experience-group-label">
          Years of experience
        </FormLabel>

        <RadioGroup
          name="Job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          //   align in row by default they are in column
          row
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
