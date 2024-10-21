import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../components/Profile";
import { setUser } from "../store/features/user/userSlice";
import { RootState } from "../store/store";

export default function ProfilePage() {
    document.title = "Argent Bank - Profile";
    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/profile`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data.body);
                        dispatch(
                            setUser({
                                id: data.body.id,
                                firstName: data.body.firstName,
                                lastName: data.body.lastName,
                                email: data.body.email,
                            })
                        );
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <main className="main bg-dark">
            <Profile />
        </main>
    );
}
