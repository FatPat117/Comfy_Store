import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
        winter: "winter",
        dracula: "dracula",
};

const getThemefromLocalStorage = () => {
        const theme = localStorage.getItem("theme");
        document.documentElement.setAttribute("data-theme", theme);
        return theme ? theme : themes.winter;
};

const initialState = {
        user: {
                userName: "Pitachiti",
        },
        theme: getThemefromLocalStorage(),
};

const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
                loginUser: (state, action) => {
                        state.user = action.payload;
                },
                logoutUser: (state) => {
                        state.user = null;
                        localStorage.removeItem("user");
                        toast.success("Logged out successfully");
                },
                toggleTheme: (state) => {
                        const { dracula, winter } = themes;
                        state.theme = state.theme === dracula ? winter : dracula;
                        document.documentElement.setAttribute("data-theme", state.theme);
                        localStorage.setItem("theme", state.theme);
                },
        },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
