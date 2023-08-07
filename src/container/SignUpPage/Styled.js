import styled from "@emotion/styled";
import { Box, InputLabel, Input, Typography } from "@mui/material";

export const ImgHeader = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 82px;
  &:before {
    content: "";
    background: url(https://pirkx.com.au/assets/release4/login_header_lgt_bg.png) no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    height: 25%;
    background-size: contain;
    width: 23%;
    z-index: -1;
  }
  &:after {
    content: "";
    background: url(https://pirkx.com.au/assets/release4/login_header_rgt_bg.png) no-repeat !important;
    position: absolute;
    background-size: cover;
    /* bottom: 0; */
    content: "";
    height: 52.8%;
    right: 0;
    width: 20.5%;
    z-index: 1;
    top: 25%;
  }
`;

export const StyledTypographyName = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  letterSpacing: "2.5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    letterSpacing: "8px",
    padding: "25px"
  }
}));

export const WhiteBox = styled(Box)`
  max-width: 940px;
  padding: 100px 0px 0px;
  text-align: center;
  margin: 0 auto;
  min-height: 383px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadContent = styled.section`
  background: #f1f1f1;
  padding-bottom: 90px;
  position: relative;
`;

export const StyledContent = styled.div`
  position: relative;
  /* max-width: 1480px; */
  margin: 0 100px 0;
  box-shadow: 0 20px 30px 0 rgb(28 40 44 / 20%);
  background-color: #fff;
  padding: 65px;
  width: 100%;
  z-index: 2;
  /* margin-top: -150px; */
`;

export const StyledLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "1.25em",
  fontFamily: "Nobel-book",
  letterSpacing: "5.25px",
  color: "#151515",
  textTransform: "uppercase",
  margin: "20px 0px",
  whiteSpace: "normal !important",
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "2px"
  }
}));

export const StyledDivInput = styled.div`
  width: 100% !important;
`;

export const StyledInput = styled(Input)`
  border: none;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 0px;
  font-size: 1.75em;
  font-family: "Nobel-Light";
  text-transform: capitalize;
  color: #151515;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-weight: 400;
  line-height: 1.5;
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 red;
  }
  &:hover {
    outline: none;
  }
  &:before {
    outline: none;
  }
  &:after {
    outline: none;
  }
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }
`;

export const FormButton = styled.button(
  ({ signIn, disabled }) => `
display: inline-block;
vertical-align: middle;
text-align: center;
font-family: "Nobel-Bold";
text-transform: uppercase;
font-size: 11px;
border-radius: 30px;
letter-spacing: 3.3px;
width: ${signIn ? "20%" : "10%"};
min-width: 115px;
padding: 10px 25px;
border: 1px solid transparent;
line-height: normal;
transition: all 0.3s ease-in-out;
outline: none;
background: ${disabled ? "grey" : "#3cbfae"};
border: 1px solid #3cbfae;
color: #fff;
transition: all 0.2s ease-in-out;
&:hover {
  background: transparent;
  color: #4a4f55;
}

`
);

export const FormButtonContainer = styled.div`
  text-align: right;
  margin-left: 20px;
  display: flex;
  gap: 20px;
  justify-content: end;
  padding-top: 20px;
  width: 100%;
`;

export const FormControlDiv = styled.div`
  position: relative;
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
  top: 24px;
  color: #ff6c00;
  font-family: "Nobel-book";
  cursor: pointer;
  right: 40px;
  display: flex;
  align-items: center;
  font-size: 11px;
`;
