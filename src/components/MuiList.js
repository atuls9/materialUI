import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  ListItemButton,
  IconButton,
} from "@mui/material";
import React from "react";
import { FavoriteOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiList = () => {
  return (
    <Box sx={{ width: " 40%", bgcolor: "secondary.light" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteOutlined />
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItemButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <FavoriteOutlined color="error" />
          </ListItemIcon>
          <ListItemText primary="List Item 2" />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <FavoriteOutlined />
          </ListItemIcon>
          <ListItemText primary="List Item 3" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
