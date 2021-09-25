import React from "react";
import styled from "styled-components";
import { ShoppingBagOutlined} from '@mui/icons-material';


const AccessibilityContainer = styled.div`
  display: flex;
`;
const SocialLinks = styled.div`
list-style-type: none;
display: flex;
justify-content: center;
align-items: center;
`;


export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <SocialLinks>
       <ShoppingBagOutlined/>
        
      </SocialLinks>         
    </AccessibilityContainer>
  );
}
