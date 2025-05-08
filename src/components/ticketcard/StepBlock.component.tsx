import { ArrowUpRight } from "lucide-react";

interface StepBlockProps {
  stepNumber: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  visualContent: React.ReactNode;
  pillColor?: string;   // Custom color for the pill
  visualBgColor?: string; // Custom background color for visual content
}

const StepBlock: React.FC<StepBlockProps> = ({
  stepNumber,
  titleLine1,
  titleLine2,
  description,
  visualContent,
  pillColor = "#EEE8FF", // default color
  visualBgColor = "#D8C8FF", // default color
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        {/* Step Pill */}
        <div
          className="w-[94px] h-[40px] pt-[8px] pb-[8px] px-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: pillColor }}
        >
          <span className="text-sm font-medium">{stepNumber}</span>
        </div>

        {/* Title + Arrow */}
        <div className="flex flex-col w-[354px] h-[151px]">
          <div className="flex items-center text-2xl font-bold space-x-24">
            <span>{titleLine1}</span>
            <ArrowUpRight className="ml-2 w-14 h-10 mt-1" />
          </div>
          <span className="text-2xl font-bold">{titleLine2}</span>

          {/* Description */}
          <p className="text-gray-600 max-w-md mt-[4px]">{description}</p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-[700px] h-[240px] rounded-[384px] flex items-center justify-center"
        style={{ backgroundColor: visualBgColor }}
      >
        {visualContent}
      </div>
    </div>
  );
};

export default StepBlock;
