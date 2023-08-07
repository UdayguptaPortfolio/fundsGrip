import styled from "@emotion/styled";
import { Dialog, Grid, Input } from "@mui/material";
import { TableBox } from "../../components/Common/StyledBox";

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

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: "7px"
  }
}));

export const StyledInput = styled(Input)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: "47px"
  }
}));

export const StyledTableBox = styled(TableBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "0"
  }
}));

// export const StyledDialog = styled(Dialog)`
//   height: 100%;
//   position: absolute;
//   /* right: 0; */
//   left: 775px;
//   .closeBtn {
//     position: absolute;
//     right: 0px;
//   }
// `;

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  left: "50%",
  // .closeBtn {
  //   position: absolute;
  //   right: 0px;
  // }
  [theme.breakpoints.down("md")]: {
    left: "33%"
  },
  [theme.breakpoints.down("sm")]: {
    left: "0%"
  }
}));
