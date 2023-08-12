import styled from "@emotion/styled";
import { Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  padding: "40px !important",
  ".MuiDialog-paperFullWidth": {
    alignItems: "center",
    padding: "20px"
  },
  ".MuiDialog-paper": {
    padding: "20px",
    width: "100%"
  },
  ".MuiDialog-container": {
    background: "none"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px 15px 15px !important"
  }
}));

export const StyleDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: "#2bb0b1",
  display: "flex",
  justifyContent: "center",
  letterSpacing: "4px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "0px",
    fontSize: "15px"
  }
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontFamily: "cursive !important",
  color: "black",
  fontWeight: "100",
  marginBottom: "20px",
  marginTop: "25px",
  letterSpacing: "3px",
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "0px"
  }
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: "center",
  gap: "50px",
  [theme.breakpoints.down("sm")]: {
    gap: "0px"
  }
}));

export const StyledButton = styled(Button)(
  (props) => `
  border: 1px solid grey;
     color: grey;
     background-color: #fff;
     border-radius: 20px;
     font-size: 11px;
     padding: 10px 25px;
     min-width: 115px;
     max-height: 30px;
     color: ${props?.isFirst ? "#d50058" : "#81bc00"};
     border: ${props?.isFirst ? "1px solid #d50058" : "1px solid #81bc00"};
`
);
