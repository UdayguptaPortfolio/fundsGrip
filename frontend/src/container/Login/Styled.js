import styled from "@emotion/styled";
import { Grid, Box, FormGroup } from "@mui/material";
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
`;

export const StyledFormGroup = styled(FormGroup)`
  max-width: 480px;
  width: 100%;
`;

// export const StyledGridItem = styled(Grid)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 0px 70px;
// `;

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0px 70px",
  // [theme.breakpoints.down("md")]: {
  //   padding: "33px"
  // },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 50px"
  }
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: "5px 45px 35px 25px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    padding: "33px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0"
  }
}));

export const Input = styled.input(
  ({ error }) => `
border: none;
padding-left: 0px;
padding-right: 0px;
border-radius: 0px;
border-bottom: 2px solid rgba(28, 40, 44, 0.2);
font-size: 1.75em;
font-family: "Nobel-Light";
color: #151515;
margin-bottom: ${error ? "5px" : "40px"};
display: block;
width: 100%;
height: calc(1.5em + 0.75rem + 2px);
font-weight: 400;
line-height: 1.5;
border-bottom: 3px solid ${error ? "red" : "#3cbfae"};
:focus {
  outline: none;
  box-shadow: 0 0 0 red;
}
:placeholder {
  display: none !important
}
::-webkit-input-placeholder {
  opacity : 0.5;
}
`
);

export const ForgottenTypography = styled(StyledTypography)(({ theme }) => ({
  width: "35%",
  borderBottom: "3px solid black",
  borderColor: "#3cbfae",
  [theme.breakpoints.down("md")]: {
    width: "30%"
  },
  [theme.breakpoints.down("sm")]: {
    width: "45%"
  }
}));

export const LoginTypography = styled(StyledTypography)`
  border-bottom: 3px solid black;
  width: fit-content;
  border-color: #ff6c04;
`;

export const StyleDiv = styled.div`
  position: relative;
`;

export const ShowImage = styled.img`
  svg {
    fill: #ff6c00;
  }
`;

export const IconButton = styled.span`
  position: absolute;
  top: 18px;
  color: #ff6c00;
  font-family: "Nobel-book";
  cursor: pointer;
  right: 45px;
  display: flex;
  align-items: center;
  font-size: 11px;
`;
