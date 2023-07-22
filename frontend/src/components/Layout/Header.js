import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLink,
  MenuWrapDiv,
  HeaderList,
  HeaderListItem,
  HeaderButton,
  HeaderCountryList,
  StyledHeader,
  StyledTypography
} from "./Styled";

const Header = () => {
  const [validation, setValidation] = useState({
    loginButton: false
  });
  const navigate = useNavigate();

  const urlPath = window.location.pathname;
  const role = urlPath?.includes("/verify") || urlPath?.includes("/change-password") ? true : false;

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <HeaderWrap>
            <HeaderLink href="javascript:void(0);">
              <img src="/images/funds_grip_logo.png" alt="funds_grip_logo" />
            </HeaderLink>
            {/* {role ? (
              <MenuWrapDiv>
                <HeaderList>
                  <HeaderListItem data={validation}>
                    {!validation?.loginButton ? (
                      <HeaderButton onClick={() => navigate("/login")}>login</HeaderButton>
                    ) : (
                      ""
                    )}
                  </HeaderListItem>
                  <HeaderListItem>
                    <HeaderButton isLink href="javascript:void(0);">
                      join
                    </HeaderButton>
                  </HeaderListItem>
                  <HeaderListItem>
                    <HeaderButton
                      isCountry
                      href="javascript:void(0);"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      aus<i aria-hidden="true"></i>
                    </HeaderButton>
                    <HeaderCountryList aria-labelledby="dropdownMenuButton">
                      <li>
                        <a href="javascript:void(0);">Aus</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Uk</a>
                      </li>
                      <ArrowDropDownIcon />
                    </HeaderCountryList>
                  </HeaderListItem>
                </HeaderList>
              </MenuWrapDiv>
            ) : ( */}
            <StyledTypography>CRM Login</StyledTypography>
            {/* )} */}
          </HeaderWrap>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
