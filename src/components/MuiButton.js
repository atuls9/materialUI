import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [format, setFormat] = useState([]);
  const handleFormatChange = (event, newFormats) => {
    setFormat(newFormats);
    console.log(format);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* contained=primary
      outlined = secondary  at goback,cancel,close,exit
      text= not important at footer 
      we can use href attribute on text variant*/}
        <Button variant="text">TEXT</Button>

        {/* when we use href attribute to text variant the ""button"" tag converts to ''anchor'' tag */}
        <Button variant="text" href="https://www.google.com/">
          Google
        </Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        {/* if  display="block" is not defined then by default display = 'flex' which shows all buttons of equal size*/}
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          color="error"
          variant="contained"
          startIcon={<AddCircleRoundedIcon />}
          disableRipple
          onClick={() => alert("clicked")}
        >
          Add
        </Button>
        <Button
          color="error"
          variant="contained"
          endIcon={<AddCircleRoundedIcon />}
          disableElevation
        >
          Add
        </Button>
        <IconButton aria-label="add" color="error" size="small">
          <AddCircleRoundedIcon />
        </IconButton>
        <IconButton aria-label="add" color="secondary" size="large">
          <AddCircleRoundedIcon />
        </IconButton>
      </Stack>

      {/* ButtonGroup */}
      <h5>Button Group</h5>
      <Stack direction="row" spacing={2}>
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="large"
          color="secondary"
        >
          <Button>primary</Button>
          <Button>secondary</Button>
          <Button>error</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ButtonGroup variant="contained" orientation="row" size="small">
          <Button color="info" onClick={() => alert("clicked on info")}>
            info
          </Button>
          <Button color="warning">warning</Button>
          <Button color="success" onClick={() => alert("clicked on success")}>
            success
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
