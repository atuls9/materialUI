import { Box, FormControlLabel, Checkbox } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });
  const hancleChange = (e) => {
    setAcceptTnC(e.target.checked);
  };

  return (
    <Box>
      {/* comment one box to check */}
      <Box>
        <FormControlLabel
          label="I accept terms and condition"
          control={<Checkbox checked={acceptTnC} onChange={hancleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<FavoriteBorderOutlinedIcon />}
          checkedIcon={<FavoriteOutlinedIcon color="secondary" />}
          checked={acceptTnC}
          onChange={hancleChange}
        />
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
