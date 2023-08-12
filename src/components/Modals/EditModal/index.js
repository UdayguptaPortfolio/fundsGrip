import React, { useEffect, useState } from "react";
import { DialogContentText, DialogActions } from "@mui/material";
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
import { editManageButtons } from "../../constant";
import {
  useDeleteSpecificPatronMutation,
  useUpdatePatronsMutation
} from "../../../redux/slices/manageMasterAdmin/patronsOperationsApiSlice";
import { toast } from "react-toastify";
import { useResendInvitationMutation } from "../../../redux/slices/manageAccount/resendInvitationApiSlice";
import LoadingBackdrop from "../../LoadingBackDrop/LoadingBackdrop";

const EditModal = ({ handleCloseModal, selectedValue }) => {
  const selectedPatronData = selectedValue;
  const selectedPatronId = selectedPatronData[0]?.id;
  const [editField, setEditField] = useState({
    first_name: selectedPatronData[0]?.attributes?.name?.split(" ")[0],
    last_name: selectedPatronData[0]?.attributes?.name?.split(" ")[1],
    phone_number: selectedPatronData[0]?.attributes?.phone_number || ""
  });
  const [confirmationModal, setConfirmationModal] = useState({
    delete: false,
    edit: false
  });
  const [deleteSpecificPatron, { data: deleteRes }] = useDeleteSpecificPatronMutation();
  const [updatePatrons, { data: updateRes }] = useUpdatePatronsMutation();
  const [resendinvitation, { data: resendData, resLoading }] = useResendInvitationMutation();

  useEffect(() => {
    updateRes?.status === 200 ? toast.success(updateRes?.message) : toast.error(updateRes?.message);
    deleteRes?.status === 200 ? toast.success(deleteRes?.message) : toast.error(deleteRes?.message);
    resendData?.status === 200
      ? toast.success(resendData?.message)
      : toast.error(resendData?.message);
  }, [updateRes, deleteRes, resendData]);

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
      deleteSpecificPatron(selectedPatronData[0]?.id);
      handleCloseModal("Edit");
      toast.success("Admin user deleted successfully.");
      setConfirmationModal((prevState) => ({
        ...prevState,
        delete: false
      }));
    } else if (type === "Edit") {
      let id = parseInt(selectedPatronId);
      let payload = {
        patron: {
          id,
          ...editField
        }
      };
      updatePatrons({ payload, id });
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

  const handleResendLink = (type) => {
    let payload = {
      id: selectedPatronId
    };
    resendinvitation(payload);
  };
  return (
    <>
      <LoadingBackdrop open={resLoading} />
      <StyledTitle
        id="responsive-dialog-title"
        letterSpacing="8px"
        fontSize="28px"
        wordSpacing="8px"
        marginLeft="24px">
        {editField?.first_name + " " + editField?.last_name}
      </StyledTitle>

      <StyleGrid>
        {editManageButtons?.map((item) => {
          return (
            <LinkButton key={item?.ref} variant="text" href="#">
              {item?.name}
            </LinkButton>
          );
        })}
      </StyleGrid>

      <StyledDialogContent sx={{ pl: "50px" }}>
        <DialogContentText>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">USERNAME</StyledLabel>
            <StyledTypography>{selectedPatronData[0]?.attributes?.email}</StyledTypography>
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">USER ID</StyledLabel>
            <StyledTypography>{selectedPatronData[0]?.attributes?.id}</StyledTypography>
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">ACCESS</StyledLabel>
            <StyledTypography>{selectedPatronData[0]?.attributes?.email}</StyledTypography>
          </DefaultFormGroup>
        </DialogContentText>
        <DialogContentText>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">First Name*</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="first_name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={editField?.first_name}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Last Name*</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0", borderRadius: "0px", border: "none" }}
              name="last_name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={editField?.last_name}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Phone No</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="phone_number"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={editField?.phone_number}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Role*</StyledLabel>
            <StyledTypography>{selectedPatronData[0]?.attributes?.access_level}</StyledTypography>
          </DefaultFormGroup>
        </DialogContentText>
        <DialogContentText>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name" value={selectedPatronData[0]?.attributes?.last_sign_in_at}>
              Last Sign In
            </StyledLabel>
            <StyledTypography>
              {selectedPatronData[0]?.attributes?.last_sign_in_at}
            </StyledTypography>
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name" value={selectedPatronData[0]?.attributes?.last_sign_in_at}>
              Sign Ins
            </StyledLabel>
            <StyledTypography>{selectedPatronData[0]?.attributes?.sign_in_count}</StyledTypography>
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Created</StyledLabel>
            <StyledTypography>
              {selectedPatronData[0]?.attributes?.last_sign_in_at}
            </StyledTypography>
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Created by</StyledLabel>
            <StyledTypography>{selectedPatronData[0]?.attributes?.name}</StyledTypography>
          </DefaultFormGroup>
        </DialogContentText>

        <DialogActions>
          <StyledButton isFourth onClick={() => handleResendLink()}>
            RESEND VERIFICATION EMAIL
          </StyledButton>
        </DialogActions>
      </StyledDialogContent>

      <DialogActions sx={{ backgroundColor: "#f0f0f0", justifyContent: "space-around" }}>
        <StyledButton isfirst onClick={() => handleCloseModal("Edit")}>
          CANCEL
        </StyledButton>
        <StyledButton isSecond onClick={() => handleConfirmationModal("Delete")}>
          DELETE ADMIN
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
            title={"DELETE ADMIN"}
          />
        </StyledDialog>
      </div>
      <div style={{ position: "relative" }}>
        <StyledDialog open={confirmationModal?.edit} onClose={() => handleModal("Close")}>
          <ConfirmationModal
            handleModal={handleModal}
            message={"Do you really want to Update the data?"}
            modalFor={"Edit"}
            title={"UPDATE ADMIN"}
          />
        </StyledDialog>
      </div>
    </>
  );
};

export default EditModal;
