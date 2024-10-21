import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    token: string | null;
    rememberMe: boolean;
};

type LoginPayload = {
    token: string;
    rememberMe: boolean;
};

const initialState: AuthState = {
    token: null,
    rememberMe: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.token = action.payload.token;
            state.rememberMe = action.payload.rememberMe;

            const storage = state.rememberMe ? localStorage : sessionStorage;

            storage.setItem("token", state.token);
        },
        logout(state) {
            state.token = null;
            state.rememberMe = false;

            sessionStorage.clear();
            localStorage.clear();
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
