import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Transaction from "./transactions/Transaction";

export default function Profile() {
    const user = useSelector((state: RootState) => state.user);

    return (
        <>
            <div className="header">
                <h1>
                    Welcome back
                    <br /> {user.firstName} {user.lastName}!
                </h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <Transaction />
        </>
    );
}
