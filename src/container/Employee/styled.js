import styled from "@emotion/styled";
import { Dialog, Grid, Input } from "@mui/material";
import { TableBox } from "../../components/Common/StyledBox";

export const EmployeePortalWrap = styled.div`
  padding: 90px 24px 24px 24px;
  margin-bottom: 100vh;

  .emp-btns-wrap {
    padding: 24px 0px;
    display: flex;
    gap: 24px;
  }
`;

export const WorkBoardMainWrap = styled.div`
  .workstate-wrap {
    display: flex;
    gap: 12px;
  }
  .work-btn-wrap {
    width: 100%;
    background: #060763;
    max-width: 18%;
    border-radius: 12px;
    bo-shadow: var(--ds-shadow-raised, 0 1px 1px #091e4240, 0 0 1px #091e424f);
  }
`;

export const AddCardButton = styled.button`
  width: 95%;
  background: transparent;
  border: none;
  text-align: start;
  color: aliceblue;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
  &:hover {
    background: grey;
  }
`;

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

export const StyledToDoGrid = styled(Grid)`
    margin: 8px;
    background-color: white;
    border-radius: 4px;
}
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

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  left: "50%",
  [theme.breakpoints.down("md")]: {
    left: "33%"
  },
  [theme.breakpoints.down("sm")]: {
    left: "0%"
  }
}));
