import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Components
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const ebmFont = localFont({
    src: [
        {
            path: "../public/fonts/CELTG___.ttf"
        }
    ],
    variable: "--ebm-font"
});

const keywords = [
    "Motorcycle Ministry",
    "Christian Motorcycle Ministry",
    "Motorcycle Outreach",
    "Faith-Based Motorcycle Club",
    "Biker Ministry",
    "Motorcycle Charity Events",
    "Christian Motorcycle Riders",
    "Motorcycle Brotherhood",
    "Community Outreach Ministry",
    "Motorcycle Charity Rides",
    "Veterans Motorcycle Support",
    "Faith in Action",
    "Serving Communities with Motorcycles",
    "Motorcycle Fundraisers",
    "Local Motorcycle Charity",
    "Christian Fellowship Rides",
    "Motorcycle Ministry for Outreach",
    "Helping the Needy with Motorcycles",
    "Christian Biker Brotherhood",
    "Motorcycle Missions and Outreach",
    "Greeley Motorcycle Ministry",
    "Colorado Biker Charity Events",
    "Colorado Christian Motorcycle Group",
    "Greeley Motorcycle Outreach Programs",
    "Colorado Motorcycle Outreach Programs",
    "Motorcycle Riders for Christ",
    "Christian Biker Fellowship",
    "Motorcycle Evangelism",
    "Biker Church Events",
    "Motorcycle Mission Trips",
    "Riding with Purpose",
    "Spreading Hope through Motorcycles",
    "Motorcycle Ministry Outreach Programs",
    "Motorcycle Riders Helping Others",
    "Faith-Based Motorcycle Events",
    "How to start a motorcycle ministry",
    "Motorcycle charity events for veterans",
    "Christian motorcycle groups near me",
    "Motorcycle ministry for local communities",
    "Motorcycle ministry charity outreach rides"
];

export const metadata: Metadata = {
    title: "Eternal Brothers MM",
    description: "Eternal Brothers Motorcycle Ministry is a passionate brotherhood of riders dedicated to serving communities, spreading hope, and living out our faith through local outreach and charity events. Join us as we ride with purpose and serve with heart.",
    keywords
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`w-full h-screen flex flex-col antialiased ${ebmFont.variable}`}
            >
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
