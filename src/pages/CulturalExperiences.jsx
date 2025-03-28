import { useTranslation } from "../utils/i18n"

const CulturalExperiences = () => {
  const { t } = useTranslation()
  const experiences = [
    {
      id: 1,
      title: "Traditional Dance & Music",
      description:
        "Experience the vibrant rhythms and movements of Rwandan traditional dance and music, which tell stories of the country's history and culture.",
      details:
        "Rwandan traditional dance is characterized by energetic movements, intricate footwork, and rhythmic singing. The most famous dance is the Intore, performed by men who were once the elite warriors of the royal court. Women perform the elegant Ingoma, with graceful movements and harmonious singing. Our cultural experiences include performances by local dance troupes, interactive dance lessons, and the opportunity to learn about the cultural significance behind each performance.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 2,
      title: "Handicrafts & Art",
      description:
        "Discover Rwanda's rich artistic heritage through its handicrafts, including basket weaving, pottery, woodcarving, and contemporary art.",
      details:
        "Rwanda has a long tradition of craftsmanship, with skills passed down through generations. The country is particularly famous for its intricately woven baskets known as 'agaseke,' which symbolize peace and prosperity. Our cultural experiences include visits to local artisan cooperatives, where you can watch craftspeople at work, learn about traditional techniques, and even try your hand at creating your own piece. You'll also have the opportunity to visit contemporary art galleries in Kigali, showcasing Rwanda's vibrant modern art scene.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 3,
      title: "Culinary Experiences",
      description:
        "Taste the flavors of Rwanda through cooking classes, market visits, and meals with local families, learning about the country's culinary traditions.",
      details:
        "Rwandan cuisine features staples like beans, sweet potatoes, plantains, and cassava, often accompanied by grilled meat or fish. The national dish is 'ugali,' a cornmeal porridge served with various stews. Our culinary experiences include guided tours of local markets to learn about indigenous ingredients, cooking classes where you'll prepare traditional dishes, and shared meals with local families who will introduce you to Rwandan dining customs and hospitality.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 4,
      title: "Village Visits",
      description:
        "Immerse yourself in rural Rwandan life through visits to traditional villages, where you can interact with locals and learn about their daily activities.",
      details:
        "Village visits offer an authentic glimpse into rural Rwandan life and traditions. You'll have the opportunity to meet local families, learn about traditional farming methods, participate in daily activities like fetching water or grinding grain, and understand the community structures that form the backbone of Rwandan society. These experiences are respectful cultural exchanges that benefit the local communities directly through sustainable tourism practices.",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: 5,
      title: "Coffee & Tea Experiences",
      description:
        "Learn about Rwanda's renowned coffee and tea production through plantation tours, harvesting experiences, and tasting sessions.",
      details:
        "Rwanda produces some of the world's finest coffee and tea, thanks to its ideal growing conditions of high altitude, volcanic soil, and ample rainfall. Our experiences include tours of coffee washing stations and tea plantations, where you'll learn about the entire production process from planting to processing. During harvest season, you can participate in picking coffee cherries or tea leaves alongside local workers. The tours culminate in professional tasting sessions, where you'll learn to appreciate the unique flavors and aromas of Rwandan coffee and tea.",
      image: "/placeholder.svg?height=500&width=800",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://visitrwanda.com/wp-content/uploads/fly-images/2029/Visit-Rwanda_-Nyanza-Traditional-Intore-Dancers-1650x1100.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("culturalExperiences.heroTitle")}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t("culturalExperiences.heroSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">{t("culturalExperiences.introTitle")}</h2>
            <p className="text-gray-700 mb-4">
              {t("culturalExperiences.introText1")}
            </p>
            <p className="text-gray-700">
              {t("culturalExperiences.introText2")}
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-3xl font-bold text-green-700 mb-4">{experience.title}</h2>
                  <p className="text-gray-700 mb-6">{experience.details}</p>

                  <a
                    href="/contact"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                  >
                    {t("culturalExperiences.bookExperience")}
                  </a>
                </div>

                <div>
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">{t("culturalExperiences.testimonialsTitle")}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t("culturalExperiences.testimonialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">Lisa Thompson</h4>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                {t("culturalExperiences.testimonial1")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">Michael Rodriguez</h4>
                  <p className="text-gray-600">Spain</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                {t("culturalExperiences.testimonial2")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">Amina Nkusi</h4>
                  <p className="text-gray-600">Kenya</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                {t("culturalExperiences.testimonial3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("culturalExperiences.ctaTitle")}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            {t("culturalExperiences.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/tours"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              {t("culturalExperiences.viewTours")}
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg border-2 border-white transition duration-300"
            >
              {t("general.contactUs")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CulturalExperiences

