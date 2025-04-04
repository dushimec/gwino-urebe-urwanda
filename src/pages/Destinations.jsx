import { useTranslation } from "../utils/i18n";

const Destinations = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      id: 1,
      name: t("destinations.volcanoesPark.name"),
      description: t("destinations.volcanoesPark.description"),
      longDescription: t("destinations.volcanoesPark.longDescription"),
      activities: t("destinations.volcanoesPark.activities", { returnObjects: true }),
      image: "https://www.safarisrwandasafari.com/wp-content/uploads/2023/03/History-of-Volcanoes-National.jpg",
    },
    {
      id: 2,
      name: t("destinations.lakeKivu.name"),
      description: t("destinations.lakeKivu.description"),
      longDescription: t("destinations.lakeKivu.longDescription"),
      activities: t("destinations.lakeKivu.activities", { returnObjects: true }),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgS3wuyfkdoz-BBaWEgh5lL6c25qgU3a8vYQ&s",
    },
    {
      id: 3,
      name: t("destinations.genocideMemorials.name"),
      description: t("destinations.genocideMemorials.description"),
      longDescription: t("destinations.genocideMemorials.longDescription"), // Update this translation key if needed
      activities: t("destinations.genocideMemorials.activities", { returnObjects: true }),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwqYeV-P7J4zAQ2DLijraGXq73tUt8POFRw&s",
    },
    {
      id: 4,
      name: t("destinations.nyungweForest.name"),
      description: t("destinations.nyungweForest.description"),
      longDescription: t("destinations.nyungweForest.longDescription"),
      activities: t("destinations.nyungweForest.activities", { returnObjects: true }),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZXEwqzhdyloiTZsj3JA3LUmGvj9VMeMHLg&s",
    },
    {
      id: 5,
      name: t("destinations.akageraPark.name"),
      description: t("destinations.akageraPark.description"),
      longDescription: t("destinations.akageraPark.longDescription"),
      activities: t("destinations.akageraPark.activities", { returnObjects: true }),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryiN5IBVA4iZ-8iyLWfftz_jZJMbbB3Yb1Q&s",
    },
    {
      id: 6,
      name: t("destinations.kigaliCity.name"),
      description: t("destinations.kigaliCity.description"),
      longDescription: t("destinations.kigaliCity.longDescription"),
      activities: t("destinations.kigaliCity.activities", { returnObjects: true }),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCFBKhBgJAdTfNEcGfRg2ZC6WsdXwkKUrrA&s",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.gorillatrips.net/wp-content/uploads/2020/11/places-to-visit-in-rwanda-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("destinations.hero.title")}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t("destinations.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Destinations List Section */}
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

                  <h3 className="text-xl font-bold text-green-700 mb-3">{t("destinations.activities")}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {(Array.isArray(destination.activities) ? destination.activities : []).map((activity, i) => (
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
                    {t("destinations.cta.viewTours")}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("destinations.cta.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">{t("destinations.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/tours"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              {t("destinations.cta.viewTours")}
            </a>
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              {t("destinations.cta.contactUs")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

