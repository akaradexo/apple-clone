import React from 'react';
import { Apple } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import { ShoppingBagOutlined} from '@mui/icons-material';

import styled from 'styled-components';

function Header() {



  return (
    <Wrap>
      <Nav>
        <ul>
          <li><Apple/></li>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Music</li>
          <li>Support</li>
          <li><SearchOutlined/></li>
          <li><ShoppingBagOutlined/></li>
        </ul>
      </Nav>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
position:fixed;
top:0;
right:1%;
left:0;
height:50px;
padding:0 18%;
background:#0f0f0f;
opacity:0.9!important;
display:flex;
justify-content:center;
align-items:center;
`
const Nav = styled.div`
width:100%;
ul{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
color:white;
}
li{
  display:flex;
  justify-content:center;
  align-items:center;
    font-size:0.8rem;
    color:#d6d6d6;
}
`
