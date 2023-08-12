import {
  StyledDialogActions,
  StyledDialog,
  StyleDialogTitle,
  StyledTypography,
  StyledButton
} from "./Styled";

const InfoDataModal = ({ handleModal, message, title }) => {
  return (
    <StyledDialog
      open={true}
      onClose={() => handleModal("Close")}
      aria-labelledby="responsive-dialog-title">
      <StyleDialogTitle id="responsive-dialog-title">{title}</StyleDialogTitle>
      <StyledTypography>{message}</StyledTypography>
      <StyledDialogActions>
        <StyledButton
          isFirst
          onClick={() => {
            handleModal("Close");
          }}>
          Close
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default InfoDataModal;
