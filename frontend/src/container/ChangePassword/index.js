import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Grid, FormGroup, Box, Typography } from "@mui/material";
import {
  ImgHeader,
  StyledGrid,
  StyledGridItem,
  StyledBox,
  Input,
  StyledFormHeadingCode,
  IconButton,
  ShowImage,
  StyleDiv
} from "./Styled";
// import { StyledTypography } from "../../exports/StyledTypography";
// import { StyledButton } from "../../exports/StyledButton";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import { useChangePasswordMutation } from "../../redux/slices/manageAccount/changepasswordApiSlice";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");
  const [passwordData, setPasswordData] = useState({});
  const [validation, setValidation] = useState({
    passwordError: false,
    passwordMessage: "",
    showPassword: false
  });

  const [changePassword, { isLoading, isError, error, isSuccess, data: changePasswordData }] =
    useChangePasswordMutation();

  useEffect(() => {
    isError && toast.error(error?.error);
    isSuccess && changePasswordData?.status === 400 && toast.error(changePasswordData?.message);
    if (isSuccess && changePasswordData?.status === 200) {
      toast.success(changePasswordData?.message);
      navigate("/login");
    } else if (isSuccess && changePasswordData?.status !== 200) {
      toast.error(changePasswordData?.message);
    }
  }, [isError, error, isSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!passwordData?.password?.length && !passwordData?.confirm_password?.length) {
      setValidation((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordMessage: "Both Fields are mandatory."
      }));
    } else if (passwordData?.password !== passwordData?.confirm_password) {
      setValidation((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordMessage: "Password should be same."
      }));
    } else if (passwordData?.password?.length < 8 || passwordData?.confirm_password?.length < 8) {
      setValidation((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordMessage: "Password must have a minimum 8 characters."
      }));
    } else {
      setValidation((prevState) => ({
        ...prevState,
        passwordError: false
      }));
      let payload = {
        ...passwordData,
        reset_password_token: token
      };
      changePassword(payload);
    }
  };

  return (
    <>
      <LoadingBackdrop open={isLoading} />
      <Layout>
        <StyledGrid container>
          <Grid item xs={0} sm={0} md={6} lg={6}>
            <ImgHeader />
          </Grid>
          <StyledGridItem item xs={12} sm={12} md={6} lg={6}>
            <StyledBox>
              <StyledTypography
                color="#3CBFAE"
                variant="subTitle2"
                letterSpacing="5px"
                fontSize="17px">
                CHANGE PASSWORD
              </StyledTypography>
              <StyledFormHeadingCode color="#6c6c6c" mt="30px" fontSize="14px">
                New password
              </StyledFormHeadingCode>
              <FormGroup>
                <StyleDiv>
                  <Input
                    required="required"
                    aria-required="true"
                    placeholder="Change Password"
                    type={`${validation?.showPassword ? "text" : "password"}`}
                    name="password"
                    id="#"
                    onChange={handleChange}
                  />
                  <IconButton
                    onClick={() => {
                      setValidation((prevState) => ({
                        ...prevState,
                        showPassword: !validation?.showPassword
                      }));
                    }}>
                    <ShowImage src="/images/show.svg" alt="hfgdh" />
                    Show
                  </IconButton>
                </StyleDiv>
              </FormGroup>
              <StyledFormHeadingCode color="#6c6c6c" mt="30px" fontSize="14px">
                Confirm new password
              </StyledFormHeadingCode>
              <FormGroup>
                <StyleDiv>
                  <Input
                    required="required"
                    aria-required="true"
                    placeholder="Confirm Password"
                    type={`${validation?.showPassword ? "text" : "password"}`}
                    name="confirm_password"
                    id="#"
                    onChange={handleChange}
                  />
                  {validation?.passwordError ? (
                    <Typography color={"red"} fontSize="12px" marginBottom="20px">
                      {validation?.passwordMessage}{" "}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <IconButton
                    onClick={() => {
                      setValidation((prevState) => ({
                        ...prevState,
                        showPassword: !validation?.showPassword
                      }));
                    }}>
                    <ShowImage src="/images/show.svg" alt="hfgdh" />
                    Show
                  </IconButton>
                </StyleDiv>
              </FormGroup>
              <Box>
                <StyledButton onClick={() => handleSubmit()} bgcolor="#3cbfae" minWidth="106px">
                  CHANGE MY PASSWORD
                </StyledButton>
              </Box>
            </StyledBox>
          </StyledGridItem>
        </StyledGrid>
      </Layout>
    </>
  );
};

export default ChangePassword;
