const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Volcanoes National Park",
      description:
        "Home to endangered mountain gorillas and golden monkeys, offering unforgettable trekking experiences in the Virunga Mountains.",
      longDescription:
        "Volcanoes National Park is one of Rwanda's most popular destinations, famous for gorilla trekking. The park protects the Rwandan portion of the Virunga Mountains, a range of six extinct and three active volcanoes that straddle the borders of Rwanda, Uganda, and the Democratic Republic of Congo. Besides the endangered mountain gorillas, the park is home to golden monkeys, forest elephants, buffalo, and numerous bird species.",
      activities: [
        "Gorilla Trekking",
        "Golden Monkey Tracking",
        "Volcano Hiking",
        "Bird Watching",
        "Cultural Village Visits",
      ],
      image: "https://www.safarisrwandasafari.com/wp-content/uploads/2023/03/History-of-Volcanoes-National.jpg",
    },
    {
      id: 2,
      name: "Lake Kivu",
      description:
        "One of Africa's Great Lakes, offering beautiful beaches, boat tours, and water activities along Rwanda's western border.",
      longDescription:
        "Lake Kivu is one of the African Great Lakes, situated on the border between Rwanda and the Democratic Republic of the Congo. The lake covers a total surface area of 2,700 km² and stands at a height of 1,460 meters above sea level. Its shores offer some of Rwanda's best beaches and resorts. Visitors can enjoy boat tours, kayaking, swimming, and fishing, or simply relax on the sandy beaches while taking in the stunning views of the surrounding hills.",
      activities: ["Boat Tours", "Kayaking", "Swimming", "Fishing", "Beach Relaxation", "Coffee Tours"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgS3wuyfkdoz-BBaWEgh5lL6c25qgU3a8vYQ&s",
    },
    {
      id: 3,
      name: "Genocide Memorials",
      description:
        "Important historical sites that honor the victims of the 1994 genocide against the Tutsi and educate visitors about Rwanda's history.",
      longDescription:
        "The Genocide Memorials across Rwanda serve as important reminders of the 1994 genocide against the Tutsi, during which over one million people lost their lives. The Kigali Genocide Memorial is the largest and most visited, housing exhibitions that document the genocide, its causes, and its aftermath. Other significant memorials include Nyamata, Ntarama, and Murambi. These sites offer visitors a chance to learn about Rwanda's tragic history and the remarkable journey of reconciliation and rebuilding that has followed.",
      activities: ["Guided Tours", "Educational Exhibitions", "Documentary Screenings", "Remembrance Gardens"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwqYeV-P7J4zAQ2DLijraGXq73tUt8POFRw&s",
    },
    {
      id: 4,
      name: "Nyungwe Forest National Park",
      description:
        "One of Africa's oldest rainforests, home to chimpanzees, colobus monkeys, and over 300 bird species, with a spectacular canopy walkway.",
      longDescription:
        "Nyungwe Forest National Park is one of the oldest rainforests in Africa, with a rich biodiversity that includes 13 primate species, over 300 bird species, and more than 1,000 plant species. The forest's main attraction is the chimpanzee tracking experience, where visitors can observe these fascinating primates in their natural habitat. The park also features a 160m-long canopy walkway suspended 70m above the forest floor, offering breathtaking views of the surrounding landscape.",
      activities: [
        "Chimpanzee Tracking",
        "Canopy Walkway",
        "Waterfall Hikes",
        "Bird Watching",
        "Colobus Monkey Tracking",
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZXEwqzhdyloiTZsj3JA3LUmGvj9VMeMHLg&s",
    },
    {
      id: 5,
      name: "Akagera National Park",
      description:
        "Rwanda's only savannah park, home to the Big Five and offering classic safari experiences with stunning landscapes.",
      longDescription:
        "Akagera National Park is located in eastern Rwanda, along the border with Tanzania. It's the only savannah park in Rwanda and home to the Big Five (lion, leopard, rhinoceros, elephant, and buffalo). The park covers over 1,120 km² of savannah, woodland, and wetland, and includes Lake Ihema, Rwanda's second-largest lake. Akagera offers a classic African safari experience, with game drives, boat safaris, and bird watching opportunities in a stunning landscape of rolling hills and lakes.",
      activities: [
        "Game Drives",
        "Boat Safaris",
        "Bird Watching",
        "Night Drives",
        "Behind-the-Scenes Conservation Tours",
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryiN5IBVA4iZ-8iyLWfftz_jZJMbbB3Yb1Q&s",
    },
    {
      id: 6,
      name: "Kigali City",
      description:
        "Rwanda's clean and vibrant capital city, offering museums, markets, restaurants, and a glimpse into urban Rwandan life.",
      longDescription:
        "Kigali, the capital city of Rwanda, is known for its cleanliness, safety, and vibrant atmosphere. The city is built across several hills and valleys, offering beautiful views from various vantage points. Visitors can explore the Kigali Genocide Memorial, shop for crafts at the Kimironko Market, enjoy local and international cuisine at various restaurants, and visit the Presidential Palace Museum. Kigali provides an excellent introduction to Rwanda's culture and history, as well as a comfortable base for exploring the rest of the country.",
      activities: ["City Tours", "Museum Visits", "Craft Shopping", "Culinary Experiences", "Cultural Performances"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCFBKhBgJAdTfNEcGfRg2ZC6WsdXwkKUrrA&s",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.gorillatrips.net/wp-content/uploads/2020/11/places-to-visit-in-rwanda-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Destinations</h1>
            <p className="text-xl max-w-3xl mx-auto">Explore the most beautiful places Rwanda has to offer</p>
          </div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-3xl font-bold text-green-700 mb-4">{destination.name}</h2>
                  <p className="text-gray-700 mb-6">{destination.longDescription}</p>

                  <h3 className="text-xl font-bold text-green-700 mb-3">Activities:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {destination.activities.map((activity, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/tours"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                  >
                    Explore Tours
                  </a>
                </div>

                <div>
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore These Amazing Destinations?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">Let us help you plan the perfect Rwanda itinerary.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/tours"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Our Tours
            </a>
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Destinations

