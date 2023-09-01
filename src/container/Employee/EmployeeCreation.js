import React, { useState } from "react";
import { IconButton, Box, Grid } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ConfirmationModal from "../../components/Modals/ConfirmationModal/index";
import { StyledButton } from "../../components/Common/StyledButton";
import { StyledDialog, StyledTableBox, StyledInput } from "./styled";
import AddNewAdmin from "../../components/Modals/AddNewEmployee";
import AddNewCustomer from "../../components/Modals/AddNewCustomers";
import EditModal from "../../components/Modals/EditModal";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import EmployeeTable from "./EmployeeTable";

const EmployeeCreation = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [openModal, setOpenModal] = useState({
    openAddModal: false,
    openEditModal: false,
    confirmationModalDeleteAdmin: false,
    selectedDataIds: [],
    initialStatus: selectedValue[0]?.attributes?.status
  });
  const [inviteAdminData, setInviteAdminData] = useState({});

  const handleCloseModal = (type) => {
    if (type === "Edit") {
      setOpenModal((prevState) => ({
        ...prevState,
        openEditModal: false
      }));
    } else {
      setOpenModal((prevState) => ({
        ...prevState,
        openAddModal: false,
        openAddCustomer: false
      }));
    }
    setInviteAdminData((prevState) => ({
      ...prevState,
      invitation_for: "none"
    }));
    setSelectedValue([]);
  };

  const handleClickAddUser = (type) => {
    if (type === "employee") {
      setOpenModal((prevState) => ({
        ...prevState,
        openAddModal: true
      }));
    } else if (type === "customer") {
      setOpenModal((prevState) => ({
        ...prevState,
        openAddCustomer: true
      }));
    }
  };

  // Invitation for creating admins

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInviteAdminData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // inviteMasterAdmin(payload);
  };

  const handleModal = (type) => {
    if (type === "Delete admin") {
      let payload = {
        ids: openModal?.selectedDataIds
      };
      // deleteBulkPatron(payload);
    }
    setOpenModal((prevState) => ({
      ...prevState,
      confirmationModalDeleteAdmin: false
    }));
  };

  const handleSearchChange = (e) => {
    let payload = {
      patron: {
        query_string: e.target.value
      }
    };
    // searchData(payload);
  };

  return (
    <>
      <LoadingBackdrop open={false} />
      <Box sx={{ backgroundColor: "#f0f0f0" }}>
        <Grid container mt={25} paddingRight={27}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "baseline",
              paddingLeft: "24px"
            }}>
            <StyledButton
              padding="8px 15px"
              fontWeight={600}
              mt="30px"
              onClick={() => handleClickAddUser("employee")}>
              CREATE NEW EMPLOYEE
            </StyledButton>
            <StyledInput
              onChange={handleSearchChange}
              id="outlined-adornment"
              placeholder="search"
              endAdornment={<IconButton>{<SearchOutlinedIcon />}</IconButton>}
            />
          </Box>
        </Grid>
        <StyledTableBox margin="25px" background="#f8f4f4" padding="50px 50px">
          <EmployeeTable
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setOpenModal={setOpenModal}
          />
        </StyledTableBox>
      </Box>
      <div style={{ position: "relative" }}>
        <StyledDialog open={openModal?.openAddModal} onClose={handleCloseModal} maxWidth="lg">
          <AddNewAdmin
            handleCloseModal={handleCloseModal}
            handleChange={handleChange}
            inviteAdminData={inviteAdminData}
            handleSubmit={handleSubmit}
          />
        </StyledDialog>
      </div>
      <div style={{ position: "relative" }}>
        <StyledDialog open={openModal?.openAddCustomer} onClose={handleCloseModal} maxWidth="lg">
          <AddNewCustomer
            handleCloseModal={handleCloseModal}
            handleChange={handleChange}
            inviteAdminData={inviteAdminData}
            handleSubmit={handleSubmit}
          />
        </StyledDialog>
      </div>
      <div style={{ position: "relative" }}>
        <StyledDialog open={openModal?.openEditModal} onClose={handleCloseModal} maxWidth="lg">
          <EditModal handleCloseModal={handleCloseModal} selectedValue={selectedValue} />
        </StyledDialog>
      </div>
      <StyledDialog
        open={openModal?.confirmationModalDeleteAdmin}
        onClose={() => handleModal("Close")}>
        <ConfirmationModal
          handleModal={handleModal}
          message={`Do you really want to Delete the selected employee?.`}
          modalFor={"Delete employee"}
          title={"DELETE EMPLOYEE"}
        />
      </StyledDialog>
    </>
  );
};

export default EmployeeCreation;
