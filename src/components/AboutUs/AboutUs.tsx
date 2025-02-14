import type { FC } from "react";
import Image from "next/image";
import ebmPic from "@/public/images/ebm-about-us.jpg";

const AboutUs: FC = () => {
    return (
        <div
            className="w-full flex flex-col md:flex-row bg-zinc-300"
        >
            <div className="w-full md:w-[50%] flex items-center justify-center">
                <Image
                    src={ebmPic.src}
                    alt="Motorcycles"
                    width={1000}
                    height={1000}
                    priority
                />
            </div>
            <div className="w-full md:w-[50%] flex items-center justify-center px-5 pb-4 md:pb-0 md:pr-10">
                <div className="flex flex-col bg-white p-7 gap-y-3 shadow-lg overflow-visible -mt-16 md:mt-0 md:-ml-16">
                    <div className="pb-1 border-b border-ebm-red">
                        <h2 className="text-ebm-red md:text-5xl text-4xl font-ebm-font">About Us</h2>
                    </div>
                    <p className="text-lg">
                        Eternal Brothers is a 501(c)(3) non-profit organization founded in April 2009 by a group of men from diverse backgrounds,
                        united by a shared mission to serve others and reflect the love of Christ. Our ministry is committed to meeting the physical,
                        emotional, and spiritual needs of our communities, driven by our faith in Jesus Christ. We operate a variety of outreach programs, including food and clothing banks
                        to provide essential resources to those in need. We also offer 24/7 need fulfillment, ensuring that clothing, food, and other
                        necessities are available at any time. Our community outreach spans multiple areas, where we actively engage with local
                        populations to offer support, encouragement, and the message of hope. Additionally, we provide confidential counseling
                        services for those facing personal struggles, and our 24-hour emergency hotline is available to respond to urgent needs,
                        offering immediate assistance to those in crisis. Throughout the year, we host various events designed to bring people together
                        in fellowship and service, demonstrating Christs love through action. We believe in the power of
                        brotherhood and are committed to making a lasting impact, building a compassionate community centered around faith and hope.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
