import Footer from "../components/Footer";
import Header from "../components/Header";
import Signin from "../components/Signin";

export default function SigninPage() {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <Signin />
            </main>
            <Footer />
        </>
    );
}
