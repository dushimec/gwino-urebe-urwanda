"use client"

import { useState } from "react"
import { ToastContainer, toast } from "react-toastify" // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css" // Import Toastify CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourInterest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false) // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true) // Show loader
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Thank you for your message! We will get back to you soon.") // Success toast
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          tourInterest: "",
          message: "",
        })
      } else {
        toast.error("Something went wrong. Please try again later.") // Error toast
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("An error occurred. Please try again later.") // Error toast
    } finally {
      setIsSubmitting(false) // Hide loader
    }
  }

  return (
    <div className="relative">
      <ToastContainer /> {/* Add ToastContainer */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6 text-green-700">Get in Touch</h3>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tourInterest" className="block text-gray-700 font-medium mb-2">
            Tour Interest
          </label>
          <select
            id="tourInterest"
            name="tourInterest"
            value={formData.tourInterest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a tour</option>
            <option value="gorilla-trekking">Gorilla Trekking</option>
            <option value="lake-kivu">Lake Kivu Experience</option>
            <option value="cultural-tour">Cultural Tour</option>
            <option value="genocide-memorial">Genocide Memorial Visit</option>
            <option value="custom-tour">Custom Tour</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm

