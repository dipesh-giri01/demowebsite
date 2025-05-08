import Info from "@assets/img_1.png";
import Button from "@components/navbar/Button";

const HomeInfo = () => {
    return (
        <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
            {/* Text Content Container - Exact 871px width */}
            <div className="w-full max-w-[871px] flex flex-col items-center gap-[54px] mb-[54px] min-h-[328px]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
                    <span className="text-black">Transform Your Support with</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#785CF5] to-[#6CBCF4] bg-clip-text text-transparent">
                        AI-Powered Efficiency
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-800 w-full max-w-[700px] text-center">
                    BitpointX combines smart ticketing with Optimus AI to automate IT
                    support, accelerate ticket resolution, and empower your team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button variant="gradient" size="medium" text="Contact Sales" />
                    <Button variant="border-gradient" size="medium" text="Register for Demo" />
                </div>
            </div>

            {/* Image Container - Exact 1200px width */}
            <div className="relative w-full max-w-[1200px] h-[557.55px] rounded-t-[48px] overflow-hidden">
                <img
                    src={Info}
                    alt="Illustration"
                    className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(118, 110, 245, 0.2) 100%)'
                    }}
                />
            </div>
        </div>
    )
}

export default HomeInfo;