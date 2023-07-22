import { DialogContent } from "@material-ui/core";
import { Radio } from "@mui/material";

import {
  StyledDialogActions,
  SessionTimeOutButton,
  StyledDialog,
  StyledTypography,
  StyleDialogTitle
} from "../Styled";

const SessionTimeOutModal = ({ handleModal }) => {
  return (
    <StyledDialog open={true} maxWidth="sm" fullWidth>
      <StyleDialogTitle>STAY SIGNED IN ?</StyleDialogTitle>
      <DialogContent>
        <StyledTypography variant="h5">
          Do this to reduce the number of times you are asked to sign in. And only if this is a
          trusted device.
        </StyledTypography>
      </DialogContent>
      <DialogContent>
        <StyledTypography variant="h5">{<Radio />}Do not show this message again</StyledTypography>
      </DialogContent>
      <StyledDialogActions>
        <SessionTimeOutButton color="primary" variant="contained" onClick={() => handleModal("No")}>
          No
        </SessionTimeOutButton>
        <SessionTimeOutButton
          color="secondary"
          variant="contained"
          isColor
          onClick={() => handleModal("Yes")}>
          Yes
        </SessionTimeOutButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default SessionTimeOutModal;
