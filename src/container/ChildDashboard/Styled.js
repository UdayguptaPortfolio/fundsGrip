import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid black;
  padding: 25px;
`;

export const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDialog = styled(Dialog)`
  height: 100%;
  position: absolute;
  left: 775px;
`;
