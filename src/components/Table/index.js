import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Table,
  Typography,
  TableRow,
  TableCell,
  Checkbox,
  TablePagination,
  Box,
  Grid,
  Tooltip
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import {
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledTableHead,
  StyledTableContainer,
  StyledFlexTableCell
} from "./Styled.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TableheadData, tableBodyData } from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { useGetPatronsQuery } from "../../redux/slices/manageMasterAdmin/getPatronsApiSlice";
import { getPatronSliceAction } from "../../redux/slices";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { Delete } from "@mui/icons-material";
import { StyledDialog } from "../Modals/Styled";
import InfoDataModal from "../Modals/InfoData";

const DataTable = ({ selectedValue, setSelectedValue, setOpenModal }) => {
  const { data = [], total_page_count = 0 } = useSelector(
    (state) => state?.getPatronState?.patronsData
  );
  const [MyArray, setMyArray] = useState(tableBodyData);
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
  const handleChecked = (index, data, type) => {
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
                  {TableheadData &&
                    TableheadData?.map((item) => {
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
                  const { name, email, pan_number, status, phone_number, city, profession, query } =
                    item || {};
                  return (
                    <StyledTableRow
                      key={item?.id}
                      sx={{
                        backgroundColor: checkBg(item, index) ? "#FFFFFF" : "",
                        cursor: "pointer"
                      }}
                      onClick={() => handleChecked(index, item, "onClick")}>
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
                        <Typography>{profession}</Typography>
                      </StyledTableCell>
                      <StyledFlexTableCell>
                        <Tooltip title="Delete">
                          <DeleteOutlineIcon htmlColor="red" />
                        </Tooltip>
                        <Tooltip title="Export">
                          <FileDownloadOutlinedIcon htmlColor="blue" />
                        </Tooltip>
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

export default DataTable;
