const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.natgeofe.com/n/3646f25d-9d46-4a1f-8190-592bccdc3cda/0000016a-2bf7-de00-a1fb-eff78afa0000.jpg?wp=1&w=1884.75&h=1060.5')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">Learn about our passion for showcasing the beauty of Rwanda</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                GWINO UREBE URWANDA RWIZA was founded with a simple mission: to share the incredible beauty and rich
                culture of Rwanda with the world. Our name, which translates to "Come and See Beautiful Rwanda,"
                embodies our commitment to providing authentic and immersive experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Our team consists of passionate local guides who have deep knowledge of Rwanda's history, wildlife, and
                traditions. We believe that tourism should benefit local communities and contribute to conservation
                efforts, which is why we work closely with local partners and support sustainable practices.
              </p>
              <p className="text-gray-700">
                Whether you're interested in gorilla trekking, exploring the stunning landscapes, or immersing yourself
                in Rwandan culture, we are dedicated to creating unforgettable experiences that showcase the best of our
                beautiful country.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Community Engagement</h3>
              <p className="text-gray-600">
                We believe in supporting local communities and ensuring that tourism benefits the people of Rwanda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Environmental Sustainability</h3>
              <p className="text-gray-600">
                We are committed to conservation and minimizing our environmental footprint in all our operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">
                We provide genuine cultural interactions and experiences that respect local traditions and customs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our experienced guides and staff are passionate about sharing Rwanda with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg?height=300&width=300" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-1">Jean Mutabazi</h3>
                <p className="text-gray-500 mb-3">Founder & Lead Guide</p>
                <p className="text-gray-600">With over 15 years of experience guiding tours throughout Rwanda.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg?height=300&width=300" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-1">Marie Uwimana</h3>
                <p className="text-gray-500 mb-3">Cultural Experience Specialist</p>
                <p className="text-gray-600">Expert in Rwandan traditions, dance, and cultural heritage.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg?height=300&width=300" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-1">Eric Habimana</h3>
                <p className="text-gray-500 mb-3">Wildlife Expert</p>
                <p className="text-gray-600">Specialized in gorilla trekking and wildlife conservation.</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg?height=300&width=300" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-1">Claire Mukamana</h3>
                <p className="text-gray-500 mb-3">Customer Relations Manager</p>
                <p className="text-gray-600">Dedicated to ensuring exceptional service for all our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Rwanda with Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Let our experienced team guide you through the wonders of Rwanda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/tours"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Our Tours
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg border-2 border-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

