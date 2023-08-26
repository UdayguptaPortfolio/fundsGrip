/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { StyledLogo } from "./Styled";
import { StyledTypography } from "../../Common/StyledTypography";
import { useSignOutUserMutation } from "../../../redux/slices/auth/signOutApiSlice";
import { useNavigate } from "react-router-dom";
import { headerMenu, settingsMenu } from "../../constant";
import { useSelector } from "react-redux";

const commonStyle = {
  color: "black",
  display: "block",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "2px",
  px: 15,
  backgroundColor: "none"
};

function ResponsiveAppBar() {
  const { userData } = useSelector((state) => state?.authState);
  const { first_name, last_name } = userData?.user?.data?.attributes || {};
  const profile_name = first_name + " " + last_name || "Admin";
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [signOutUser, { data }] = useSignOutUserMutation();
  const navigate = useNavigate();
  const urlPath = window.location.pathname;

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClickMenu = (item) => {
    if (item === "Logout") {
      let payload = {
        token: localStorage.getItem("token")
      };
      signOutUser(payload);
      localStorage.clear();
    }
    setAnchorElUser(null);
  };

  const handleHeaderMenu = (name) => {
    if (!urlPath?.includes(name)) {
      navigate(`/pages/${name}`);
    }
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl" sx={{ pl: 25, pr: 15 }}>
          <Toolbar disableGutters>
            <StyledLogo src="/images/funds_grip_logo.png" alt="#" />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                justifyContent: "end",
                mr: 54
              }}>
              {headerMenu?.map((page, index) => (
                <Button
                  key={index}
                  sx={
                    urlPath?.includes(page?.name.toLowerCase())
                      ? {
                          ...commonStyle,
                          backgroundColor: "#9ad3cb91",
                          height: "100%",
                          minHeight: "85px",
                          background: "#9ad3cb91",
                          borderRadius: "0"
                        }
                      : {
                          ...commonStyle
                        }
                  }
                  onClick={() => handleHeaderMenu(page?.name.toLowerCase())}>
                  {page?.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "flex", alignItems: "center" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={`${first_name?.toUpperCase()}`} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleClickMenu}>
                {settingsMenu?.map((setting, index) => (
                  <MenuItem key={index} onClick={() => handleClickMenu(setting?.name)}>
                    <Typography textAlign="center">{setting?.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <StyledTypography
                sx={{ fontSize: "12px", ml: 8, fontWeight: "bold", letterSpacing: "2px" }}>
                {"Admin"}
              </StyledTypography>
              <IconButton>{/* <MoreVertIcon sx={{ color: "black" }} /> */}</IconButton>
            </Box>
          </Toolbar>
        </Container>
        {!urlPath?.includes("employee") ? (
          <Box
            sx={{
              height: "64px",
              backgroundColor: "#3cbfae",
              width: "100%"
            }}>
            <StyledTypography variant="h5" color="#fff" pt="15px" ml="20px">
              You're managing <b>All Roles</b>
            </StyledTypography>
          </Box>
        ) : (
          ""
        )}
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
