import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserInfo: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.UserInfo= action.payload.UserInfo;
          },
          UpdateUserDetails: (state, action) =>{
            state.UserInfo = {
              ...state.UserInfo,
              first_name: action.payload.first_name,
              last_name: action.payload.last_name,
              email: action.payload.email,
              profile_image: action.payload.profile_image,
                
            };
          },
          LogoutDetails: (state, action) => {
            state.UserInfo = {};
          },
    }
})

export const {
    setUserDetails,
    UpdateUserDetails,
    LogoutDetails,
} = userSlice.actions;
export default userSlice.reducer;