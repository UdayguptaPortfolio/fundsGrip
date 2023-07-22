import styled from "@emotion/styled";
import { Grid, Box, Typography, Link } from "@mui/material";
// import { StyledTypography } from "../../exports/StyledTypography";
import { StyledTypography } from "../../components/Common/StyledTypography";

export const ImgHeader = styled(Box)`
  width: 100%;
  object-fit: cover;
  height: 600px;
  background: url(https://pirkx.com.au/assets/release4/login_bnr.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  position: relative;
  min-height: 100vh;
  &:before {
    content: "";
    background: url(https://pirkx.com.au/assets/release4/login_header_lgt_bg.png) no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    height: 64.3%;
    background-size: contain;
    width: 24.3%;
  }
  &:after {
    content: "";
    background: url(https://pirkx.com.au/assets/release4/login_header_rgt_bg.png) no-repeat !important;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 20%;
    width: 53.5%;
    background-size: cover !important;
  }
`;

export const StyledGrid = styled(Grid)`
  margin-top: 82px;
  .req_code_input {
    width: 45%;
    font-size: 15px;
    ::placeholder {
      color: #ff6c00;
    }
  }
`;

export const StyledGridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 70px;
`;

export const StyledBox = styled(Box)`
  padding: 55px;
  width: 100%;
`;

export const StyledLink = styled(Link)({}, ({ bgcolor, color }) => ({
  // color: `${color || "#ff6c00"}`,
  // "&:hover": {
  //   color: `${bgcolor || "#ff6c00"}`
  // }
}));

export const Input = styled.input`
  border: none;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 0px;
  border-bottom: 2px solid rgba(28, 40, 44, 0.2);
  font-size: 1.75em;
  font-family: "Nobel-Light";
  color: #151515;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-weight: 400;
  line-height: 1.5;
  border-bottom: 3px solid #3cbfae;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 red;
  }
`;

export const StyledFormHeadingCode = styled(StyledTypography)(({ theme }) => ({
  borderBottom: "3px solid black",
  width: "fit-content",
  borderColor: "#ff6c04",
  marginBottom: "35px",
  [theme.breakpoints.down("md")]: {
    width: "60%"
  },
  [theme.breakpoints.down("sm")]: {
    width: "55"
  }
}));
