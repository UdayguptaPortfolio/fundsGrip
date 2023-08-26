import React, { useState } from "react";
import { IconButton, Box, Grid } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AuthLayout from "../../components/AuthLayout";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import { StyledDiv, StyledTableBox, StyledInput, StyledRowDiv } from "./styled";
import DataTable from "../../components/Table";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";

const Index = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [openModal, setOpenModal] = useState({
    openAddModal: false,
    openEditModal: false,
    confirmationModalDeleteAdmin: false,
    selectedDataIds: [],
    initialStatus: selectedValue[0]?.attributes?.status
  });
  const [inviteAdminData, setInviteAdminData] = useState({});

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

  const exportData = (type) => {
    let payload = {
      patron: {
        export: {
          export_ids: type === "Selected" ? openModal?.selectedDataIds.join(",") : ""
        }
      }
    };
    // exportPatrons(payload);
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
    let payload = {
      account: "473995949136",
      invitation: {
        ...inviteAdminData
      }
    };
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
      <AuthLayout>
        {/* <StyledDiv>
          <div>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/images/arrow_boulder.png" alt="arrow_boulder" />
              <StyledTypography
                letterSpacing="5px"
                color="#3cbfae"
                fontSize="17px"
                marginLeft="12px">
                MANAGE
              </StyledTypography>
            </Box>
            <StyledTypography variant="h5" ml="10px">
              Add and manage roles
            </StyledTypography>
          </div>
          <StyledRowDiv>
            <StyledButton mt="30px" ml={10} mb={10} onClick={() => handleClickAddUser("employee")}>
              CREATE NEW EMPLOYEE
            </StyledButton>
            <StyledButton mt="30px" ml={10} mb={10} onClick={() => handleClickAddUser("customer")}>
              CREATE NEW CUSTOMERS
            </StyledButton>
          </StyledRowDiv>
        </StyledDiv> */}
        <Box sx={{ backgroundColor: "#f0f0f0" }}>
          <Grid container mt={25} paddingRight={27}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <StyledInput
                onChange={handleSearchChange}
                id="outlined-adornment"
                placeholder="search"
                endAdornment={<IconButton>{<SearchOutlinedIcon />}</IconButton>}
              />
            </Box>
          </Grid>
          <StyledTableBox margin="25px" background="#f8f4f4" padding="50px 50px">
            <DataTable
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              setOpenModal={setOpenModal}
            />
          </StyledTableBox>
        </Box>
      </AuthLayout>
      {/* <div style={{ position: "relative" }}>
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
          message={`Do you really want to Delete the selected admins?.`}
          modalFor={"Delete admin"}
          title={"DELETE ADMIN"}
        />
      </StyledDialog> */}
    </>
  );
};

export default Index;
