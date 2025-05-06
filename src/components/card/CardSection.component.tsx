import React from "react";
import { Card } from "@components/card/Card";
import { cardData } from "./cardData.data";

const CardSection: React.FC = () => {
    return (
        <section className="bg-[#F1F6FE] w-full py-16 px-4">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Why BitPointX + Optimus AI
                </h2>
                <p className="text-gray-600 mt-4">
                    Support systems have evolved, so should you
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
