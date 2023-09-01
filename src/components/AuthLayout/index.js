/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SideBar from "./Drawer";
import Header from "./Header";
import { Box } from "@mui/material";
// import { StyledTypography } from "../../exports/StyledTypography";
// import { MainContentWrap } from "../../exports/MainContentWrap";
import { MainContentWrap } from "../Common/MainContentWrap";
import Footer from "../../components/Layout/Footer";

const Layout = ({ children }) => {
  const urlPath = window.location.pathname;

  const style = {
    display: "flex",
    paddingTop: `${urlPath?.includes("employee") ? "0px" : "140px"}`
  };
  return (
    <>
      <Header />
      <Box sx={style}>
        <SideBar />
        <MainContentWrap>{children}</MainContentWrap>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
