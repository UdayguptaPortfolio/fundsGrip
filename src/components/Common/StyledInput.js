import styled from "@emotion/styled";
import { Input } from "@mui/material";

export const StyledInput = styled(Input)({}, ({ lineHeight }) => ({
  lineHeight: `${lineHeight || null}`,
  borderBottom: "4px solid #ff6c00",
  "&:hover": {
    borderBottom: "4px solid #ff6c00"
  },
  "&:focus": {
    outline: "none"
  },
  "&:hover:before": {
    borderBottom: "0px"
  },
  "&:hover:after": {
    borderBottom: "4px solid #ff6c00"
  }
}));
