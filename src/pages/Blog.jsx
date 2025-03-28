import { Link } from "react-router-dom"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "A Complete Guide to Gorilla Trekking in Rwanda",
      excerpt:
        "Everything you need to know about planning a gorilla trekking experience in Volcanoes National Park, from permits to what to pack.",
      date: "March 15, 2023",
      author: "Jean Mutabazi",
      category: "Wildlife",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Top 5 Cultural Experiences in Rwanda",
      excerpt:
        "Discover the rich cultural heritage of Rwanda through these authentic experiences that connect you with local communities.",
      date: "February 28, 2023",
      author: "Marie Uwimana",
      category: "Culture",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Exploring Lake Kivu: Rwanda's Hidden Gem",
      excerpt:
        "A comprehensive guide to the activities, accommodations, and attractions around beautiful Lake Kivu on Rwanda's western border.",
      date: "January 20, 2023",
      author: "Eric Habimana",
      category: "Destinations",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Rwanda's Conservation Success Story",
      excerpt:
        "How Rwanda has become a leader in wildlife conservation and environmental protection in Africa, with lessons for the world.",
      date: "December 12, 2022",
      author: "Claire Mukamana",
      category: "Conservation",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "The Best Time to Visit Rwanda: Season by Season Guide",
      excerpt:
        "A detailed breakdown of Rwanda's seasons and the best times to visit for different activities and experiences.",
      date: "November 5, 2022",
      author: "Jean Mutabazi",
      category: "Travel Tips",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Rwandan Cuisine: A Culinary Journey",
      excerpt:
        "Explore the flavors, ingredients, and traditional dishes that make up Rwanda's unique culinary landscape.",
      date: "October 18, 2022",
      author: "Marie Uwimana",
      category: "Culture",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = [
    { name: "Wildlife", count: 8 },
    { name: "Culture", count: 12 },
    { name: "Destinations", count: 15 },
    { name: "Conservation", count: 6 },
    { name: "Travel Tips", count: 10 },
    { name: "Photography", count: 4 },
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">Insights, tips, and stories from Rwanda</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-green-700 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {post.author}</span>
                        <Link to={`/blog/${post.id}`} className="text-green-600 hover:text-green-800 font-medium">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-md"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 border-t border-b border-gray-300 bg-green-600 text-sm font-medium text-white"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-md"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-green-700 mb-4">Search</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-green-700 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex justify-between items-center text-gray-700 hover:text-green-600">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-green-700 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-green-600">
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
              <div className="bg-green-700 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">
                  Get the latest updates, tips, and special offers delivered directly to your inbox.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 mb-3 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Ready to Experience Rwanda?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Turn these stories into your own adventures. Book a tour with us today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/tours"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Our Tours
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-green-600 hover:text-white text-green-700 font-bold py-3 px-8 rounded-full text-lg border-2 border-green-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

