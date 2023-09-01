import styled from "@emotion/styled";
import { Button, Link, List, ListItem } from "@mui/material";

export const FotterMain = styled.footer`
  width: 100%;
  bottom: 0;
  background-color: #4a4f55;
  padding: 20px 40px 20px 40px;
  color: #fff;
  font-size: 10px;
  font-family: "Corbel", sans-serif;
  float: left;
  z-index: 1;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PolicyList = styled(List)(
  (props) => `
    display: inline-block;
    margin:  0 15px;
    font-family: "Corbel", sans-serif;
    position: relative;
    margin-left : ${props?.isfirst === "true" ? 0 : ""}
`
);

export const FooterLink = styled.a`
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
`;

export const CopyRightText = styled.div``;

export const FooterLeftCont = styled.div`
  display: flex;
`;

export const StyledHeader = styled.div`
  background: #3cbfae;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  float: left;
`;

export const HeaderContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  padding-left: 40px;
  /* padding-right: 40px; */
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLink = styled(Link)`
  width: 97px;
  display: inline-block;
  padding: 16px 0;

  img {
    height: 65px;
    width: 100%;
  }
`;

// export const MenuWrapDiv = styled.div`
//   display: inline-block;
//   padding-right: 2px;
// `;

export const MenuWrapDiv = styled.div(({ theme }) => ({
  display: "inline-block",
  paddingRight: "2px",
  [theme.breakpoints.down("xs")]: {
    // display: "grid"
  }
}));

export const HeaderList = styled(List)(({ theme }) => ({
  width: "auto",
  display: "inline-block",
  float: "right",
  [theme.breakpoints.down("sm")]: {
    display: "grid !important"
  }
}));

export const StyledTypography = styled(ListItem)`
  max-width: 200px;
  width: 100%;
  height: 22.5px;
  font-family: Corbel;
  font-size: 28.5px;
  letter-spacing: normal;
  color: #fff;
`;

export const HeaderListItem = styled(ListItem)`
  display: inline-block;
  position: relative;
  width: auto;
  padding-left: 0px !important;
  padding-right: 0px !important;
`;

export const HeaderCountryList = styled(List)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0px;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

export const HeaderButton = styled(Button)(
  (props) => `
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-family: "Nobel-Bold";
  text-transform: uppercase;
  font-size: 11px;
  border-radius: 30px;
  letter-spacing: 3.3px;
  min-width: 115px;
  border: ${props?.isLink || props?.isCountry ? "none !important" : "1px solid transparent"};
  line-height: normal;
  transition: all 0.3s ease-in-out;
  outline: none;
  margin: 0 10px;
  min-width: 106px;
  padding: 9px 10px;
  background: ${props?.isLink ? "#ff6c00" : "transparent"} ;
  border: 1px solid #ff6c00;
  color: #fff;
  :hover
   background: ${props?.isCountry ? "#ff6c00" : "#fff"};
`
);
