import React from 'react'
import styled from 'styled-components'


function Section({name,title,availability,backgroundImg,leftBtnText,rightBtnText,arrow,series,nameColor,nameTitle,icon}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <InfoText>
        <h1 style={{color: `${nameColor}`}}>{icon}{name}</h1>
        <h2>{series}</h2>
        <h3 style={{color: `${nameTitle}`}}>{title}</h3>
        <p>{availability}</p>
      </InfoText>
      <ButtonWrap>
        <LeftButton>
          <p><a href="#">{leftBtnText}</a> {arrow}</p> 
        </LeftButton> 
        { rightBtnText && 
          <RightButton>
          <p><a href="#">{rightBtnText}</a> {arrow}</p> 
        </RightButton> 
        }
      </ButtonWrap>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width : 100vw;
  height: 85vh;
  margin: 1rem 0 ;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-item:center;
  background-image: ${props => `url('/images/${props.bgImage}')`};
`
const InfoText =styled.div`
text-align:center;
margin-top:4rem;
h1{
  font-size:3.2rem;
  font-weight:700;
  
}
h3{
  font-size:1.8rem;
  font-weight:400;
}
h2{
  font-size:1.1rem;
  font-weight:700;
  letter-spacing:0.2rem;
  text-transform:uppercase;
  color:red;
}
p{
  color:grey;
  font-size:1.1rem;
}
`
const ButtonWrap = styled.div`
  display:flex;
  justify-content:center;
  align-item:center;

  p{
    color: #227bbb;
    font-size:1.2rem;
    margin:0.6rem 1.6rem;
  }
`
const LeftButton = styled.div``
const RightButton = styled.div``
