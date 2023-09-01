import React, { useState } from "react";
import { Box } from "@mui/material";
import AuthLayout from "../../components/AuthLayout";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import { StyledDiv, StyledDialog, StyledTableBox } from "./Styled";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import ParentDataTable from "../../components/Table/ParentData";
import ParentNewAdmin from "../../components/Modals/AddNewAdmin";
import { parentTableBody } from "../../components/Table/Data";

const AdminScreen = () => {
  const [openModal, setOpenModal] = useState({
    openAddModal: false
  });
  const [adminData, setAdminData] = useState({});

  const handleCloseModal = (type) => {
    setOpenModal((prevState) => ({
      ...prevState,
      openAddModal: false
    }));
  };

  const handleClickAddUser = () => {
    setOpenModal((prevState) => ({
      ...prevState,
      openAddModal: true
    }));
  };

  // Invitation for creating admins

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    let payload = {
      parent_version: {
        ...adminData
      }
    };
    // createParentVersions(payload);
  };

  return (
    <>
      <LoadingBackdrop open={false} />
      <AuthLayout>
        <StyledDiv>
          <div>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/images/arrow_boulder.png" alt="arrow_boulder" />
              <StyledTypography letterSpacing="5px" color="#3cbfae" fontSize="17px">
                MANAGE
              </StyledTypography>
            </Box>
            <StyledTypography variant="h5" ml="10px">
              Add and manage Admins
            </StyledTypography>
          </div>
          <StyledButton mt="30px" ml={10} mb={10} onClick={handleClickAddUser}>
            CREATE NEW ADMIN
          </StyledButton>
        </StyledDiv>
        {/* Filter and table */}
        <Box sx={{ backgroundColor: "#f0f0f0" }}>
          <StyledTableBox margin="25px" background="#f8f4f4" padding="50px 50px">
            <ParentDataTable versionData={parentTableBody} />
          </StyledTableBox>
        </Box>
      </AuthLayout>
      <div style={{ position: "relative" }}>
        <StyledDialog open={openModal?.openAddModal} onClose={handleCloseModal} maxWidth="lg">
          <ParentNewAdmin
            handleCloseModal={handleCloseModal}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </StyledDialog>
      </div>
    </>
  );
};

export default AdminScreen;
