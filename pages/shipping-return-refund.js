import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import FooterBar from "../components/common/FooterBar";

export default function ShippingAndRefund() {
    return (
        <>
            <Head>
                <title>Shipping, Returns & Refunds | SV Cart</title>
            </Head>
            <Cart />
            <Navbar />
            
            <FooterBar />
            <Footer />
        </>
    );
}