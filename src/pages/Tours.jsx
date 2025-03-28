import TourCard from "../components/TourCard"

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: "Gorilla Trekking Adventure",
      description:
        "Trek through Volcanoes National Park to observe endangered mountain gorillas in their natural habitat, guided by expert trackers.",
      duration: "3 Days",
      price: "$1,500",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      id: 2,
      title: "Lake Kivu Escape",
      description:
        "Relax on the shores of Lake Kivu, enjoy boat tours, water activities, and explore the surrounding coffee plantations.",
      duration: "2 Days",
      price: "$800",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      id: 3,
      title: "Cultural Heritage Tour",
      description:
        "Immerse yourself in Rwandan culture through traditional dance performances, craft workshops, and village visits.",
      duration: "2 Days",
      price: "$700",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      id: 4,
      title: "Kigali City Experience",
      description:
        "Explore Rwanda's clean and vibrant capital, including the Genocide Memorial, local markets, and contemporary art galleries.",
      duration: "1 Day",
      price: "$300",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      id: 5,
      title: "Nyungwe Forest Trek",
      description:
        "Discover one of Africa's oldest rainforests, track chimpanzees, and walk across the canopy walkway for breathtaking views.",
      duration: "3 Days",
      price: "$1,200",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      id: 6,
      title: "Rwanda Highlights Tour",
      description:
        "Experience the best of Rwanda in one comprehensive tour, including gorilla trekking, Lake Kivu, cultural experiences, and Kigali city tour.",
      duration: "7 Days",
      price: "$3,500",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
  ]

  const customTours = [
    {
      title: "Family Tours",
      description:
        "Special tours designed for families with children, featuring age-appropriate activities and accommodations suitable for families.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Honeymoon Packages",
      description:
        "Romantic getaways for couples, combining adventure with luxury accommodations and special experiences.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Photography Tours",
      description:
        "Specialized tours for photography enthusiasts, focusing on Rwanda's most photogenic landscapes and wildlife.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Birdwatching Expeditions",
      description:
        "Tours focused on Rwanda's rich avian diversity, with expert guides to help spot and identify over 700 bird species.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.explorerwandatours.com/wp-content/uploads/2019/11/Canopy-Walkway-Nyungwe.gif')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tours & Packages</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our carefully crafted tours to experience the best of Rwanda
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Featured Tours</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our most popular tour packages, designed to showcase the best of Rwanda's natural beauty,
              wildlife, and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard
                key={tour.id}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                price={tour.price}
                image={tour.image}
                link={tour.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Customized Tours</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in creating personalized itineraries tailored to your interests, timeframe, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                />
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-green-700 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <a
                    href="/contact"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Design Your Own Tour</h3>
            <p className="text-gray-600 mb-6 text-center">
              Can't find exactly what you're looking for? Let us create a custom itinerary based on your preferences and
              interests.
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Start Planning Your Custom Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-6">What's Included</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional English-speaking guides</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comfortable transportation in 4x4 vehicles</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accommodation as specified in the itinerary</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Meals as specified in the itinerary</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All park entrance fees and activities mentioned</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bottled water during tours</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-6">What's Not Included</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>International flights</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Visa fees (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Travel insurance (mandatory)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Personal expenses (souvenirs, drinks, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Tips for guides and staff</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Activities not mentioned in the itinerary</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Rwanda Adventure?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to secure your spot or inquire about custom tour options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg border-2 border-white transition duration-300"
            >
              Request Custom Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tours

