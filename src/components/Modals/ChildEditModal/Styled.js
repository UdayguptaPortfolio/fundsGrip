import styled from "@emotion/styled";
import { FormGroup, DialogTitle, InputLabel, TextField, Button, IconButton } from "@mui/material";

export const DefaultFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: "f0f0f0";
`;

export const StyledTitle = styled(DialogTitle)`
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : null)};
  margin-top: ${(props) => (props.mt ? props.mt : null)};
  margin-bottom: ${(props) => (props.mb ? props.mb : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  word-spacing: ${(props) => (props.wordSpacing ? props.wordSpacing : null)};
  padding-left: ${(props) => (props.pl ? props.pl : null)};
`;

export const StyledLabel = styled(InputLabel)`
  min-width: 140px;
`;

export const StyledInput = styled(TextField)`
  background-color: #f0f0f0;
  border: none;
`;

export const StyledButton = styled(Button)`
  border: 1px solid green;
  color: green;
  background-color: #fff;
  border-radius: 20px;
  font-size: 11px;
  padding: 10px 25px;
  min-width: 115px;
  max-height: 30px;
  border: 1px solid red;
  color: red;
`;

export const EditModalIconButton = styled(IconButton)`
  position: absolute;
  right: 0px;
`;
