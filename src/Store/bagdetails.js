
import { createSlice} from "@reduxjs/toolkit"

const bagdetails=createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addtobag:(store,action) =>{
      store.push(action.payload);
    },
    removefrombag:(store,action) =>{
    return store.filter(itemId=> itemId!== action.payload);
    }
  }
  });

export const bagactions=bagdetails.actions;
export default bagdetails;