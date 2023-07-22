import React, { useEffect, useState } from "react";
import { DialogContentText, DialogActions, InputAdornment } from "@mui/material";
import {
  DefaultFormGroup,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
  EditModalIconButton,
  StyledTypography,
  StyleGrid,
  LinkButton,
  StyledDialogContent,
  StyledDialog
} from "./Styled";
import ConfirmationModal from "../ConfirmationModal";
import { toast } from "react-toastify";
import {
  useDeleteSpecificParentVersionMutation,
  useUpdateParentVersionsMutation
} from "../../../redux/slices/parentVersioning/parentVersioningApiSlice";

const ParentEditModal = ({ handleCloseModal, selectedValue }) => {
  const selectedPatronData = selectedValue;
  const selectedPatronId = selectedPatronData[0]?.id;
  const [editField, setEditField] = useState({
    parent_name: selectedPatronData[0]?.attributes?.parent_name,
    tax_rate_in_percentage: Number(selectedPatronData[0]?.attributes?.tax_rate_in_percentage),
    domain_extension: selectedPatronData[0]?.attributes?.domain_extension || "",
    parent_abbreviation: selectedPatronData[0]?.attributes?.parent_abbreviation || ""
  });
  const [confirmationModal, setConfirmationModal] = useState({
    delete: false,
    edit: false
  });
  const [deleteSpecificParentVersion, { data: deleteRes }] =
    useDeleteSpecificParentVersionMutation();
  const [updateParentVersions, { data: updateRes }] = useUpdateParentVersionsMutation();

  useEffect(() => {
    updateRes?.status === 200 ? toast.success(updateRes?.message) : toast.error(updateRes?.message);
    deleteRes?.status === 200 ? toast.success(deleteRes?.message) : toast.error(deleteRes?.message);
  }, [updateRes, deleteRes]);

  const handleConfirmationModal = (type) => {
    if (type === "Delete") {
      setConfirmationModal((prevState) => ({
        ...prevState,
        delete: true
      }));
    } else {
      setConfirmationModal((prevState) => ({
        ...prevState,
        edit: true
      }));
    }
  };

  const handleModal = (type) => {
    if (type === "Delete") {
      deleteSpecificParentVersion(selectedPatronData[0]?.id);
      handleCloseModal("Edit");
      setConfirmationModal((prevState) => ({
        ...prevState,
        delete: false
      }));
    } else if (type === "Edit") {
      let id = parseInt(selectedPatronId);
      let payload = {
        parent_version: {
          ...editField
        }
      };
      updateParentVersions({ payload, id });
      handleCloseModal("Edit");
      setConfirmationModal((prevState) => ({
        ...prevState,
        edit: false
      }));
    } else {
      setConfirmationModal((prevState) => ({
        ...prevState,
        edit: false,
        delete: false
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditField((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <>
      <StyledTitle
        id="responsive-dialog-title"
        letterSpacing="8px"
        fontSize="28px"
        wordSpacing="8px"
        marginLeft="24px"
        marginBottom="50px">
        Edit Parent
      </StyledTitle>

      <StyledDialogContent sx={{ pl: "50px" }}>
        <DefaultFormGroup>
          <StyledLabel htmlFor="name">ID</StyledLabel>
          <StyledTypography>{selectedPatronData[0]?.attributes?.id}</StyledTypography>
        </DefaultFormGroup>
        <DialogContentText>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Parent Name</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="parent_name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={editField?.parent_name}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Country</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0", borderRadius: "0px", border: "none" }}
              name="country"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              disabled={true}
              value={selectedPatronData[0]?.attributes?.country}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Tax Rate</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="tax_rate_in_percentage"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              type="number"
              value={editField?.tax_rate_in_percentage}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Currency</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="currency"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              disabled={true}
              value={selectedPatronData[0]?.attributes?.currency}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Domain ext</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="domain_extension"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={editField?.domain_extension}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Parent abbr.</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="parent_abbreviation"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={editField?.parent_abbreviation}
              onChange={handleChange}
            />
          </DefaultFormGroup>
        </DialogContentText>
      </StyledDialogContent>

      <DialogActions sx={{ backgroundColor: "#f0f0f0", justifyContent: "space-around" }}>
        <StyledButton isfirst onClick={() => handleCloseModal("Edit")}>
          CANCEL
        </StyledButton>
        <StyledButton isSecond onClick={() => handleConfirmationModal("Delete")}>
          DELETE PARENT
        </StyledButton>
        <StyledButton isThird onClick={() => handleConfirmationModal("Edit")}>
          SAVE
        </StyledButton>
      </DialogActions>
      <EditModalIconButton onClick={() => handleCloseModal("Edit")}>
        <svg
          width={15}
          height={15}
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L21 21" stroke="#706B6B" strokeWidth={2} strokeLinecap="round" />
          <path d="M21 1L1 21" stroke="#706B6B" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </EditModalIconButton>
      <div style={{ position: "relative" }}>
        <StyledDialog open={confirmationModal?.delete} onClose={() => handleModal("Close")}>
          <ConfirmationModal
            handleModal={handleModal}
            message={"Do you really want to delete the data?"}
            modalFor={"Delete"}
            title={"DELETE PARENT VERSION"}
          />
        </StyledDialog>
      </div>
      <div style={{ position: "relative" }}>
        <StyledDialog open={confirmationModal?.edit} onClose={() => handleModal("Close")}>
          <ConfirmationModal
            handleModal={handleModal}
            message={"Do you really want to Update the data?"}
            modalFor={"Edit"}
            title={"UPDATE PARENT VERSION"}
          />
        </StyledDialog>
      </div>
    </>
  );
};

export default ParentEditModal;
