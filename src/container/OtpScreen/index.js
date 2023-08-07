import React, { useState, useEffect } from "react";
import { Grid, FormGroup, Box, Typography } from "@mui/material";
import {
  ImgHeader,
  StyledGrid,
  StyledGridItem,
  StyledBox,
  Input,
  StyledFormHeadingCode,
  StyledLink
} from "./Styled";
import { StyledTypography } from "../../components/Common/StyledTypography";
import { StyledButton } from "../../components/Common/StyledButton";
import { toast } from "react-toastify";

const OtpScreen = ({
  handleMfaAuthentication,
  handleChange,
  mfaCode,
  loginData,
  Auth,
  setAuthentication,
  setValidation
}) => {
  const [timer, setTimer] = useState({
    minutes: 2,
    seconds: 59
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer?.seconds > 0) {
        setTimer((prevState) => ({
          ...prevState,
          seconds: timer?.seconds - 1
        }));
      }

      if (timer?.seconds === 0) {
        if (timer?.minutes === 0) {
          clearInterval(interval);
        } else {
          setTimer((prevState) => ({
            ...prevState,
            seconds: 59,
            minutes: timer?.minutes - 1
          }));
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer?.seconds]);

  useEffect(() => {
    if (!timer?.seconds > 0 || !timer?.minutes > 0) {
      setValidation((prevState) => ({
        ...prevState,
        otpScreen: false,
        otpExpired: true
      }));
    }
  }, [timer]);

  const handleResendCode = () => {
    Auth.signIn(loginData?.email, loginData?.password)
      .then((user) => {
        setAuthentication(user);
        toast.success("MFA Code is successfully Resended to your email!");
        setTimer((prevState) => ({
          ...prevState,
          minutes: 2,
          seconds: 59
        }));
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };
  return (
    <>
      <StyledGrid container>
        <Grid item xs={12} sm={6}>
          <ImgHeader />
        </Grid>
        <StyledGridItem item xs={12} sm={6}>
          <StyledBox>
            <StyledTypography
              color="#3CBFAE"
              variant="subTitle2"
              letterSpacing="5px"
              fontSize="17px">
              ENTER THE CODE WE SENT TO YOUR REGISTERED EMAIL ADDRESS
            </StyledTypography>
            <StyledFormHeadingCode color="#6c6c6c" mt="30px" fontSize="14px">
              ENTER CODE
            </StyledFormHeadingCode>
            <FormGroup>
              <Input
                required="required"
                aria-required="true"
                placeholder="Code"
                type="text"
                name="mfaCode"
                id="#"
                onChange={handleChange}
                value={mfaCode}
              />
              {timer?.seconds > 0 || timer?.minutes > 0 ? (
                <p>
                  Time Remaining: {timer?.minutes < 10 ? `0${timer?.minutes}` : timer?.minutes}:
                  {timer?.seconds < 10 ? `0${timer?.seconds}` : timer?.seconds}
                </p>
              ) : (
                <>
                  {" "}
                  <Typography color="red" mb="5px">
                    Your Code is Expired, Please resend code.
                  </Typography>
                </>
              )}
              <StyledLink
                mb={"10px"}
                // color="#ff6c00"
                color={`${mfaCode?.length === 6 ? "#3cbfae" : "#ff6c00"}`}
                role="button"
                onClick={() => {
                  handleResendCode();
                }}>
                Resend Another Code
              </StyledLink>
            </FormGroup>
            <Box>
              <StyledButton
                bgcolor={`${mfaCode?.length === 6 ? "#ff6c00" : "grey"}`}
                minWidth="106px"
                onClick={() => {
                  mfaCode?.length === 6 && handleMfaAuthentication();
                }}>
                LOGIN
              </StyledButton>
            </Box>
          </StyledBox>
        </StyledGridItem>
      </StyledGrid>
    </>
  );
};

export default OtpScreen;
