import styled from "@emotion/styled";
import { TableBody, TableRow, TableCell, TableHead, TableContainer } from "@mui/material";

export const StyledTableBody = styled(TableBody)`
  &:hover {
    /* background-color: red; */
  }
`;

export const StyledTableRow = styled(TableRow)`
  border-bottom: 1px solid black;
  box-shadow: 0 0px 0px 0 #e9ecef;
`;

export const StyledTableCell = styled(TableCell)`
  border-bottom: none;
  .MuiTypography-body1 {
    white-space: nowrap;
  }
`;

export const StyledFlexTableCell = styled(StyledTableCell)`
  display: flex;
  gap: 10px;
`;

export const StyledTableHead = styled(TableHead)`
  background-color: #fff;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const StyledTableContainer = styled(TableContainer)`
  height: 75vh;
  overflow: auto;
`;
