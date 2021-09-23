import React from 'react'
import styled from 'styled-components'
import { selectAboutApple } from '../features/item/itemSlice';
import { useSelector } from 'react-redux';

function Header() {
  return (
    <Wrap>
      Header
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  overflow:hidden;
  background:red;
`