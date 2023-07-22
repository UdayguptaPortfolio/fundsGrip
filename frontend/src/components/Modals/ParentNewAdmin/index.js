import React from "react";
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
import { useSelector } from "react-redux";
import CustomDropDown from "../../Dropdown/CustomDropDown";

const ParentNewAdmin = ({ handleCloseModal, handleChange, handleSubmit }) => {
  const { data: countriesData } = useSelector((state) => state?.getAllCountry?.country?.countries);

  return (
    <>
      <StyledTitle
        id="responsive-dialog-title"
        letterSpacing="8px"
        fontSize="28px"
        wordSpacing="12px"
        mb="40px"
        pl="50px">
        NEW PARENT
      </StyledTitle>
      <DialogContent sx={{ pl: "50px" }}>
        <DialogContentText>
          <DefaultFormGroup sx={{ alignItems: "center" }}>
            <StyledLabel htmlFor="name">Parent Name</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0", borderColor: "1px solid #f0f0f0" }}
              name="parent_name"
              id="outlined-basic"
              variant="outlined"
              focused={false}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Country*</StyledLabel>
            <CustomDropDown
              handleChange={handleChange}
              name="country_id"
              data={countriesData}
              innerField="name"
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Currency</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0", borderRadius: "0px", border: "none" }}
              name="currency"
              id="outlined-basic"
              variant="outlined"
              focused={false}
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
              type="number"
              focused={false}
              onChange={handleChange}
            />
          </DefaultFormGroup>
          <DefaultFormGroup>
            <StyledLabel htmlFor="name">Domain Ext.</StyledLabel>
            <StyledInput
              sx={{ backgroundColor: "#f0f0f0" }}
              name="domain_extension"
              id="outlined-basic"
              variant="outlined"
              focused={false}
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
              onChange={handleChange}
            />
          </DefaultFormGroup>
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

export default ParentNewAdmin;
