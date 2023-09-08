import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledTypography = styled(Typography)`
  color: ${(props) => (props.color ? props.color : "black")};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : null)};
  margin-top: ${(props) => (props.mt ? props.mt : null)};
  margin-bottom: ${(props) => (props.mb ? props.mb : null)};
  margin-left: ${(props) => (props.ml ? props.ml : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  padding-top: ${(props) => (props.pt ? props.pt : null)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : null)};
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
  text-overflow: ${(props) => (props.textOverflow ? props.textOverflow : null)};
`;
