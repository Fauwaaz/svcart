import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import FooterBar from "../components/common/FooterBar";

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Terms & Conditions | SV Cart</title>
            </Head>
            <Cart />
            <Navbar />
            <FooterBar />
            <Footer />
        </>
    );
}