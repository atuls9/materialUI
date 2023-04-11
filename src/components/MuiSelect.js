import { Box, TextField, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  const [countries, setCountries] = useState([]);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    //   console.log({ country });
  };

  const handleChangeCountries = (event) => {
    const select = event.target.value;
    setCountries(
      // On autofill we get a stringified value.
      typeof select === "string" ? select.split(",") : select
    );
    console.log(countries);
  };

  return (
    <Stack spacing={2} direction="row">
      <Box width="250px">
        <TextField
          fullWidth
          label="Select Country"
          select
          value={country}
          onChange={handleChangeCountry}
          size="small"
          helperText="Please select your country"
          color="secondary"
          required
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="PAK">Pakistan</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          fullWidth
          label="Select Country"
          select
          value={countries}
          onChange={handleChangeCountries}
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="PAK">Pakistan</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
