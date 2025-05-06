interface CardProps {
  imageSrc: string
  title: string
  description: string
}

export function Card({ imageSrc, title, description }: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Image Container */}
      <div className="flex justify-center items-center p-4">
        <img
          src={imageSrc}
          alt={title}
          className="max-h-32 object-contain"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
