// CardSection.tsx
import React from "react";
import { Card } from "@components/card/Card";
import { cardData } from "./cardData.data";

const CardSection: React.FC = () => {
    return (
            <div className="w-full mx-auto flex flex-col gap-[48px]">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-[32px] font-bold text-gray-800 leading-[40px]">
                        Why BitPointX + Optimus AI?
                    </h2>
                    <p className="text-black mt-4">
                        Support systems have evolved, so should you
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-3 gap-[48px] h-[364px]">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
    );
};

export default CardSection;