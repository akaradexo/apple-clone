import React from "react";
import styled from "styled-components";

export function NavLinks(props) {
  return (
     <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>Store</LinkItem>
        <LinkItem>Mac</LinkItem>
        <LinkItem>iPad</LinkItem>
        <LinkItem>iPhone</LinkItem>
        <LinkItem>Watch</LinkItem>
        <LinkItem>TV</LinkItem>
        <LinkItem>Music</LinkItem>
        <LinkItem>Support</LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

// const Wrap = styled.div`
// @media (max-width:967px){
//   padding:0rem 1rem;
//   right:0%;
// }
// background:#0f0f0f;
// opacity:0.9!important;
// display:flex;
// justify-content:center;
// align-items:center;
// `
// const Nav = styled.div`
// width:100%;
// ul{
// display:flex;
// flex-direction:row;
// justify-content:space-between;
// align-items:center;
// color:white;
// }
// li{
//   display:flex;
//   justify-content:center;
//   align-items:center;
//     font-size:0.8rem;
//     color:#d6d6d6;
// }
// `

const NavLinksContainer = styled.div`
width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  width:100%;
  list-style: none;
flex-direction:row;
justify-content:space-around;
align-items:center;
color:white;
  
`;

const LinkItem = styled.li`

  height: 100%;
  padding: 0 1.1em;
  color: #ebebec;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  border-top: 2px solid transparent;

 
`;


