import React, { useEffect } from "react";
import { FormGroup, Typography } from "@mui/material";
import {
  StyledDiv,
  HeadContent,
  WhiteBox,
  StyledContent,
  StyledLabel,
  StyledInput,
  StyleDiv,
  FormButton,
  FormControlDiv,
  FormButtonContainer,
  StyledDivInput,
  StyledTypographyName,
  IconButton,
  ShowImage
} from "./Styled";
import { StyledGrid } from "../../components/Common/StyledGrid";
import { StyledTypography } from "../../components/Common/StyledTypography";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useUserVerificationMutation } from "../../redux/slices/manageAccount/accountVerificationApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import { passwordValidator } from "../../utils/validator";
import { verifiedEmail } from "../../api/services";

const SignUp = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });
  const [userVerification, { isLoading, error: message, data: userVerificationData }] =
    useUserVerificationMutation();
  const [validation, setValidation] = useState({
    passwordError: false,
    passwordMessage: "",
    showPassword: false
  });

  useEffect(() => {
    localStorage.clear();
    token &&
      verifiedEmail(token)
        .then((res) => {
          res?.status === 200 && setFormData(res?.data?.data);
          if (res?.data?.status !== 200) {
            toast.error(res?.data?.message);
            navigate("/tokenExpired");
          }
        })
        .catch((err) => {
          toast.error(err?.message);
        });
  }, []);

  useEffect(() => {
    message?.status !== 200 && toast.error(message?.data?.message);
    if (userVerificationData?.status === 200) {
      toast.success("Password Created Successfully!");
      navigate("/login");
    } else {
      toast.error(userVerificationData?.message);
    }
  }, [userVerificationData, message]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSignIn = async () => {
    if (!passwordValidator(formData?.password)?.length) {
      setValidation((prevState) => ({
        ...prevState,
        passwordError: false
      }));
      let payload = {
        user: {
          ...formData,
          token: token
        }
      };
      await userVerification(payload);
    } else {
      passwordValidator(formData?.password)?.length > 2 &&
        setValidation((prevState) => ({
          ...prevState,
          passwordError: true,
          passwordMessage: passwordValidator(formData?.password)
        }));
    }
  };

  return (
    <>
      <LoadingBackdrop open={isLoading} />
      <Layout>
        <StyledDiv sx={{ marginTop: "82px" }}>
          <StyledGrid container>
            <WhiteBox>
              <StyledTypographyName
                color="#3cbfae"
                mb="60px"
                letterSpacing="17.5px"
                fontSize="4.375rem"
                fontFamily="Nobel-Bold">
                WELCOME,{`${formData?.first_name} ${formData?.last_name}`}
              </StyledTypographyName>
              <StyledTypography fontFamily="Nobel-Light" fontSize="28px">
                Create your Admin Account
              </StyledTypography>
            </WhiteBox>
          </StyledGrid>
        </StyledDiv>
        <HeadContent>
          <StyledGrid>
            <StyledContent>
              <FormGroup sx={{ marginBottom: "50px" }}>
                <StyledDivInput>
                  <StyledLabel>CHECK YOUR DETAILS</StyledLabel>
                  <StyledInput
                    required="required"
                    aria-required="true"
                    placeholder="First name"
                    type="text"
                    value={formData?.first_name}
                    name="first_name"
                    id="#"
                    onChange={handleChange}
                  />
                  <StyledInput
                    required="required"
                    aria-required="true"
                    placeholder="Last name"
                    type="text"
                    name="last_name"
                    value={formData?.last_name}
                    onChange={handleChange}
                    id="#"
                  />
                  <StyledInput
                    required="required"
                    aria-required="true"
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    value={formData?.email}
                    disabled={true}
                    onChange={handleChange}
                    id="#"
                  />
                  <StyledLabel>GREAT , PLEASE create a password</StyledLabel>
                  <FormControlDiv>
                    <StyleDiv>
                      <StyledInput
                        required="required"
                        aria-required="true"
                        placeholder="password"
                        type={`${validation?.showPassword ? "text" : "password"}`}
                        onChange={handleChange}
                        name="password"
                        id="#"
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
                  </FormControlDiv>
                  <FormButtonContainer>
                    <FormButton>CANCEL</FormButton>
                    <FormButton
                      signIn={true}
                      onClick={() => handleSignIn()}
                      disabled={
                        !formData?.first_name?.length ||
                        !formData?.email?.length ||
                        !formData?.password?.length
                      }>
                      Sign in
                    </FormButton>
                  </FormButtonContainer>
                </StyledDivInput>
              </FormGroup>
            </StyledContent>
          </StyledGrid>
        </HeadContent>
      </Layout>
    </>
  );
};

export default SignUp;
