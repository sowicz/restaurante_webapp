import { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zmiana stanu w zależności od scrolla
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Dodanie nasłuchiwania scrolla
    window.addEventListener("scroll", handleScroll);

    // Usunięcie nasłuchiwania po odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`fixed top-0 left-0 w-full z-20 ${
      isScrolled && !isOpen
      ? "ease-in-out duration-500 backdrop-blur-md bg-opacity-50 shadow-sm shadow-neutral-900"
      : "bg-transparent"
    }`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-white lg:ml-8">
          Restaurant Name
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="text-gray-300 focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:mr-16 align-middle text-center items-center">
          <Link to="/" className="text-gray-300 hover:text-orange-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-orange-300">
            About
          </Link>
          <Link to="/menu" className="text-gray-300 hover:text-orange-300">
            Menu
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-orange-300">
            Dashboard
          </Link>
          <Link to="/contact" className="
            text-gray-300
            bg-orange-700 px-4 py-1 rounded-xl
            hover:text-white 
            hover:bg-orange-400
            ">
            Contact
          </Link>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Zamknięcie (X) */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
          <Link
            to="/"
            className="text-2xl font-semibold hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl font-semibold hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/menu"
            className="text-2xl font-semibold hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/contact"
            className="text-2xl font-semibold hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link to="/dashboard" className="text-2xl font-semibold hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
