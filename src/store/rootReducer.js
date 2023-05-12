import React from "react";
import { combineReducers } from "redux";
import allProductsReducer from "src/components/AllProducts/reducer";
import cartReducer from "./reducer"

const appReducer = combineReducers({
    allProductsReducer,
    cartReducer
})

const rootReducer = (state = {}, action) => {
    return appReducer(state, action);
  };
  
  export default rootReducer;