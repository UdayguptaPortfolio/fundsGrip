import React, { useEffect, useState } from "react";
import {
  Table,
  Typography,
  TableRow,
  TableCell,
  TablePagination,
  Box,
  Grid,
  Tooltip
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useSelector, useDispatch } from "react-redux";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import moment from "moment/moment";
import {
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledTableHead,
  StyledTableContainer,
  StyledFlexTableCell
} from "../../components/Table/Styled";
import { EmployeeTableheadData, employeeTableBodyData } from "../../components/Table/Data";

const EmployeeTable = ({ selectedValue, setSelectedValue, setOpenModal, handleAction }) => {
  const { data = [], total_page_count = 0 } = useSelector(
    (state) => state?.getPatronState?.patronsData
  );
  const [MyArray, setMyArray] = useState(employeeTableBodyData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleSelectedRow = (index, data, type) => {
    type === "onClick"
      ? setOpenModal((prevState) => ({
          ...prevState,
          openEditModal: true
        }))
      : setOpenModal((prevState) => ({
          ...prevState,
          openEditModal: false
        }));
    if (!selectedValue.includes(data)) {
      setSelectedValue((result) => [...result, data]);
    } else {
      setSelectedValue(selectedValue.filter((item) => item.id !== data.id));
    }
  };
  const checkBg = (item, index) => {
    if (selectedValue) {
      return selectedValue.some((el) => el?.id === item?.id);
    }
    return false;
  };

  const handleStatus = (status) => {
    let color;
    if (status === "Pending") {
      color = "#ffc107";
    } else if (status === "live") {
      color = "green";
    } else if (status === "blocked") {
      color = "red";
    } else {
      color = "brown";
    }
    return (
      <Typography sx={{ color: color, textTransform: "capitalize" }}>
        {status ? status : "-"}
      </Typography>
    );
  };

  const dateFormat = (date) => {
    let newDate = moment(date).format("DD/MM/YYYY - HH:mm");
    return newDate.split("-").join("at");
  };

  const sortAscending = () => {
    const colData = [...data];
    colData.sort((a, b) => a.id - b.id);
    // colData.sort((a, b) => a.name > b.name);
    setMyArray(colData);
  };

  const sortDescending = () => {
    const colData = [...data];
    colData.sort((a, b) => b.id - a.id);
    // colData.sort((a, b) => a.name > b.name);
    setMyArray(colData);
  };
  return (
    <>
      <LoadingBackdrop open={false} />
      <StyledTableContainer>
        {MyArray?.length ? (
          <>
            {" "}
            <Table aria-label="simple table">
              <StyledTableHead>
                <TableRow sx={{ alignItems: "center" }}>
                  {EmployeeTableheadData &&
                    EmployeeTableheadData?.map((item) => {
                      return (
                        <TableCell
                          key={item.id}
                          align="left"
                          sx={{
                            color: "#608f99"
                          }}>
                          <Grid
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "20px"
                            }}>
                            {item.label}
                          </Grid>
                        </TableCell>
                      );
                    })}
                </TableRow>
              </StyledTableHead>
              <StyledTableBody className="hover">
                {MyArray?.map((item, index) => {
                  const { name, email, pan_number, phone_number, city, uidai } = item || {};
                  return (
                    <StyledTableRow
                      key={item?.id}
                      sx={{
                        backgroundColor: checkBg(item, index) ? "#FFFFFF" : "",
                        cursor: "pointer"
                      }}
                      onClick={() => handleSelectedRow(index, item, "onClick")}>
                      <StyledTableCell>
                        <Typography>{pan_number}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography>{email}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography>{name}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography>{phone_number}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography>{city}</Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography>{uidai}</Typography>
                      </StyledTableCell>
                      <StyledFlexTableCell>
                        <Tooltip title="View">
                          <BorderColorOutlinedIcon
                            htmlColor="grey"
                            handleAction={(e) => handleAction(e, "View")}
                          />
                        </Tooltip>
                        {/* <Tooltip title="Export">
                          <FileDownloadOutlinedIcon
                            htmlColor="blue"
                            handleAction={(e) => handleAction(e, "Export")}
                          />
                        </Tooltip> */}
                      </StyledFlexTableCell>
                    </StyledTableRow>
                  );
                })}
              </StyledTableBody>
            </Table>
          </>
        ) : (
          <>
            <Box p={2}>
              <Typography align="center">No results found</Typography>
            </Box>
          </>
        )}
      </StyledTableContainer>
      {data?.length ? (
        <TablePagination
          sx={{ justifyContent: "center", display: "flex", alignItems: "center" }}
          component="div"
          count={total_page_count}
          rowsPerPageOptions={[
            50,
            100,
            200,
            { value: data.length > 0 ? data.length : 1, label: "All" }
          ]}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage === "All" ? data?.length : rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EmployeeTable;
