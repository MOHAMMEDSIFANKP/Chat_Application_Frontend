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
              state: action.payload.state,
              district: action.payload.district,
              place: action.payload.place,
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