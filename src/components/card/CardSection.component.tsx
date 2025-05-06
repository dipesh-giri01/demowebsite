// @components/card/CardSection.tsx
import React from "react";
import { Card } from "@components/card/Card"; // Import Card component
import { cardData } from "./cardData.data"; // Import card data

const CardSection: React.FC = () => {
    return (
        <div className="bg-[#F1F6FE] w-full py-12"> {/* Full width color background */}

            {/* Text Section */}
            <div className="text-center mb-8"> {/* Text section */}
                <h2 className="text-3xl font-bold">Why BitPointX + Optimus AI</h2>
                <p className="text-gray-700 mt-2">Support systems have evolved, so should you</p>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center gap-8"> {/* Centered cards with equal gaps */}
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="w-[408px] h-[364px] bg-white p-8 rounded-lg shadow-lg"
                    >
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
