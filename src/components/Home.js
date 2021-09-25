import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { Apple } from '@material-ui/icons'
import { PlayCircleFilled } from '@material-ui/icons';
import GridSection from './GridSection'
import { Navbar } from './navbar';
import Tag from './Tag'
import Footer from './Footer';

function Home() {
  return (
    
    <Container>
    <Navbar />
    <Tag/>
      <Section 
        name="iPhone 13 Pro"
        title="Oh. So. Pro."
        availability="Available starting 9.24"
        backgroundImg="cover-1.jpg"
        leftBtnText = "Learn more"
        rightBtnText= "Pre-order"
        arrow="&gt;"
      />
      <Section 
        name="iPhone 13"
        title="Your new superpower."
        availability="Available starting 9.24"
        backgroundImg="cover-2.jpg"
        leftBtnText = "Learn more"
        rightBtnText= "Pre-order"
        arrow="&gt;"
        nameColor="white"
        nameTitle="pink"
      />
      <Section 
        icon = {<Apple fontSize="large"/>}
        name =  "WATCH"
        series="Series 7"
        title="Full screen ahead."
        availability="Available later this fall"
        backgroundImg="cover-3.jpg"
        leftBtnText = "Learn more"
        arrow="&gt;"
      />
      <GridSection 
        name1 =  "Buy a Mac or iPad for college. Get AirPods."
        backgroundImg1="g-1.jpg"
        leftBtnText1 = "Save with education pricing"
        arrow1="&gt;"

        name2 =  "iPad mini"
        title2="Mega power. Mini sized."
        availability2="Available starting 9.24"
        backgroundImg2="g-2.jpg"
        leftBtnText2 = "Learn more"
        rightBtnText2= "Order"
        arrow2="&gt;"
      />
      <GridSection 
        name1 =  "iMac"
        title1="Say hello."
        backgroundImg1="g-3.jpg"
        leftBtnText1 = "Learn more"
        rightBtnText1 = "Buy"
        arrow1="&gt;"

        name2 =  "Fitness+"
        icon2 = {<Apple fontSize="medium"/>}
        title2="Pilates, Group Workouts, and guided Meditation coming soon."
        backgroundImg2="g-4.jpg"
        leftBtnText2 = "Learn more"
        rightBtnText2= "Try it free ↗"
      />
      <GridSection 
        name1 =  "Card"
        icon1 = {<Apple fontSize="medium"/>}
        title1="Get up to 3% Daily Cash back with every purchase"
        backgroundImg1="g-5.jpg"
        leftBtnText1 = "Learn more"
        rightBtnText1 = "Apply now"
        arrow1="&gt;"

        name2 =  "tv+"
        playicon= {<PlayCircleFilled fontSize="small"/>}
        nameColor2="white"
        icon2 = {<Apple fontSize="medium"/>}
        backgroundImg2="g-6.jpg"
        showUrl = "./images/tms.png"
        showtitle="Stream the new season "
      />
      <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index:-1;
`
