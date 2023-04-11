import React, { useState } from "react";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MuiTextField = () => {
  const [value, setvalue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* if direction= row not defined then textfield taked whole row */}
        <TextField label="Name" variant="outlined" />
        <TextField label="filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        {/* size=normal is default */}
        <TextField label="Small secondary" color="secondary" size="small" />
        <TextField label="Normal and red" color="error" size="normal" />
        <TextField label="Required and info" color="info" required />
      </Stack>
      <Stack spacing={2} direction="row">
        {/* type = text(default), password, number */}
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your password with anyone"
        />
        <TextField label="Disabled and info" color="info" disabled />
        <TextField
          label="Read only"
          color="info"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          helperText="Do not share your password with anyone"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share Password"}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
