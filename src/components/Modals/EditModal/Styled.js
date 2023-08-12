import styled from "@emotion/styled";
import {
  FormGroup,
  DialogTitle,
  InputLabel,
  TextField,
  Button,
  IconButton,
  Typography,
  Grid,
  DialogContent,
  Dialog
} from "@mui/material";

export const DefaultFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: "f0f0f0";
`;

export const StyledTitle = styled(DialogTitle)`
  text-transform: uppercase;
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : null)};
  margin-top: ${(props) => (props.mt ? props.mt : null)};
  margin-left: ${(props) => (props.mt ? props.mt : null)};
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

export const TextFieldStyledInput = styled(StyledInput)`
  width: 236px;
  .MuiInputBase-formControl{
    height:auto;
  }
}
`;

// export const StyledButton = styled(Button)`
//   border: 1px solid green;
//   color: green;
//   background-color: #fff;
//   border-radius: 20px;
//   font-size: 11px;
//   padding: 10px 25px;
//   min-width: 115px;
//   max-height: 30px;
//   border: 1px solid red;
//   color: red;
// `;

export const StyledButton = styled(Button)(
  (props) => `
  // border : ${props?.isfirst === "first" ? "1px solid #ff6c00" : "1px solid #d50058"};
  ${props.isfirst && `border: 1px solid #ff6c00`};
  ${props.isSecond && `border: 1px solid #d50058`};
  ${props.isThird && `border: 1px solid #81bc00`};
  ${props.isFourth && `border: 1px solid #151515`};
  background-color: #fff;
  border-radius: 20px;
  font-size: 11px;
  padding: 10px 25px;
  min-width: 115px;
  max-height: 30px;
  font-weight: bold;
    ${props.isfirst && `color: #ff6c00`};
    ${props.isSecond && `color: #d50058`};
    ${props.isThird && `color: #81bc00`};
    ${props.isFourth && `color: #151515`};
  // color : ${props?.isfirst === "first" ? "#ff6c00" : "#d50058"};
`
);

export const EditModalIconButton = styled(IconButton)`
  position: absolute;
  right: 0px;
  margin-right: 15px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgb(0, 0, 0, 0.8);
`;

export const StyledDialogContent = styled(DialogContent)`
  overflow-y: initial !important;
`;

export const StyleGrid = styled(Grid)`
  display: flex;
  gap: 32px;
  margin-left: 35px;
`;

export const LinkButton = styled(Button)`
  color: black;
`;

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  height: "0%",
  position: "absolute",
  left: "50%",
  zIndex: "0 !important",
  [theme.breakpoints.down("md")]: {
    left: "0%"
  },
  [theme.breakpoints.down("sm")]: {
    left: "0%"
  }
}));
