import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";

export default function Navigation() {
    return (
        <nav className="main-nav">
            <Link className="logo" to="/">
                <img className="image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="item" to="/signin">
                    <FaUserCircle />
                    Sign In
                </Link>
            </div>
        </nav>
    );
}
