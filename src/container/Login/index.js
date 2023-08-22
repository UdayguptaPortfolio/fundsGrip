import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  ImgHeader,
  StyledGrid,
  StyledGridItem,
  StyledBox,
  Input,
  ForgottenTypography,
  LoginTypography,
  StyleDiv,
  ShowImage,
  IconButton,
  StyledFormGroup
} from "./Styled";
import { Grid, Box, Typography } from "@mui/material";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import { useMasterLoginMutation } from "../../redux/slices/auth/authApiSlice";
import { useForgotPasswordMutation } from "../../redux/slices/manageAccount/forgotPasswordApiSlice";
import { toast } from "react-toastify";
import LoadingBackdrop from "../../components/LoadingBackDrop/LoadingBackdrop";
import { emailValidator, passwordValidator } from "../../utils/validator";
import { useNavigate } from "react-router-dom";
import { parseJwt } from "../../helpers/tokenDecoder";
import OtpScreen from "../OtpScreen";
import SessionTimeOutModal from "../../components/Modals/SessionTimeOutModal";

const Login = () => {
  const { Auth } = require("@aws-amplify/auth");
  const { Amplify } = require("@aws-amplify/core");
  const [loginData, setLoginData] = useState({});
  const [authentication, setAuthentication] = useState(false);
  const [validation, setValidation] = useState({
    emailError: false,
    emailMessage: "",
    passwordError: false,
    passwordMessage: "",
    showPassword: false,
    otpScreen: false,
    loading: false,
    rememberPopup: false,
    otpExpired: false
  });
  const navigate = useNavigate();
  const [masterLogin, { data, isLoading: loginLoading }] = useMasterLoginMutation();
  const [forgotPassword, { data: forgotData, isLoading }] = useForgotPasswordMutation();

  // Amplify.configure({
  //   aws_project_region: "eu-west-2",
  //   aws_cognito_region: "eu-west-2",
  //   aws_user_pools_id: "eu-west-2_inlZDFvQM",
  //   aws_user_pools_web_client_id: "1fvqnndkusbga5etadejai1lmt"
  // });
  // Auth.configure({
  //   authenticationFlowType: "CUSTOM_AUTH"
  // });

  const message = localStorage.getItem("message");

  // useEffect(() => {
  //   if (data?.status === 200) {
  //     const adminType = data?.user?.data?.attributes?.type;
  //     const subdomain = data?.user?.data?.attributes?.subdomain;
  //     localStorage.setItem("token", data?.token);
  //     localStorage.setItem("cognito_id_token", data?.cognito_id_token);
  //     localStorage.setItem("EXPIRED_AT", parseJwt(data?.token)?.exp * 1000);
  //     localStorage.setItem("refresh_token", data?.cognito_refresh_token);
  //     localStorage.setItem("session_expired", new Date().getTime() + 24 * 60 * 60 * 1000);
  //     adminType === "ParentAdmin" && localStorage.setItem("version", subdomain);
  //     adminType === "ParentAdmin"
  //       ? navigate(`/${subdomain}/pages/dashboard`)
  //       : navigate("/pages/dashboard");
  //     toast.success("Authentication successful");
  //     localStorage.removeItem("message");
  //   } else if (data?.status !== 200) {
  //     toast.error(data?.message);
  //     setValidation((prevState) => ({
  //       ...prevState,
  //       otpScreen: false
  //     }));
  //     setLoginData({});
  //   }
  // }, [data]);

  useEffect(() => {
    forgotData?.status === 200
      ? toast.success(forgotData?.message)
      : toast.error(forgotData?.message);
  }, [forgotData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mfaCode") {
      value?.length <= 6 &&
        setLoginData((prevState) => ({
          ...prevState,
          [name]: value
        }));
    } else {
      setLoginData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (type) => {
    if (
      !emailValidator(loginData?.email)?.length &&
      !passwordValidator(loginData?.password)?.length
    ) {
      setValidation((prevState) => ({
        ...prevState,
        emailError: false,
        passwordError: false
      }));
      if (type === "onLogin") {
        setValidation((prevState) => ({
          ...prevState,
          loading: true
        }));
        // Auth.signIn(loginData?.email, loginData?.password)
        //   .then((user) => {
        //     setAuthentication(user);
        //     toast.success("MFA Code is successfully Sended to your email!");
        //     localStorage.clear();
        //     setValidation((prevState) => ({
        //       ...prevState,
        //       otpScreen: true,
        //       otpExpired: false,
        //       loading: false
        //     }));
        //   })
        //   .catch((err) => {
        //     toast.error(err?.message);
        //     setValidation((prevState) => ({
        //       ...prevState,
        //       loading: false
        //     }));
        //   });
        navigate("/pages/employee");
        localStorage.setItem("token", "rwertewrwrwr");
      } else if (type === "onForgot") {
        let payload = {
          email: loginData?.email
        };
        await forgotPassword(payload);
      }
    } else {
      emailValidator(loginData?.email)?.length > 2 &&
        setValidation((prevState) => ({
          ...prevState,
          emailError: true,
          emailMessage: emailValidator(loginData?.email)
        }));
      passwordValidator(loginData?.password)?.length > 2 &&
        setValidation((prevState) => ({
          ...prevState,
          passwordError: true,
          passwordMessage: passwordValidator(loginData?.password)
        }));
    }
  };

  const handleMfaAuthentication = async () => {
    if (authentication.challengeName === "CUSTOM_CHALLENGE") {
      Auth.sendCustomChallengeAnswer(authentication, loginData?.mfaCode)
        .then((user) => {
          if (user.challengeName) toast.error("Invalid OTP, try again");
          else {
            localStorage.clear();
            console.debug("Authentication successful");
            setValidation((prevState) => ({
              ...prevState,
              rememberPopup: true
            }));
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message);
        });
    } else {
      console.log(authentication);
    }
  };

  const handleModal = (type) => {
    setValidation((prevState) => ({
      ...prevState,
      rememberPopup: false
    }));
    const { email, password } = loginData || "";
    let payload;
    if (type === "Yes") {
      payload = {
        email: email,
        password: password,
        remember_me: true,
        browser_detail: navigator.userAgent
      };
    } else {
      payload = {
        email: email,
        password: password,
        remember_me: false,
        browser_detail: navigator.userAgent
      };
    }
    masterLogin(payload);
  };
  return (
    <>
      <LoadingBackdrop open={validation?.loading || isLoading || loginLoading} />
      <Layout>
        {!validation?.otpScreen ? (
          <StyledGrid container>
            <Grid item xs={0} sm={0} md={6} lg={6}>
              <ImgHeader />
            </Grid>
            <StyledGridItem item xs={12} sm={12} md={6} lg={6}>
              <StyledBox>
                {message && (
                  <StyledTypography variant="h5" color="#6c6c6c" mt="10px" mb="15px">
                    Your Authentication has Expired, Please login again.....
                  </StyledTypography>
                )}
                {validation?.otpExpired && (
                  <StyledTypography variant="h5" color="#6c6c6c" mt="10px" mb="15px">
                    Your OTP has Expired, Please login again.....
                  </StyledTypography>
                )}
                <StyledTypography
                  color="#3CBFAE"
                  variant="subTitle2"
                  letterSpacing="5px"
                  fontSize="17px">
                  LOGIN TO FUNDS GRIP CRM
                </StyledTypography>
                <StyledTypography variant="h5" color="#6c6c6c" mt="30px">
                  Login to your CRM portal
                </StyledTypography>
                <LoginTypography color="#6c6c6c" mt="30px" fontSize="14px" mb="30px">
                  Login
                </LoginTypography>
                <StyledFormGroup>
                  <Input
                    required="required"
                    aria-required="true"
                    placeholder="Email address"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    error={validation?.emailError}
                  />
                  {validation?.emailError ? (
                    <Typography color={"red"} fontSize="12px" marginBottom="10px">
                      {validation?.emailMessage}{" "}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <StyleDiv>
                    <Input
                      required="required"
                      aria-required="true"
                      placeholder="Password"
                      type={`${validation?.showPassword ? "text" : "password"}`}
                      name="password"
                      onChange={handleChange}
                      error={validation?.passwordError}
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
                </StyledFormGroup>
                <Box>
                  <StyledButton
                    bgcolor="#ff6c00"
                    minWidth="106px"
                    onClick={() => handleSubmit("onLogin")}>
                    LOGIN
                  </StyledButton>
                  <ForgottenTypography
                    role="button"
                    color="#3cbfae"
                    mt="30px"
                    fontSize="14px"
                    onClick={() => handleSubmit("onForgot")}>
                    Forgotten password?
                  </ForgottenTypography>
                </Box>
              </StyledBox>
            </StyledGridItem>
          </StyledGrid>
        ) : (
          <OtpScreen
            handleMfaAuthentication={handleMfaAuthentication}
            handleChange={handleChange}
            mfaCode={loginData?.mfaCode}
            loginData={loginData}
            Auth={Auth}
            setAuthentication={setAuthentication}
            setValidation={setValidation}
          />
        )}
      </Layout>
      {validation?.rememberPopup && <SessionTimeOutModal handleModal={handleModal} />}
    </>
  );
};

export default Login;
