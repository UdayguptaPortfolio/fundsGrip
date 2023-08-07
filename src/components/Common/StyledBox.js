import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(
  {},
  ({ padding, theme, width, position, top, zIndex, backgroundColor }) => ({
    padding: padding ? padding : theme.spacing(5),
    width: width ? width : "80%",
    position: position ? position : null,
    top: top ? top : null,
    zIndex: zIndex ? zIndex : null,
    backgroundColor: backgroundColor ? backgroundColor : null
  })
);

export const DefaultBox = styled(StyledBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhiteBox = styled(StyledBox)`
  width: ${({ drawerWidth }) => (drawerWidth ? drawerWidth : "200px")};
`;

export const TableBox = styled(Box)`
  flex-direction: ${({ flexDirection }) => flexDirection};
  background-color: ${({ background }) => background};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? `${borderRadius}px` : theme.spacing(5)};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "rgb(0 0 0 / 9%) 12px 0px 20px 10px")};
  padding: ${({ padding, theme }) => (padding ? padding : theme.spacing(50, 90))};
  margin: ${({ margin }) => margin};
`;
