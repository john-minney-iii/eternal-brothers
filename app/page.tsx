import type { NextPage } from "next";

// Components
import AboutUs from "@/src/components/AboutUs";
import HowCanYouHelp from "@/src/components/HowCanYouHelp";
import Gallery from "@/src/components/Gallery";
import ContactUs from "@/src/components/ContactUs";

const LandingPage: NextPage = () => {
    return (
        <div className="w-full h-full">
            <section id="about-us">
                <AboutUs />
            </section>
            <section id="how-can-you-help">
                <HowCanYouHelp />
            </section>
            <section id="gallery">
                <Gallery />
            </section>
            <section id="contact-us">
                <ContactUs />
            </section>
        </div>
    );
};

export default LandingPage;
