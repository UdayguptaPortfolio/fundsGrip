import {
  StyledDialogActions,
  StyledDialog,
  StyleDialogTitle,
  StyledTypography,
  StyledButton
} from "./Styled";

const ConfirmationModal = ({ handleModal, message, modalFor, title }) => {
  return (
    <StyledDialog
      open={true}
      onClose={() => handleModal("Close")}
      aria-labelledby="responsive-dialog-title">
      <StyleDialogTitle id="responsive-dialog-title">{title}</StyleDialogTitle>
      <StyledTypography>{message}</StyledTypography>
      <StyledDialogActions>
        <StyledButton
          onClick={() => {
            handleModal(modalFor);
          }}>
          Yes
        </StyledButton>
        <StyledButton
          isFirst
          onClick={() => {
            handleModal("Close");
          }}>
          No
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default ConfirmationModal;
