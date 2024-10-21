import { login } from "../store/features/auth/authSlice";
import { AppDispatch } from "../store/store";

export const loadUserFromStorage = () => (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const firstname = localStorage.getItem("firstname") || sessionStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname") || sessionStorage.getItem("lastname");

    if (token && firstname && lastname) {
        dispatch(
            login({
                password: token,
                firstname,
                lastname,
                rememberMe: !!localStorage.getItem("token"),
            })
        );
    }
};
