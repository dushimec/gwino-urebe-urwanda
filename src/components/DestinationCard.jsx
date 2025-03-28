import { Link } from "react-router-dom"

const DestinationCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-green-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Explore More
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard

