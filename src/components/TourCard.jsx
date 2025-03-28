import { Link } from "react-router-dom"

const TourCard = ({ title, description, duration, price, image, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-orange-700">{title}</h3>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">{duration}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-orange-600">{price}</span>
          <Link
            to={link}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TourCard

