import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IconButton, Box, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ConfirmationModal from "../../components/Modals/ConfirmationModal/index";
import AuthLayout from "../../components/AuthLayout";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import SelectDropdown from "../../components/Dropdown/SelectDropdown";
import { StyledDiv, StyledDialog, StyledTableBox, StyledGrid, StyledInput } from "./Styled";
import { exportsMenus, parentActionMenu } from "../constant";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import ParentDataTable from "../../components/Table/ParentData";
import ParentEditModal from "../../components/Modals/ParentEditModal";
import { useDispatch, useSelector } from "react-redux";
import ParentNewAdmin from "../../components/Modals/ParentNewAdmin";
import {
  useCreateParentVersionsMutation,
  useDeleteBulksParentVersionMutation,
  useGetParentVersionsQuery
} from "../../redux/slices/parentVersioning/parentVersioningApiSlice";
import { getParentVersioningAction } from "../../redux/slices";

const AdminScreen = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [openModal, setOpenModal] = useState({
    openAddModal: false,
    openEditModal: false,
    confirmationModalDelete: false,
    selectedDataIds: [],
    initialStatus: selectedValue[0]?.attributes?.status
  });
  const [parentVersionData, setParentVersionData] = useState({});
  const dispatch = useDispatch();
  const version = localStorage.getItem("version");
  const { data: parentVersioningData, isLoading: gettingParentVersionLoading } =
    useGetParentVersionsQuery("GetAllParentVersion", {
      skip: version
    });
  const [createParentVersions, { isLoading, data }] = useCreateParentVersionsMutation();
  const [deleteBulksParentVersion, { isLoading: deleteLoading, data: delParData }] =
    useDeleteBulksParentVersionMutation();
  const { data: versionData } = useSelector((state) => state?.getParentVersion?.parentVersion);

  useEffect(() => {
    dispatch(getParentVersioningAction.setParentVersions(parentVersioningData));
  }, [parentVersioningData]);

  useEffect(() => {
    let ids = [];
    selectedValue?.map((item) => ids.push(parseInt(item?.id)));
    setOpenModal((prevState) => ({
      ...prevState,
      selectedDataIds: ids
    }));
  }, [selectedValue]);

  useEffect(() => {
    if (data?.status === 200) {
      toast.success(data?.message);
      handleCloseModal();
    } else {
      toast.error(data?.message);
    }
  }, [data]);

  useEffect(() => {
    if (delParData?.status === 200) {
      toast.success(delParData?.message);
      handleCloseModal();
    } else {
      toast.error(delParData?.message);
    }
  }, [delParData]);

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
    setParentVersionData((prevState) => ({
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

  const handleClickEditUser = (type) => {
    if (selectedValue?.length) {
      if (selectedValue?.length > 1) {
        if (type === "Delete Parent Version") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalDelete: true
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
        } else if (type === "Delete Parent Version") {
          setOpenModal((prevState) => ({
            ...prevState,
            confirmationModalDelete: true
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
    if (name === "tax_rate_in_percentage" || name === "country_id") {
      setParentVersionData((prevState) => ({
        ...prevState,
        [name]: parseInt(value)
      }));
    } else {
      setParentVersionData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = () => {
    let payload = {
      parent_version: {
        ...parentVersionData
      }
    };
    createParentVersions(payload);
  };

  const handleModal = (type) => {
    if (type === "Delete Parent Version") {
      let payload = {
        ids: openModal?.selectedDataIds
      };
      deleteBulksParentVersion(payload);
    }
    setOpenModal((prevState) => ({
      ...prevState,
      confirmationModalDelete: false
    }));
  };

  return (
    <>
      <LoadingBackdrop open={isLoading || gettingParentVersionLoading || deleteLoading} />
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
              Add and manage a Parent version
            </StyledTypography>
          </div>
          <StyledButton mt="30px" ml={10} mb={10} onClick={handleClickAddUser}>
            CREATE NEW PARENT
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
                <SelectDropdown
                  names={parentActionMenu}
                  handleClickEditUser={handleClickEditUser}
                />
              </Box>
            </Grid>
            <StyledGrid lg={3} md={4} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", ml: 40 }}>
                <StyledTypography mr="10px" fontSize="18px" color="gray" ml="0px">
                  Export
                </StyledTypography>
                <SelectDropdown names={exportsMenus} />
              </Box>
            </StyledGrid>
            <Grid lg={6} md={4} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", width: "80%" }}>
                <StyledInput
                  id="outlined-adornment"
                  placeholder="search"
                  endAdornment={<IconButton>{<SearchOutlinedIcon />}</IconButton>}
                />
              </Box>
            </Grid>
          </Grid>
          <StyledTableBox margin="25px" background="#f8f4f4" padding="50px 50px">
            <ParentDataTable
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              versionData={versionData}
            />
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
      <div style={{ position: "relative" }}>
        <StyledDialog open={openModal?.openEditModal} onClose={handleCloseModal} maxWidth="lg">
          <ParentEditModal handleCloseModal={handleCloseModal} selectedValue={selectedValue} />
        </StyledDialog>
      </div>
      <StyledDialog open={openModal?.confirmationModalDelete} onClose={() => handleModal("Close")}>
        <ConfirmationModal
          handleModal={handleModal}
          message={`Do you really want to delete ${selectedValue[0]?.attributes?.parent_name}?.`}
          modalFor={"Delete Parent Version"}
          title={"DELETE PARENT VERSION"}
        />
      </StyledDialog>
    </>
  );
};

export default AdminScreen;
