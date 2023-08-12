import React, { useEffect } from "react";
import { DialogContent, DialogContentText, DialogActions } from "@mui/material";
import {
  DefaultFormGroup,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
  CloseButton,
  CancelBtn
} from "./Styled";
import CommonDropDown from "../../Dropdown/CommonDropdown";
import { addNewEmployeeForm, patronsManageMenus } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import CustomDropDown from "../../Dropdown/CustomDropDown";
import { useGetParentVersionsQuery } from "../../../redux/slices/parentVersioning/parentVersioningApiSlice";
import { getParentVersioningAction } from "../../../redux/slices";

const AddNewAdmin = ({ handleCloseModal, handleChange, handleSubmit, inviteAdminData }) => {
  const dispatch = useDispatch();
  const { invitation_for } = inviteAdminData || "";
  const version = localStorage.getItem("version");
  // const { data: parentVersioningData, isLoading: gettingParentVersionLoading } =
  //   useGetParentVersionsQuery("GetAllParentVersion", {
  //     skip: version
  //   });
  // const { data: versionData } = useSelector((state) => state?.getParentVersion?.parentVersion);
  const parentVersioningData = [];

  useEffect(() => {
    dispatch(getParentVersioningAction.setParentVersions(parentVersioningData));
  }, [parentVersioningData]);

  return (
    <>
      <StyledTitle
        id="responsive-dialog-title"
        letterSpacing="8px"
        fontSize="28px"
        wordSpacing="12px"
        mb="40px"
        pl="50px">
        CREATE NEW EMPLOYEE
      </StyledTitle>
      <DialogContent sx={{ pl: "50px" }}>
        <DialogContentText>
          {addNewEmployeeForm?.map((item, index) => {
            const { label, name, type, required } = item || {};
            return (
              <DefaultFormGroup key={index}>
                <StyledLabel htmlFor="name">{label}</StyledLabel>
                <StyledInput
                  sx={{ backgroundColor: "#f0f0f0" }}
                  name={name}
                  id="outlined-basic"
                  variant="outlined"
                  focused={false}
                  onChange={handleChange}
                  type={type}
                  required={required}
                />
              </DefaultFormGroup>
            );
          })}
          {/* <DefaultFormGroup>
            <StyledLabel htmlFor="name">Admin Role*</StyledLabel>
            <CommonDropDown
              handleChange={handleChange}
              name="invitation_for"
              data={patronsManageMenus}
            />
          </DefaultFormGroup> */}
          {/* {invitation_for === "parent_admin" && (
            <DefaultFormGroup>
              <StyledLabel htmlFor="name">Parent*</StyledLabel>
              <CustomDropDown
                handleChange={handleChange}
                name="parent_version_id"
                data={[]}
                innerField="parent_name"
              />
            </DefaultFormGroup>
          )} */}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ backgroundColor: "#f0f0f0", justifyContent: "space-around" }}>
        <CancelBtn sx={{ fontWeight: "bold" }} onClick={handleCloseModal}>
          CANCEL
        </CancelBtn>
        <StyledButton sx={{ fontWeight: "bold" }} onClick={handleSubmit}>
          CREATE
        </StyledButton>
      </DialogActions>
      <CloseButton onClick={handleCloseModal}>
        <svg
          width={15}
          height={15}
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L21 21" stroke="#706B6B" strokeWidth={2} strokeLinecap="round" />
          <path d="M21 1L1 21" stroke="#706B6B" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </CloseButton>
    </>
  );
};

export default AddNewAdmin;
