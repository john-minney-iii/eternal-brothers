import type { FC } from "react";
import Image from "next/image";
import ebmPic from "@/public/images/ebm-1corinthians-3-16.jpg"

const HowCanYouHelp: FC = () => {
    return (
        <div className="w-full flex flex-col md:flex-row bg-zinc-300">
            <div className="w-full md:w-[50%] flex items-center justify-center px-5 pb-4 md:pb-0 md:pl-10 z-50">
                <div className="flex flex-col bg-white p-7 gap-y-3 shadow-xl overflow-visible -mt-16 md:mt-0 md:-mr-16">
                    <div className="pb-1 border-b border-ebm-red">
                        <h2 className="text-ebm-red md:text-5xl text-4xl font-ebm-font">How Can You Help?</h2>
                    </div>
                    <p className="text-lg">
                        To fully fund all of our programs and services, it currently takes about $30,000 annually, but we&apos;re looking to expand our impact and
                        need your support. Our goals include tripling the size of our food bank, at a cost of $40,000 for 250,000 pounds of food, increasing our
                        holiday meal offerings to provide 1,000 meals at $20 each for $20,000, and serving 200 children with Christmas presents, costing $20,000.
                        Additionally, we aim to grow our needs fulfillment program, which requires another $40,000, and secure larger warehouse space to accommodate
                        our operations—currently in an 800 sq ft building—by acquiring a 5,000+ sq ft space, with annual costs ranging from $24,000 to $48,000. We also
                        aspire to build a multi-functional center, which will serve as a retreat, ranch, animal sanctuary, and domestic violence shelter, requiring land
                        acquisition and collaboration with over 30 other nonprofits. Finally, we&apos;re excited to develop a robust program for our Veterans, integrated with
                        the Burgundy Cross Ranch, to support those who have fallen on hard times.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-[50%] flex items-center justify-center p-5 z-10">
                <Image
                    src={ebmPic.src}
                    alt="Motorcycles"
                    width={1000}
                    height={1000}
                    priority
                />
            </div>
        </div>
    );
};

export default HowCanYouHelp;
