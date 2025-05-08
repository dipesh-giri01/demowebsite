import Button from "@components/navbar/Button";
import StepBlock from "./StepBlock.component";

const TicketCard = () => {
  return (
    <div className="bg-white w-full  py-16 px-8">
      {/* Header Section */}
      <div
        className="flex w-full h-[178.375px] gap-[200.86px]"
      >
        {/* Left Side - Heading */}
        <div className="w-full h-[72px]">
          <h1 className="text-4xl font-bold text-black">How it Works</h1>
        </div>

        {/* Right Side - Text + Button */}
        <div
          className="flex flex-col pt-[15px] pr-[72.94px] pb-[48.81px] gap-[24.56px] w-[640px] h-[178.375px]"
        >
          <p className="text-lg text-gray-700">
            From Ticket to Resolution — in Record Time
          </p>
          <Button variant="gradient" text="See Optimus AI in Action" />
        </div>
      </div>
      <div>
        <StepBlock
          stepNumber="Step 1"
          titleLine1="Smart"
          titleLine2="Ticket Capture"
          description="Email or portal-based ticket creation, with SLA auto-tagging and prioritisation"
          visualContent={<span className="text-xl text-gray-800">Visual Content</span>}
        />
        <div className="w-full h-[1px] bg-black mt-[50px]"></div>
      </div>
    </div>
  );
};

export default TicketCard;