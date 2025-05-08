import Navbar from "@components/navbar/Navbar"
import CardSection from "@components/card/CardSection.component"
import HomeInfo from "@components/home/HomeInfo.component"
import TicketCard from "@components/ticketcard/TicketCard.component"
import FeatureBlock from "@components/feature/FeatureBlock.component"
import Footer from "@components/footer/Footer.component"
//import SpotLight from "@components/spotlight/Spotlight.component"
import logo from "@assets/img_1.png"

const HomePage = () => {
    return (
        <>
            {/* Navbar + Home Info */}
            <div className="w-full min-h-[1163px] mt-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[300px]">
                <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-16">
                    <Navbar />
                </div>
                <div className="w-full flex flex-col items-center justify-center mt-[109px]">
                    <HomeInfo />
                </div>
            </div>

            {/* Card Section */}
            <div className="bg-[#F1F6FE] w-full py-[120px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[300px] mt-[120px]">
                <div className="w-full flex flex-col gap-12 max-w-screen-xl mx-auto">
                    <CardSection />
                </div>
            </div>

            {/* Ticket Section */}
            <div className="bg-white w-full py-[120px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[300px] mt-[120px]">
                <div className="w-full flex flex-col gap-12 max-w-screen-xl mx-auto">
                    <TicketCard />
                </div>
            </div>

            {/* Features Overview Section */}
            <div className="bg-[#F1F6FE] w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[300px]">
                <div className="w-full flex flex-col gap-[50px] max-w-screen-xl mx-auto">
                    {/* Section Title */}
                    <div className="w-full h-[150px] flex items-center justify-center text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-[#785CF5] to-[#6CBCF4] bg-clip-text text-transparent">
                                Features Overview
                            </span>
                        </h1>
                    </div>

                    {/* Content Box */}
                    <div
                        className="bg-white w-full min-h-[3226px] py-[120px] px-6 sm:px-8 md:px-10 lg:px-[61px] flex flex-col gap-[48px] shadow-[32px_40px_73.5px_0px_#F4F4F4] rounded-lg"
                    >
                        <div>
                            <h2>Built for Speed, Powered by Intelligence</h2>
                        </div>
                        <div className="w-full h-[2930px] flex-col items-center justify-center">
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={true}
                                />
                            </div>
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={false}
                                />
                            </div>
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={false}
                                />
                            </div>
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={false}
                                />
                            </div>
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={false}
                                />
                            </div>
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={false}
                                />
                            </div>
                            <div className="w-full h-[350px] gap-[36px]">
                                <FeatureBlock
                                    title="Client Portal Access"
                                    description="Affordable, scalable IT support without heavy lifting."
                                    imageSrc={logo}
                                    reverse={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            <div className="w-full h-124">
                <Footer />
            </div>

        </>
    )
}

export default HomePage
