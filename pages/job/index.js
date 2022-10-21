import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Hero from "../../components/job-content/Hero";
import Features from "../../components/job-content/Features";
import Footer from "../../components/Footer";

export default function Job() {
    return (
        <div className="">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}