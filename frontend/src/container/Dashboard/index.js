import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IconButton, Box, Grid } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ConfirmationModal from "../../components/Modals/ConfirmationModal/index";
import AuthLayout from "../../components/AuthLayout";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import SelectDropdown from "../../components/Dropdown/SelectDropdown";
import { StyledDiv, StyledDialog, StyledTableBox, StyledGrid, StyledInput } from "./Styled";
import AddNewAdmin from "../../components/Modals/AddNewAdmin";
import EditModal from "../../components/Modals/EditModal";
import DataTable from "../../components/Table";
import { useExportPatronsMutation } from "../../redux/slices/manageMasterAdmin/exportPatronsApiSlice";
import { useInviteMasterAdminMutation } from "../../redux/slices/manageMasterAdmin/inviteMasterAdminApiSlice";
import { exportsMenus, actionMenu } from "../constant";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import {
  useBlockPatronMutation,
  useResetPasswordByAdminMutation,
  useDeleteBulkPatronMutation
} from "../../redux/slices/manageMasterAdmin/patronsOperationsApiSlice";
import { useSearchDataMutation } from "../../redux/slices/manageMasterAdmin/searchDataApiSlice";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [openModal, setOpenModal] = useState({
    openAddModal: false,
    openEditModal: false,
    confirmationModalReset: false,
    confirmationModalBlockAdmin: false,
    confirmationModalUnblockAdmin: false,
    confirmationModalDeleteAdmin: false,
    selectedDataIds: [],
    initialStatus: selectedValue[0]?.attributes?.status
  });
  const [inviteAdminData, setInviteAdminData] = useState({});
  // const [inviteMasterAdmin, { isLoading, data }] = useInviteMasterAdminMutation();
  // const [resetPasswordByAdmin, { data: resetpasswordData, isLoading: resPwdLoading }] =
  //   useResetPasswordByAdminMutation();
  // const [blockPatron, { data: blockPatronData, isLoading: blockPatronLoading }] =
  //   useBlockPatronMutation();
  // const [deleteBulkPatron, { data: delPatrondata, isoading: delPatronLoading }] =
  //   useDeleteBulkPatronMutation();
  // const [exportPatrons, { data: exportPatrondata, isoading: exportPatronLoading }] =
  //   useExportPatronsMutation();
  // const [searchData, { data: searchPatrondata, isoading: searchPatronLoading }] =
  //   useSearchDataMutation();

  // useEffect(() => {
  //   let ids = [];
  //   selectedValue?.map((item) => ids.push(parseInt(item?.id)));
  //   setOpenModal((prevState) => ({
  //     ...prevState,
  //     selectedDataIds: ids
  //   }));
  // }, [selectedValue]);

  // useEffect(() => {
  //   if (data?.status === 200) {
  //     toast.success(data?.message);
  //     handleCloseModal();
  //   } else {
  //     toast.error(data?.message);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (resetpasswordData?.status === 200) {
  //     toast.success(resetpasswordData?.message);
  //   } else {
  //     toast.error(resetpasswordData?.message);
  //   }
  // }, [resetpasswordData]);

  // useEffect(() => {
  //   if (blockPatronData?.status === 200) {
  //     toast.success(blockPatronData?.message);
  //   } else {
  //     toast.error(blockPatronData?.message);
  //   }
  // }, [blockPatronData]);

  // useEffect(() => {
  //   if (delPatrondata?.status === 200) {
  //     toast.success(delPatrondata?.message);
  //   } else {
  //     toast.error(delPatrondata?.message);
  //   }
  // }, [delPatrondata]);

  // useEffect(() => {
  //   if (exportPatrondata?.status === 200) {
  //     toast.success(exportPatrondata?.message);
  //     exportPatrondata?.download_url && window.open(exportPatrondata?.download_url);
  //   } else {
  //     toast.error(exportPatrondata?.message);
  //   }
  // }, [exportPatrondata]);

  const handleCloseModal = (type) => {
    if (type === "Edit") {
      setOpenModal((prevState) => ({
        ...prevState,
        openEditModal: false
      }));
    } else {
      setOpenModal((prevState) => ({
        ...prevState,
        openAddModal: false
      }));
    }
    setInviteAdminData((prevState) => ({
      ...prevState,
      invitation_for: "none"
    }));
    setSelectedValue([]);
  };

  const handleClickAddUser = () => {
    setOpenModal((prevState) => ({
      ...prevState,
      openAddModal: true
    }));
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

  const handleClickEditUser = (type) => {
    if (selectedValue?.length) {
      if (selectedValue?.length > 1) {
        if (type === "Block") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalBlockAdmin: true
          }));
        } else if (type === "Unblock") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalUnblockAdmin: true
          }));
        } else if (type === "Delete Admin") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalDeleteAdmin: true
          }));
        } else {
          toast.error("Please Select only one data");
        }
      } else {
        if (type === "Edit") {
          setOpenModal((prevState) => ({
            ...prevState,
            openEditModal: true
          }));
        } else if (type === "Reset") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalReset: true
          }));
        } else if (type === "Block") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalBlockAdmin: true
          }));
        } else if (type === "Unblock") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalUnblockAdmin: true
          }));
        } else if (type === "Delete Admin") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalDeleteAdmin: true
          }));
        }
      }
    } else {
      toast.error("Please Select the data");
      setSelectedValue([]);
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
    let payload = {
      account: "473995949136",
      invitation: {
        ...inviteAdminData
      }
    };
    // inviteMasterAdmin(payload);
  };

  const handleModal = (type) => {
    if (type === "Reset") {
      let payload = {
        id: selectedValue[0]?.id
      };
      // resetPasswordByAdmin(payload);
    } else if (type === "Block") {
      let payload = {
        ids: openModal?.selectedDataIds,
        blocked: true
      };
      // blockPatron(payload);
    } else if (type === "Unblock") {
      let payload = {
        ids: openModal?.selectedDataIds,
        blocked: false
      };
      // blockPatron(payload);
    } else if (type === "Delete admin") {
      let payload = {
        ids: openModal?.selectedDataIds
      };
      // deleteBulkPatron(payload);
    }
    setOpenModal((prevState) => ({
      ...prevState,
      confirmationModalReset: false,
      confirmationModalBlockAdmin: false,
      confirmationModalUnblockAdmin: false,
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
      <LoadingBackdrop
        open={
          false
          // isLoading ||
          // resPwdLoading ||
          // blockPatronLoading ||
          // delPatronLoading ||
          // exportPatronLoading ||
          // searchPatronLoading
        }
      />
      <AuthLayout>
        <StyledDiv>
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
              Add and manage admin roles
            </StyledTypography>
          </div>
          <StyledButton mt="30px" ml={10} mb={10} onClick={handleClickAddUser}>
            CREATE NEW ADMIN
          </StyledButton>
        </StyledDiv>
        {/* Filter and table */}
        <Box sx={{ backgroundColor: "#f0f0f0" }}>
          <Grid container mt={25}>
            <Grid
              item
              sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
              lg={3}
              md={4}
              sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", ml: 40 }}>
                <StyledTypography mr="10px" fontSize="18px" color="gray">
                  Actions
                </StyledTypography>
                <SelectDropdown names={actionMenu} handleClickEditUser={handleClickEditUser} />
              </Box>
            </Grid>
            <StyledGrid lg={3} md={4} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", ml: 40 }}>
                <StyledTypography mr="10px" fontSize="18px" color="gray" ml="0px">
                  Export
                </StyledTypography>
                <SelectDropdown names={exportsMenus} handleClickEditUser={exportData} />
              </Box>
            </StyledGrid>
            <Grid lg={6} md={4} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", width: "80%" }}>
                <StyledInput
                  onChange={handleSearchChange}
                  id="outlined-adornment"
                  placeholder="search"
                  endAdornment={<IconButton>{<SearchOutlinedIcon />}</IconButton>}
                />
              </Box>
            </Grid>
          </Grid>
          <StyledTableBox margin="25px" background="#f8f4f4" padding="50px 50px">
            {/* <DataTable
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              setOpenModal={setOpenModal}
            /> */}
          </StyledTableBox>
        </Box>
      </AuthLayout>
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
        <StyledDialog open={openModal?.openEditModal} onClose={handleCloseModal} maxWidth="lg">
          <EditModal handleCloseModal={handleCloseModal} selectedValue={selectedValue} />
        </StyledDialog>
      </div>
      <StyledDialog open={openModal?.confirmationModalReset} onClose={() => handleModal("Close")}>
        <ConfirmationModal
          handleModal={handleModal}
          message={`Do you really want to Reset the password of ${
            selectedValue[0]?.attributes?.name?.split(" ")[0]
          } ${selectedValue[0]?.attributes?.name?.split(" ")[1]}?`}
          modalFor={"Reset"}
          title={"RESET ADMIN"}
        />
      </StyledDialog>
      <StyledDialog
        open={openModal?.confirmationModalBlockAdmin}
        onClose={() => handleModal("Close")}>
        <ConfirmationModal
          handleModal={handleModal}
          message={`Do you really want to Block the selected admin?.`}
          modalFor={"Block"}
          title={"BLOCK ADMIN"}
        />
      </StyledDialog>
      <StyledDialog
        open={openModal?.confirmationModalUnblockAdmin}
        onClose={() => handleModal("Close")}>
        <ConfirmationModal
          handleModal={handleModal}
          message={`Do you really want to UnBlock the selected admin?.`}
          modalFor={"Unblock"}
          title={"UNBLOCK ADMIN"}
        />
      </StyledDialog>
      <StyledDialog
        open={openModal?.confirmationModalDeleteAdmin}
        onClose={() => handleModal("Close")}>
        <ConfirmationModal
          handleModal={handleModal}
          message={`Do you really want to Delete the selected admins?.`}
          modalFor={"Delete admin"}
          title={"DELETE ADMIN"}
        />
      </StyledDialog>
    </>
  );
};

export default Dashboard;
