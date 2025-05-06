// Define the types for the props passed into the Card component
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

// Card component with its own rounded rectangle container
export function Card({ imageSrc, title, description }: CardProps) {
  return (
    <div className="rounded-3xl border-2 border-gray-300 overflow-hidden shadow-lg bg-white max-w-sm">
      {/* Image */}
      <div className="flex justify-center p-4">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      </div>

      {/* Card Body */}
      <div className="px-6 py-4">
        <h5 className="text-2xl font-bold text-gray-800 mb-2">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;
