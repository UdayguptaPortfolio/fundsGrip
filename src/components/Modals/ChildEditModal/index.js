import React, { useState } from "react";
import { DialogContent, DialogContentText, DialogActions } from "@mui/material";
import {
  DefaultFormGroup,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
  EditModalIconButton
} from "./Styled";
import { StyledDialog } from "../../../container/ChildDashboard/Styled";
import ConfirmationModal from "../ConfirmationModal";

const ChildEditModal = ({ handleCloseModal, selectedValue }) => {
  const data = selectedValue;
  const [formInput, setFormInput] = useState(data);
  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  return (
    <>
      <StyledTitle
        id="responsive-dialog-title"
        letterSpacing="8px"
        fontSize="28px"
        wordSpacing="12px"
        mb="40px"
        pl="50px">
        Edit Modal
      </StyledTitle>
      <DialogContent sx={{ pl: "50px" }}>
        <DialogContentText>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Username*</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0", borderColor: "1px solid #f0f0f0" }}
              name="name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={formInput[0].email}
              onChange={(e) => setFormInput(e.target.value)}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">First Name*</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={formInput[0].displayname}
              onChange={(e) => setFormInput(e.target.value)}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Last Name*</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0", borderRadius: "0px", border: "none" }}
              name="name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={""}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Phone No</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={""}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Admin Role*</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              value={""}
            />
          </DefaultFormGroup>
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ backgroundColor: "#f0f0f0", justifyContent: "space-around" }}>
        <StyledButton onClick={handleCloseModal}>CANCEL</StyledButton>
        <StyledButton>CREATE</StyledButton>
        <StyledButton onClick={handleDeleteModal}>DELETE</StyledButton>
      </DialogActions>
      <EditModalIconButton onClick={handleCloseModal}>
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
        <StyledDialog open={deleteModal} maxWidth="lg">
          <ConfirmationModal handleDeleteModal={handleDeleteModal} />
        </StyledDialog>
      </div>
    </>
  );
};

export default ChildEditModal;
