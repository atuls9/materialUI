import { Box, Stack, Divider } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return (
    // direction = row,column, row-reverse, columc-reverse
    <Stack
      sx={{ border: " 1px solid red" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        //   component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "30%",
          height: "100px",
          padding: "20px",
          textAlign: "center",
          margin: "auto",
          // marginTop: "50px",
          "&:hover": {
            backgroundColor: "error.light",
          },
        }}
      >
        Atul
      </Box>

      <Box
        // display="flex"
        width="40%"
        height="100px"
        p="20px" //{2} = 16px
        bgcolor="secondary.light"
        textAlign="center"
        mx="auto"
        color="white"
        m="auto"
      >
        Suryawanshi
      </Box>
    </Stack>
  );
};

export default MuiBox;
