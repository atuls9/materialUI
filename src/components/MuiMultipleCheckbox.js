import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiMultipleCheckbox = () => {
  const [skills, setSkills] = useState([]);
  console.log({ ...skills });
  const handleChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      // to remove existing skill
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="HTML"
            value="html"
            control={
              <Checkbox
                checked={skills.includes("html")}
                onChange={handleChange}
              />
            }
          />
          <FormControlLabel
            label="CSS"
            value="css"
            control={
              <Checkbox
                checked={skills.includes("css")}
                onChange={handleChange}
              />
            }
          />
          <FormControlLabel
            label="Javascript"
            value="javascript"
            control={
              <Checkbox
                checked={skills.includes("javascript")}
                onChange={handleChange}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default MuiMultipleCheckbox;
