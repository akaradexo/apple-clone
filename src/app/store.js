import { configureStore } from '@reduxjs/toolkit';
import shopAndLearnReducer from "../features/item/itemSlice"
import serviceReducer from "../features/item/itemSlice"
import accountReducer from "../features/item/itemSlice"
import appleStoreReducer from "../features/item/itemSlice"
import forBusinessReducer from "../features/item/itemSlice"
import forEducationReducer from "../features/item/itemSlice"
import forHealthcareReducer from "../features/item/itemSlice"
import forGovernmentReducer from "../features/item/itemSlice"
import appleValuesReducer from "../features/item/itemSlice"
import aboutAppleReducer from "../features/item/itemSlice"

export const store = configureStore({
  reducer:{
    shopAndLearn: shopAndLearnReducer,
    service:serviceReducer,
    account:accountReducer,
    appleStore:appleStoreReducer,
    forBusiness:forBusinessReducer,
    forEducation:forEducationReducer,
    forHealthcare:forHealthcareReducer,
    forGovernment:forGovernmentReducer,
    appleValues:appleValuesReducer,
    aboutApple:aboutAppleReducer,
  },
})