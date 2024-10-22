import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/features/user/userSlice";
import { RootState } from "../store/store";
import Transaction from "./transactions/Transaction";

export default function Profile() {
    const user = useSelector((state: RootState) => state.user);
    const token = useSelector((state: RootState) => state.auth.token);
    const [display, setDisplay] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ firstName, lastName }),
            });
            if (response.ok) {
                const data = await response.json();
                const firstName = data.body.firstName;
                const lastName = data.body.lastName;
                dispatch(updateUser({ firstName, lastName }));
                setDisplay(!display);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="header">
                {display ? (
                    <>
                        <h1>
                            Welcome back
                            <br /> {user.firstName} {user.lastName}!
                        </h1>
                        <button className="edit-button" onClick={() => setDisplay(!display)}>
                            Edit Name
                        </button>
                    </>
                ) : (
                    <div>
                        <h1>Edit User Infos</h1>
                        <form noValidate>
                            <div className="containerForm">
                                <div className="edit-input">
                                    <label htmlFor="firstName">FirstName:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        defaultValue={user.firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                    />
                                </div>
                                <div className="edit-input">
                                    <label htmlFor="lastName">LastName:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        defaultValue={user.lastName}
                                        onChange={(event) => setlastName(event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="containerBtn">
                                <button className="edit-button" onClick={handleSubmit}>
                                    Save
                                </button>
                                <button className="edit-button" onClick={() => setDisplay(!display)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <Transaction />
        </>
    );
}
