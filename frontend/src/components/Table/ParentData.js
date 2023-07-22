import React, { useState } from "react";
import "./style.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Checkbox,
  TablePagination,
  Box
} from "@mui/material";
import { ParentTableHeadData } from "./Data";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";

const ParentDataTable = ({ selectedValue, setSelectedValue, versionData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleChecked = (index, data) => {
    if (!selectedValue.includes(data)) {
      setSelectedValue((result) => [...result, data]);
    } else {
      setSelectedValue(selectedValue.filter((item) => item.id !== data.id));
    }
  };
  return (
    <>
      <LoadingBackdrop open={false} />
      <TableContainer sx={{ height: "40vh" }}>
        {versionData?.length ? (
          <>
            {" "}
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#fff", height: "80px" }}>
                <TableRow sx={{ alignItems: "center" }}>
                  {ParentTableHeadData &&
                    ParentTableHeadData?.map((item) => {
                      return (
                        <TableCell key={item.id} align="left" sx={{ color: "#608f99" }}>
                          {item.label}
                        </TableCell>
                      );
                    })}
                </TableRow>
              </TableHead>
              <TableBody>
                {versionData?.map((item, index) => {
                  return (
                    <TableRow key={item?.id} sx={{ borderBottom: "1px solid black" }}>
                      <TableCell
                        sx={{ display: "flex", alignItems: "center", borderBottom: "none" }}
                        align="left">
                        <Checkbox
                          color="primary"
                          checked={selectedValue.includes(item)}
                          onChange={() => handleChecked(index, item)}
                        />
                        <Typography>{item?.id}</Typography>
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: "none" }}>
                        <Typography>{item?.attributes?.parent_name}</Typography>
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: "none" }}>
                        <Typography>{item?.attributes?.country}</Typography>
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: "none" }}>
                        <Typography>{item?.attributes?.tax_rate_in_percentage + "%"}</Typography>
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: "none" }}>
                        <Typography>{item?.attributes?.currency}</Typography>
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: "none" }}>
                        <Typography>{"/" + item?.attributes?.domain_extension}</Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderBottom: "none", textTransform: "uppercase" }}>
                        <Typography>{item?.attributes?.parent_abbreviation}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        ) : (
          <>
            <Box p={2}>
              <Typography align="center">No results found</Typography>
            </Box>
          </>
        )}
      </TableContainer>
      {versionData?.length ? (
        <TablePagination
          sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}
          component="div"
          count={1 * 10}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ParentDataTable;
