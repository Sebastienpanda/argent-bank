import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";
import { logout } from "../store/features/auth/authSlice";
import { RootState } from "../store/store";

export default function Navigation() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };
    return (
        <nav className="main-nav">
            <Link className="logo" to="/">
                <img className="image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user.isLoggedIn ? (
                    <>
                        <Link className="item" to="/profile">
                            <FaUserCircle />
                            {user.firstName}
                        </Link>
                        <Link className="item" to="/" onClick={handleLogout}>
                            <FaSignOutAlt />
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <Link className="item" to="/signin">
                        <FaUserCircle />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}
