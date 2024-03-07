import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:{
        name:"",
        image:"",
        buttonVisible:null
    }
}

// const fetchData = createAsyncThunk(
//     ""
// )

const aboutSlice = createSlice({
    name:"about",
    initialState,
    reducers:{
        updateHome:(state,action)=>{
            state.data = {name:"ONE STOP DIGITAL SOLUTION", image:"./Images/mranand1.webp",buttonVisible:""}
        },

        updateAbout:(state, action)=>{
            state.data = {name:"Pranav Portfolio",image:"./Images/about2.svg",buttonVisible:"hidden"}
        }
        

    }
})

export const {updateAbout,updateHome} = aboutSlice.actions

export default aboutSlice.reducer
