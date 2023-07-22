import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(
  {},
  ({ bgcolor, radius, minWidth, mr, color, border, mt, ml, mb }) => ({
    backgroundColor: `${bgcolor || "#3CBFAE"}`,
    borderRadius: `${radius || 32}px`,
    minWidth: `${minWidth || null}`,
    marginRight: `${mr || 0}px`,
    marginBottom: `${mb || 0}px`,
    marginLeft: `${ml || 0}px`,
    color: `${color || "#fff"}`,
    border: `${border || "#fff"}`,
    maxWidth: "200px",
    marginTop: `${mt || "0px"}`,
    "&:hover": {
      backgroundColor: `${bgcolor || "#3CBFAE"}`
    }
  })
);
