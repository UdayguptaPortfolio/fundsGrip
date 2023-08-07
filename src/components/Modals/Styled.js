import styled from "@emotion/styled";
import { Dialog, DialogTitle } from "@material-ui/core";
import { Button, DialogActions, Typography } from "@mui/material";

export const StyledDialogActions = styled(DialogActions)`
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

export const SessionTimeOutButton = styled(Button)(
  (props) => `
    border-radius: 20px;
    width: 100px;
    background: ${props?.isColor ? "#2bb0b1" : "#dddd21"} ;
`
);
export const StyleDialogTitle = styled(DialogTitle)`
  color: #2bb0b1;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  border: 1px solid grey;
  color: grey;
  background-color: #fff;
  border-radius: 20px;
  font-size: 11px;
  padding: 10px 25px;
  min-width: 115px;
  max-height: 30px;
  &:hover {
    color: #81bc00;
    border: 1px solid #81bc00;
  }
`;

export const StyledDialog = styled(Dialog)`
  padding: 40px !important;
  .MuiDialog-paperFullWidth {
    align-items: center;
    padding: 20px;
  }
  .MuiDialog-paper {
    padding: 30px 70px 30px 70px;
  }
`;
export const StyledTypography = styled(Typography)`
  font-size: 18px;
  font-family: cursive !important;
  color: black;
  font-weight: 100;
`;
