// Card.tsx
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

export function Card({ imageSrc, title, description, className }: CardProps) {
  return (
    <div className={`bg-white rounded-3xl shadow-sm flex flex-col h-full ${className}`}>
      {/* Image Container */}
      <div className="flex justify-center items-center p-6 h-[140px]">
        <img
          src={imageSrc}
          alt={title}
          className="max-h-[80px] object-contain"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 pt-0 text-center flex flex-col flex-grow">
        <h5 className="mb-3 text-xl font-bold text-gray-900">
          {title}
        </h5>
        <p className="text-gray-700 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}