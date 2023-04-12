import { Box, Grid } from "@mui/material";
import React from "react";

const MuiGrid = () => {
  return (
    //  grid container rowSpacing and columnSpacing are also attribute
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="error.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box bgcolor="warning.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box bgcolor="secondary.light" p={2}>
          Item 1
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiGrid;
