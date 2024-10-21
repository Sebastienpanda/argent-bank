import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isLoggedIn: boolean;
};

const initialState: UserState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Omit<UserState, "isLoggedIn">>) => {
            const { id, firstName, lastName, email } = action.payload;
            state.id = id;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.isLoggedIn = true;
        },

        updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { setUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
