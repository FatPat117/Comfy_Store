import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        user: {
                userName: "Pitachiti",
        },
        theme: "dracula",
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
                },
                toggleTheme: (state) => {
                        state.theme = state.theme === "dracula" ? "light" : "dracula";
                },
        },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
