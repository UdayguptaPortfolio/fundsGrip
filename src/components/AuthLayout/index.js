/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SideBar from "./Drawer";
import Header from "./Header";
import { Box } from "@mui/material";
// import { StyledTypography } from "../../exports/StyledTypography";
// import { MainContentWrap } from "../../exports/MainContentWrap";
import { MainContentWrap } from "../Common/MainContentWrap";
import Footer from "../../components/Layout/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <Box sx={{ marginTop: "140px", display: "flex" }}>
      <SideBar />
      <MainContentWrap>{children}</MainContentWrap>
    </Box>
    <Footer />
  </>
);

export default Layout;
