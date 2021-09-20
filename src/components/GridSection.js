import React from 'react'
import styled from 'styled-components'

function GridSection({name1,title1,availability1,backgroundImg1,leftBtnText1,rightBtnText1,arrow1,series1,nameColor1,nameTitle1,icon1,icon2, name2,title2,availability2,backgroundImg2,leftBtnText2,rightBtnText2,arrow2,series2,nameColor2,nameTitle2,showUrl,showtitle,playicon}) {
  return (
    <Grid>
      <Wrap bgImage={backgroundImg1}>
        <GWrapper>
          <InfoText>
            <h1 style={{color: `${nameColor1}`}}>{icon1}{name1}</h1>
            <h2>{series1}</h2>
            <h3 style={{color: `${nameTitle1}`}}>{title1}</h3>
            <p>{availability1}</p>
          </InfoText>
          <ButtonWrap>
            <LeftButton>
              <p><a href="#">{leftBtnText1}</a> {arrow1}</p> 
            </LeftButton> 
            { rightBtnText1 && 
              <RightButton>
              <p><a href="#">{rightBtnText1}</a> {arrow1}</p> 
            </RightButton> 
            }
          </ButtonWrap>
        </GWrapper>
        
      </Wrap>

      <Wrap bgImage={backgroundImg2}>
        <GWrapper>
          <InfoText>
            <h1 style={{color: `${nameColor2}`}}>{icon2}{name2}</h1>
            <h2>{series2}</h2>
            <h3 style={{color: `${nameTitle2}`}}>{title2}</h3>
            <p>{availability2}</p>
          </InfoText>
          <ButtonWrap>
            <LeftButton>
              <p><a href="#">{leftBtnText2}</a> {arrow2}</p> 
            </LeftButton> 
            { rightBtnText2 && 
              <RightButton>
              <p><a href="#">{rightBtnText2}</a> {arrow2}</p> 
            </RightButton> 
            }
          </ButtonWrap>
        </GWrapper>
        <Show>
            <img src = {showUrl} />
            <a href="#">{showtitle}	&nbsp; {playicon}</a>
        </Show>
      </Wrap>
    </Grid>
  )
}

export default GridSection
const Grid = styled.div`
display: grid;
grid-gap: 0.8rem;
grid-template-columns: 1fr 1fr;
margin:0.8rem;

@media (max-width:768px){
grid-template-columns: 1fr;
  
}
`
const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width:100%;
  height:65vh;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-image: ${props => `url('/images/${props.bgImage}')`};
 

`
const InfoText =styled.div`
text-align:center;
margin-top:2rem;
h1{
  font-size:2rem;
  font-weight:700;

}
h3{
  font-size:1.1rem;
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
  font-size:0.8rem;

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
const GWrapper = styled.div`
`
const Show = styled.div`
a{
  display:flex;
  justify-content:center;

}
  img{
    width:40%;
    margin:0 auto;
    padding:0.8rem;
  }
  display:flex;
  flex-direction:column;
  margin-bottom:2rem;
`
