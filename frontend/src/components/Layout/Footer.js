import React from "react";
import {
  FooterBottom,
  PolicyList,
  CopyRightText,
  FooterLink,
  FotterMain,
  FooterLeftCont
} from "./Styled";

const Footer = () => {
  return (
    <FotterMain>
      <FooterBottom>
        <FooterLeftCont>
          <PolicyList isfirst="true">
            <FooterLink href="">Support</FooterLink>
          </PolicyList>
          <PolicyList>
            <FooterLink href="">Legal & Privacy Policy</FooterLink>
          </PolicyList>
        </FooterLeftCont>
        <CopyRightText>© Copyright 2023 funds grip. All rights reserved</CopyRightText>
      </FooterBottom>
    </FotterMain>
  );
};

export default Footer;
