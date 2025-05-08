type ButtonProps = {
  variant?: "gradient" | "border-gradient" | "color" | "black" | "white";
  text: string;
  size?: "small" | "medium" | "large" | "navbar";
  fullWidth?: boolean;
  className?: string;
  color?: string; // Added color prop for future use
};

const Button = ({
  variant = "gradient",
  text,
  size = "medium",
  fullWidth = false,
  className = "",
}: ButtonProps) => {
  // Common base styles
  const commonStyles = `rounded-[12px] font-semibold shadow-md transition-all duration-200 
                       focus:outline-none focus:ring-4 focus:ring-[#7290F4]/50 
                       flex items-center justify-center ${className}`;

  // Size configurations with exact pixel values
  const sizes = {
    small: {
      container: "h-9 px-4 text-sm",
      bordered: "h-[34px] px-[14px]",
    },
    medium: {
      container: "h-[58px] px-[16px] py-[17px] text-base", // Exact dimensions
      bordered: "h-[54px] px-[22px]",
    },
    large: {
      container: "h-14 px-8 text-lg",
      bordered: "h-[54px] px-[30px]",
    },
    navbar: {
      container: "h-[53px] px-8 text-base",
      bordered: "h-[49px] px-[30px]",
    },
  };

  const sizeClass = sizes[size];
  const widthClass = fullWidth ? "w-full" : "w-[250px]"; // Fixed width for default

  // Button style for each variant
  if (variant === "black") {
    return (
      <button
        type="button"
        className={`${commonStyles} ${sizeClass.container} ${widthClass} 
                   bg-black text-white hover:bg-gray-800`}
      >
        {text}
      </button>
    );
  }

  if (variant === "white") {
    return (
      <button
        type="button"
        className={`${commonStyles} ${sizeClass.container} ${widthClass} 
                   bg-white text-black hover:bg-gray-100 border-2 border-black`}
      >
        {text}
      </button>
    );
  }

  if (variant === "border-gradient") {
    return (
      <div
        className={`${widthClass} inline-flex p-[2px] rounded-[12px] bg-gradient-to-r from-[#785CF5] to-[#6CBCF4]`}
      >
        <button
          type="button"
          className={`${commonStyles} ${sizeClass.bordered} bg-white text-black hover:bg-gray-50 ${widthClass}`}
        >
          {text}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${commonStyles} ${sizeClass.container} ${widthClass} 
                 bg-gradient-to-r from-[#785CF5] via-[#7290F4] to-[#6CBCF4] 
                 text-white hover:from-[#6C4CF5] hover:via-[#5B90F4] hover:to-[#5BACF4]`}
    >
      {text}
    </button>
  );
};

export default Button;
