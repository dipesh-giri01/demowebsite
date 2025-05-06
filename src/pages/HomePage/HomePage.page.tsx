import Navbar from "@components/navbar/Navbar"
import Info from "@assets/img_1.png"
import CardSection from "@components/card/CardSection.component"
import Button from "@components/navbar/Button"

const HomePage = () => {
    return (
        <>
            <Navbar />

            {/* Gap after navbar */}
            <div className="h-[50px]" />

            <div className="flex flex-col justify-center min-h-screen bg-white-100 p-8">
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center space-y-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-black">Transform Your Support with</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#785CF5] to-[#6CBCF4] bg-clip-text text-transparent">
                            AI-Powered Efficiency
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-800">
                        BitpointX combines smart ticketing with Optimus AI to automate IT
                        support, accelerate ticket resolution, and empower your team.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="gradient" text="Contact Sales" />
                        <Button variant="border-gradient" text="Register for Demo" />
                    </div>

                    <div className="flex justify-center max-w-7xl mt-8 bg-blue-100">
                        <img
                            src={Info}
                            alt="Illustration"
                            className="max-w-1000 h-auto object-contain rounded-t-[96px]"
                        />
                    </div>
                </div>
            </div>

            {/* Move outside constrained div */}
            <CardSection />

            <div className="text-gray-500 mt-8 text-center">TicketCard</div>
        </>
    )
}


export default HomePage
