import React from "react";
import { Apple } from '@material-ui/icons';
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height:50px;
  display: flex;
  padding:0 18%;
  @media (max-width:967px){
    padding:0rem 1rem;
opacity:1;
right:0%;
  }
  justify-content: center;
  align-items: center;  
  position: fixed; /* Set the navbar to fixed position */
    top: 0;
    right:1%;
left:0;
    background:#0f0f0f;
opacity:0.9!important;
    z-index:9999;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  color:#d6d6d6;
`;

const MiddleSection = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  justify-content: center;
  align-items:center;
  color:#d6d6d6;

`;

const RightSection = styled.div`
  display: flex;
  color:#d6d6d6;
  align-items:center;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        {isMobile && <MobileNavLinks />}
        {!isMobile && <Apple/>}
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}  {isMobile && <Apple/>}</MiddleSection>
      <RightSection>
        <Accessibility />
      </RightSection>
    </NavbarContainer>
  );
}
