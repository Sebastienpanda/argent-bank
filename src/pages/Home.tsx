import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <Features />
            </main>
            <Footer />
        </>
    );
}
