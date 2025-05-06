type ButtonProps = {
  variant?: "gradient" | "border-gradient";
  text: string;
};

const Button = ({ variant = "gradient", text }: ButtonProps) => {
  const commonStyles =
    "rounded-xl text-base font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#7290F4]";
  const buttonSize = "w-[246px] h-[54px]"; // slightly smaller than wrapper

  if (variant === "border-gradient") {
    return (
      <div
        className="p-[2px] rounded-xl bg-gradient-to-r from-[#785CF5] to-[#6CBCF4] inline-block"
      >
        <button
          type="button"
          className={`bg-white text-black ${commonStyles} ${buttonSize} rounded-xl`}
        >
          {text}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`bg-gradient-to-r from-[#785CF5] to-[#6CBCF4] text-white hover:shadow-lg ${commonStyles} w-[250px] h-[58px]`}
    >
      {text}
    </button>
  );
};

export default Button;
