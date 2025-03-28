"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useTranslation } from "../utils/i18n"
import LanguageSelector from "./LanguageSelector"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  // Style for active and hover links - underline added
  const activeLinkClass = "text-green-500 font-semibold underline text-sm"
  const inactiveLinkClass = "text-gray-700 hover:text-green-700 font-medium hover:underline text-sm"

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-3 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-sm font-bold text-orange-500">{t("general.appName").split(" ")[0]}</span>
            <span className="ml-1 text-sm font-bold text-orange-500">
              {t("general.appName").split(" ").slice(1).join(" ")}
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className={isActive("/") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.home")}
              </Link>
              <Link to="/about" className={isActive("/about") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.about")}
              </Link>
              <Link to="/destinations" className={isActive("/destinations") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.destinations")}
              </Link>
              <Link
                to="/cultural-experiences"
                className={isActive("/cultural-experiences") ? activeLinkClass : inactiveLinkClass}
              >
                {t("nav.culturalExperiences")}
              </Link>
              <Link to="/tours" className={isActive("/tours") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.tours")}
              </Link>
              <Link to="/gallery" className={isActive("/gallery") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.gallery")}
              </Link>
              <Link to="/contact" className={isActive("/contact") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.contact")}
              </Link>
              <Link to="/blog" className={isActive("/blog") ? activeLinkClass : inactiveLinkClass}>
                {t("nav.blog")}
              </Link>
            </nav>

            {/* Language and Theme Toggles moved to the right */}
            <div className="hidden md:flex items-center space-x-1">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="ml-2 text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="md:hidden mt-2 space-y-1 pb-2 text-center transition-transform ease-in-out duration-500 delay-150 transform translate-y-0 opacity-100"
          >
            <Link
              to="/"
              className={`block ${isActive("/") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`block ${isActive("/about") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/destinations"
              className={`block ${isActive("/destinations") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.destinations")}
            </Link>
            <Link
              to="/cultural-experiences"
              className={`block ${isActive("/cultural-experiences") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.culturalExperiences")}
            </Link>
            <Link
              to="/tours"
              className={`block ${isActive("/tours") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.tours")}
            </Link>
            <Link
              to="/gallery"
              className={`block ${isActive("/gallery") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.gallery")}
            </Link>
            <Link
              to="/contact"
              className={`block ${isActive("/contact") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.contact")}
            </Link>
            <Link
              to="/blog"
              className={`block ${isActive("/blog") ? activeLinkClass : inactiveLinkClass} text-xs`}
              onClick={toggleMenu}
            >
              {t("nav.blog")}
            </Link>
            {/* Language Selector and Theme Toggle for Mobile */}
            <div className="flex justify-center items-center space-x-2 mt-3">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar

