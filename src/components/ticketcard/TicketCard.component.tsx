import Button from "@components/navbar/Button";
import { ArrowUpRight } from 'lucide-react';

const TicketCard = () => {
  return (
    <section className="bg-[#f5fef1] w-full py-8 px-4"> {/* Reduced py-16 to py-8 */}
      <div className="grid grid-cols-2 grid-rows-6 gap-y-4 items-start justify-items-center max-w-7xl mx-auto"> {/* Added gap-y-4 */}
        {/* Row 1 - Title */}
        <div className="col-span-1 row-span-1 justify-self-start">
          <h1 className="text-7xl md:text-5xl font-bold text-black ">
            How it Works
          </h1>
        </div>

        {/* Row 1 - Subtitle and Button */}
        <div className="col-span-1 row-span-1 flex flex-col items-start gap-3 justify-self-end"> {/* Added gap-2 */}
          <p className="text-lg md:text-xl text-dark">
            From Ticket to Resolution — in Record Time
          </p>
          <Button variant="gradient" text="See Optimus AI in Action" />
        </div>

        {/* Row 2 - Step 1 Card */}
        <div className="col-span-1 row-span-1 justify-self-start">
          <div className="flex flex-col w-[354px] "> {/* Added gap-2 */}
            <div className="w-[94px] h-[40px] bg-[#EEE8FF] rounded-lg flex items-center justify-center">
              <span className="text-black text-xl font-medium">Step 1</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-black">Smart</h3>
                <h3 className="text-2xl font-bold text-black">Ticket Capture</h3>
              </div>
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>

            <p className="text-gray-600">
              Email or portal-based ticket creation, with SLA auto-tagging and prioritisation
            </p>
          </div>
        </div>

        {/* Row 2 - Visual Element */}
        <div className="col-span-1 row-span-1 w-[894px] h-[240px] bg-purple-100 rounded-[384px] flex items-center justify-center">
          <span className="text-dark text-xl">Your Content Here</span>
        </div>

        {/* Horizontal divider */}
        <div className="col-span-2 w-full border-t border-gray-200 "></div> {/* Reduced my-4 to my-2 */}
        
      </div>
    </section>
  );
};

export default TicketCard;