import { Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SigninPage from "./pages/Signin";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
        </>
    );
}
