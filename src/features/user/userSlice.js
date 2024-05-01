import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const themes = {
  winter: "winter",
  dracula: "dracula",
}
const getUserFromls = ()=>{
   return localStorage.getItem("user") || null;
   
}
const getThemeFromLS = () => {
  const theme =  localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme)
  return theme
};
const initialState = {
  user: getUserFromls(),
  theme: getThemeFromLS(),
};
const userSlice= createSlice({
    name: "user",
    initialState,
    reducers:{
        loginUSer:(state, action)=>{
            const user = {...action.payload.user, token:action.payload.jwt} 
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
        },
        logoutUser:(state)=>{
            state.user = null
            localStorage.removeItem("user")
            toast.success("logged out")
        },
        changeTheme:(state)=>{
            const {dracula, winter} = themes
            state.theme = state.theme === dracula ? winter : dracula
            document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem("theme", state.theme)
        }
    }
})

export const {loginUSer,logoutUser,changeTheme}= userSlice.actions

export default userSlice.reducer    