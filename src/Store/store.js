import {configureStore} from "@reduxjs/toolkit"
import itemdetails from "./itemdetails";
import bagdetails from "./bagdetails";

const appstore=configureStore({
  reducer:{
    items:itemdetails.reducer,
    bag:bagdetails.reducer
  }
})


export default appstore;