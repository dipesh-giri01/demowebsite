import React from "react";

type TitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleClass?: string;
  subtitleClass?: string;
  gradient?: boolean;
  highlightWords?: { words: string[]; color: string }; // New prop for highlighted words
  singleColor?: string; // New prop for single color text
};

const Text: React.FC<TitleProps> = ({
  title,
  subtitle,
  align = "center",
  titleClass = "",
  subtitleClass = "",
  gradient = false,
  highlightWords,
  singleColor,
}) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const baseTitleClass = "text-5xl md:text-7xl lg:text-9xl font-extrabold leading-tight";
  const gradientTextClass = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text";

  // Function to apply highlighting to specific words
  const renderTitle = () => {
    if (!highlightWords) return title;

    return title.split(' ').map((word, index) => (
      <span 
        key={index} 
        className={highlightWords.words.includes(word) ? `text-${highlightWords.color}-500` : ''}
      >
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className={`${alignmentClass[align]} my-8 max-w-4xl mx-auto px-4`}>
      <h1
        className={`${baseTitleClass} ${
          gradient 
            ? gradientTextClass 
            : singleColor 
              ? `text-${singleColor}` 
              : "text-black"
        } ${titleClass}`}
      >
        {renderTitle()}
      </h1>
      {subtitle && (
        <p className={`text-xl md:text-2xl mt-4 ${
          singleColor ? `text-${singleColor}` : "text-gray-800"
        } ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Text;