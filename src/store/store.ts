import { configureStore } from "@reduxjs/toolkit";
import { loadUserFromStorage } from "../middleware/loadUserFromStorage";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});

store.dispatch(loadUserFromStorage());

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
