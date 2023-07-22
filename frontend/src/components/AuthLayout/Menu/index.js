import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemIcon } from "@mui/material";
import { Menu } from "../../constant";

const MenuList = () => {
  const navigate = useNavigate();

  const handleRoute = (path) => navigate(path);

  return (
    <List sx={{ paddingTop: "18px" }} component="nav" aria-labelledby="nested-list-subheader">
      {/* <ListItem>
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            ...(!open && { display: "none" })
          }}>
          <ChevronRightIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            ...(open && { display: "none" })
          }}>
          <MenuIcon />
        </IconButton>
      </ListItem> */}
      {Menu?.map((item) => (
        <ListItem key={item.path} button onClick={() => handleRoute(item.path)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          {/* <ListItemText primary={item.title} /> */}
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
