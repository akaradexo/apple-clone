import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

import { selectShopAndLearns } from '../features/item/itemSlice';
import { selectServices } from '../features/item/itemSlice';
import { selectAccount } from '../features/item/itemSlice';
import { selectAppleStore } from '../features/item/itemSlice';
import { selectForBusiness } from '../features/item/itemSlice';
import { selectForEducation } from '../features/item/itemSlice';
import { selectForHealthcare } from '../features/item/itemSlice';
import { selectForGovernment } from '../features/item/itemSlice';
import { selectAppleValues } from '../features/item/itemSlice';
import { selectAboutApple } from '../features/item/itemSlice';

import { useSelector } from 'react-redux';

function Footer() {

  const ShopAndLearns = useSelector(selectShopAndLearns)
  const Services = useSelector(selectServices)
  const Account = useSelector(selectAccount)
  const AppleStore = useSelector(selectAppleStore)
  const ForBusiness = useSelector(selectForBusiness)
  const ForEducation = useSelector(selectForEducation)
  const ForHealthcare = useSelector(selectForHealthcare)
  const ForGovernment = useSelector(selectForGovernment)
  const AppleValues = useSelector(selectAppleValues)
  const AboutApple = useSelector(selectAboutApple)


  
  return (
    <Wrap>
      <p>
        1. Qualified Purchasers receive Promotion Savings when they purchase an eligible Mac or eligible iPad with eligible AirPods at a Qualifying Location. Only one Promotion Product per eligible Mac or eligible iPad per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers selecting Apple Card Monthly Installments (“ACMI”) as payment type at checkout shall receive a discount equal to the value of the eligible AirPods off the price of the eligible Mac or iPad. This will result in one ACMI installment plan over 12 months for the eligible iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 6 months for the full price of the eligible AirPods. Qualified Purchasers will be charged for all items in their cart, including the eligible AirPods plus any additional Upgrade Cost. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI transactions and are subject to your standard purchase APR. ACMI is subject to credit approval and credit limit. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. See the Apple Card Customer Agreement for more information. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Availability of in-store promotion offerings may be limited by Apple Store location closures as a result of COVID-19. Additional restrictions apply. View full terms and conditions of offer here.<br></br><br></br>
        2. $9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled.<br></br><br></br>
        To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.<br></br><br></br>
        Available for qualifying applicants in the United States.<br></br><br></br>
        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.<br></br><br></br>
        Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
    </p>


      
    <LinkWrapper>
    <AccordionContent>
      <Accordion title = "Shop and Learn" content = {ShopAndLearns}/>
      <Accordion title = "Services" content= {Services}/>
      <Accordion title = " Account" content={Account}/>
      <Accordion title = " Apple Store" content= {AppleStore}/>
      <Accordion title = "For Business" content= {ForBusiness}/>
      <Accordion title = "For Education" content={ForEducation}/>
      <Accordion title = " For Healthcare" content={ForHealthcare}/>
      <Accordion title = " For Government" content={ForGovernment}/>
      <Accordion title = "Apple Values" content= {AppleValues}/>
      <Accordion title = "About Apple" content={AboutApple}/>

   
    </AccordionContent>
      {/* list */}

        <LinkList>
          <ul>
            <h5>Shop and Learn</h5>
            {ShopAndLearns && ShopAndLearns.map((ShopAndLearn, index1) => <li key={index1}>{ShopAndLearn}</li> )}
          </ul>
          <ul>
            <h5>Services</h5>
            {Services && Services.map((Services, index2) => <li key={index2}>{Services}</li> )}

            <h5 style={{paddingTop:"0.8rem"}}>Account</h5>
            {Account && Account.map((Account, index3) => <li key={index3}>{Account}</li> )}
          </ul>
          <ul>
            <h5>Apple Store</h5>
            {AppleStore && AppleStore.map((AppleStore, index4) => <li key={index4}>{AppleStore}</li> )}
          </ul>
          <ul>
            <h5>For Business</h5>
            {ForBusiness && ForBusiness.map((ForBusiness, index5) => <li key={index5}>{ForBusiness}</li> )}
            <h5 style={{paddingTop:"0.8rem"}}>For Education</h5>
            {ForEducation && ForEducation.map((ForEducation, index6) => <li key={index6}>{ForEducation}</li> )}
            <h5 style={{paddingTop:"0.8rem"}}>For Healthcare</h5>
            {ForHealthcare && ForHealthcare.map((ForHealthcare, index7) => <li key={index7}>{ForHealthcare}</li> )}
            <h5 style={{paddingTop:"0.8rem"}}>For Government</h5>
            {ForGovernment && ForGovernment.map((ForGovernment, index8) => <li key={index8}>{ForGovernment}</li> )}
          </ul>
          <ul>
            <h5>Apple Values</h5>
            {AppleValues && AppleValues.map((AppleValues, index9) => <li key={index9}>{AppleValues}</li> )}
            <h5 style={{paddingTop:"0.8rem"}}>About Apple</h5>
            {AboutApple && AboutApple.map((AboutApple, index10) => <li key={index10}>{AboutApple}</li> )}
          </ul>
        </LinkList>
      </LinkWrapper>

      <p style={{width: "100%"}} >More ways to shop:<a href="https://apple-clone-qop.netlify.app/"> Find an Apple Store </a> or <a href="https://apple-clone-qop.netlify.app/"> other retailer</a>  near you. Or call 1-800-MY-APPLE.</p>
      <FooterWrap>
        <p >Copyright © 2021 Apple Inc. All rights reserved.</p>
        <ul>
          <li style={{ borderRight:"0.11rem solid #d6d6d6"}}>Privacy Policy</li>
          <li style={{ borderRight:"0.11rem solid #d6d6d6"}}>Term of Use</li>
          <li style={{ borderRight:"0.11rem solid #d6d6d6"}}>Sales and Refunds</li>
          <li style={{ borderRight:"0.11rem solid #d6d6d6"}}>Legal</li>
          <li >Site Map</li>
        </ul>
        <p>United States</p>
      </FooterWrap>




    </Wrap>
  )
}

export default Footer

const Wrap =styled.div`
  background:#f3f3f3;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin:0rem auto;
  width:100%;
  padding:1rem 18%;
  p{
    padding:1rem 0;
    color:#808080;
    text-align:left;
    font-size:0.8rem;
    border-bottom:0.11rem solid #d6d6d6;
    ;
  }
  @media (max-width:967px){
    padding:1rem 1rem;
  }
  
`
const FooterWrap = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;

  p{
    border:none;
  }
  ul{
    display:flex;

    li{
      font-size:0.8rem;
      color:#6b6b6b;
      cursor:pointer;
      padding:0 0.6rem;
      white-space: no-wrap;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  @media (max-width:1256px){
    flex-direction:column;
    align-items:flex-start;
  }
    
`

const LinkWrapper = styled.div`

width:100%;

`
const LinkList= styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
padding-top:1rem;
@media (max-width:768px){
  display:none;

}
  ul{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    h5{
      color:#5c5c5c;
      font-size:0.8rem;
      font-weight:600;
      text-align:left;
    }
  li{
    font-size:0.7rem;
    text-align:left;
    padding: 0.3rem 0;
    color:#6b6b6b;
    cursor:pointer;
    &:hover{
      text-decoration: underline;
    }
  }
  }
  
`
const AccordionContent = styled.div`
@media (min-width:768px){
  display:none;

}
`

