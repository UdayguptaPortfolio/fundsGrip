import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(
  {},
  ({
    bgcolor,
    radius,
    minWidth,
    mr,
    color,
    border,
    mt,
    ml,
    mb,
    padding,
    fontSize,
    fontWeight
  }) => ({
    backgroundColor: `${bgcolor || "#3CBFAE"}`,
    borderRadius: `${radius || 32}px`,
    minWidth: `${minWidth || null}`,
    marginRight: `${mr || 0}px`,
    marginBottom: `${mb || 0}px`,
    marginLeft: `${ml || 0}px`,
    color: `${color || "#fff"}`,
    border: `${border || "#fff"}`,
    fontSize: `${fontSize}`,
    fontWeight: `${fontWeight}`,
    maxWidth: "200px",
    padding: `${padding}`,
    marginTop: `${mt || "0px"}`,
    whiteSpace: "nowrap",
    width: "auto",
    "&:hover": {
      backgroundColor: `${bgcolor || "#3CBFAE"}`
    }
  })
);

export const Section = styled.div``;

export const Paragraph = styled.p(
  ({ fontSize, color, fontWeight, lineheight, mt, mb, wordBreak, padding, textTransfrom }) => `  
  font-size: ${fontSize || 12}px !important;
  color: ${color || "#000"} !important;
  font-weight: ${fontWeight || 100};
  line-height: ${lineheight || ""}px;
  margin-top:${mt}px;
  margin-bottom:${mb}px;
  word-break:${wordBreak};
  padding:${padding};
  text-transform:${textTransfrom};
  span {
  color: #006fc2; 
  &:hover{
    color:#004578;
    cursor:pointer;
    text-decoration-line:underline;
  }
}`
);
