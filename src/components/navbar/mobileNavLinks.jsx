import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
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
      )}
    </NavLinksContainer>
  );
}
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: black;

`;
const LinksWrapper = styled.ul`
  display: flex;
  padding:0 4rem;
  height: 100%;
  list-style: none;
  background-color: black;
  opacity:1;
  width: 100%;
  flex-direction: column;
  align-item:center;
  justify-content:flex-start;
  position: fixed;
  top: 50px;
  padding-top:10px;
  left:0;
  right:0;
  text-decoration:none;
`

const LinkItem = styled.li`
  width: 100%;
  padding-bottom:10px;
  border-bottom:1px solid #ebebec;
  color: #ebebec;
  font-weight: 500;
  display: flex;
  margin:0.8rem 0;

`
