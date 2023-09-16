import styled from "@emotion/styled";
import { Dialog } from "@material-ui/core";
import {
  FormGroup,
  InputLabel,
  TextField,
  Button,
  DialogTitle,
  TextareaAutosize
} from "@mui/material";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paperFullWidth {
    align-items: center;
    padding: 24px;
    max-width: 899px;
    max-height: 768px;
    margin: 0px;
    border-radius: 8px;
    align-items: flex-start;
  }
`;

export const DefaultFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: "f0f0f0";
`;
export const StyledLabel = styled(InputLabel)`
  min-width: 140px;
`;

export const StyledInput = styled(TextField)`
  background-color: #f0f0f0;
  border: none;
  resize: vertical;

  /* Hide increment and decrement buttons */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  border: 1px solid rgba(0, 0, 0, 0.23);
  background-color: #f0f0f0;
  border-radius: 0px !important;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const CancelBtn = styled(StyledButton)`
  border: 1px solid grey;
  color: grey;
  &:hover {
    color: #ff6c00;
    border: 1px solid #ff6c00;
  }
`;

export const StyledTitle = styled(DialogTitle)`
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : null)};
  margin-top: ${(props) => (props.mt ? props.mt : null)};
  margin-bottom: ${(props) => (props.mb ? props.mb : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  word-spacing: ${(props) => (props.wordSpacing ? props.wordSpacing : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
`;

export const TaskCreationFieldWrap = styled.div`
  overflow-y: scroll;
  height: 50vh;
  padding-right: 20px;
`;
