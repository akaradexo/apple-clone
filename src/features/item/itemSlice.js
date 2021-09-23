import { createSlice } from "@reduxjs/toolkit";


const initialState={
  shopAndLearns : [ "Mac","iPad","iPhone","Watch","TV","Music","AirPods","HomePod","iPod touch","AirTag","Accessories","Gift Cards" ] ,

  services : ["Apple Music","Apple TV+","Apple Fitness+","Apple News+","Apple Arcade","iCloud","Apple One","Apple Card","Apple Books","Apple Podcasts","App Store"] ,

  account : ["Manage Your Apple ID","Apple Store Account","iCloud.com"]  ,

  appleStore : [
    "Find a Store","Shop Online","Genius Bar", "Today at Apple","Apple Camp","Apple Store App"," Refurbished and Clearance","Financing", "Apple Trade In", "Order Status"," Shopping Help"] ,
  
  forBusiness:["Apple and Business","Shop for Business"] ,
 
  forEducation:["Apple and Education","Shop for K-12","Shop for College"] ,

  forHealthcare:["Apple in Healthcare","Health on Apple Watch","Health Records on iPhone"] ,

  forGovernment:["Shop for Government","Shop for Veterans and Military"] ,

  appleValues: ["Accessibility","Education", "Environment", "Inclusion and Diversity","Privacy","Racial Equity and Justice","Supplier Responsibility"] ,

  aboutApple: ["Newsroom","Apple Leadership","Career Opportunities","Investors", "Ethics & Compliance","Events","Contact Apple"],

 
}

const itemSlice = createSlice({
  name: ("shopAndLearn","service","account","appleStore","forBusiness","forEducation","forHealthcare","forGovernment","appleValues","aboutApple"),
  initialState,
  reducers:{}
})

export const selectShopAndLearns = state => state.shopAndLearn.shopAndLearns;

export const selectServices = state => state.service.services;

export const selectAccount = state => state.account.account;

export const selectAppleStore = state => state.appleStore.appleStore;

export const selectForBusiness = state => state.forBusiness.forBusiness;

export const selectForEducation = state => state.forEducation.forEducation;

export const selectForHealthcare = state => state.forHealthcare.forHealthcare;

export const selectForGovernment = state => state.forGovernment.forGovernment;

export const selectAppleValues = state => state.appleValues.appleValues;

export const selectAboutApple = state => state.aboutApple.aboutApple;




export default itemSlice.reducer;