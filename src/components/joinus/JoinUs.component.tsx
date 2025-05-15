import join from "@assets/joinus.png"
import Button from "@components/navbar/Button"
export default function Join() {
    return (
        <div className="w-full bg-white flex justify-center items-center py-10">
            <div className="relative w-full max-w-screen-xl">
                {/* Image */}
                <img
                    src={join}
                    alt="Join Us"
                    className="w-full h-auto rounded-2xl object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center h-5">
                    {/* Row 1 */}
                    <div className="w-full h-12 text-white rounded-lg flex flex-col justify-center items-center gap-2 px-4">
                        <div className="w-full text-center">
                            <h1 className="text-xl font-bold">Ready to Supercharge Your Support Team?</h1>
                        </div>
                        <div className="w-full text-center">
                            <p className="text-base">Join the next generation of smart IT support powered by Optimus AI.</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="w-[1001px] h-[58px] flex gap-4 rounded-lg justify-center items-center">
                        <Button variant="black" text="Start Free Trial" />
                        <Button variant="white" text="Book a Demo" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}
