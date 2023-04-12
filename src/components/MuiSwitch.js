import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [mode, setMode] = useState(false);
  const [multiMode, setMultiMode] = useState(["html", "css", "javascript"]);

  //   console.log({ mode });
  const handleChange = (e) => {
    setMode(e.target.checked);
  };
  console.log({ multiMode });
  const handleMultiMode = (e) => {
    const index = multiMode.indexOf(e.target.value);
    if (index === -1) {
      setMultiMode([...multiMode, e.target.value]);
    } else {
      setMultiMode(multiMode.filter((mode) => mode !== e.target.value));
    }
  };
  return (
    <>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={mode} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="HTML"
          value="html"
          control={
            <Switch
              checked={multiMode.includes("html")}
              onChange={handleMultiMode}
            />
          }
        />
        <FormControlLabel
          label="CSS "
          value="css"
          control={
            <Switch
              checked={multiMode.includes("css")}
              onChange={handleMultiMode}
            />
          }
        />
        <FormControlLabel
          label="Javascript "
          value="javascript"
          control={
            <Switch
              checked={multiMode.includes("javascript")}
              onChange={handleMultiMode}
              size="small"
              color="secondary"
            />
          }
        />
      </Box>
    </>
  );
};

export default MuiSwitch;
