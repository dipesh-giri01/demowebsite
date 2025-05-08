interface FeatureBlockProps {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  reverse?: boolean
}

const FeatureBlock = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
  reverse = false
}: FeatureBlockProps) => {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} items-center justify-between gap-12 w-full`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={512}
            height={512}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        {/* Text and Gradient */}
        <div className="w-full lg:w-1/2 flex flex-row items-start gap-8">
          {/* Gradient bar */}
          <div className="h-29 w-2 bg-gradient-to-b from-[#785CF5] to-[#6CBCF4] mr-6"></div>

          {/* Flex-col for title and description */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default FeatureBlock;
