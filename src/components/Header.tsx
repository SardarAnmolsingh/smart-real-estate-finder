import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-real-blue p-1 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 5L21 9V19L12 23L3 19V9Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <path d="M12 9L12 17" stroke="white" strokeWidth="2" />
              <path d="M7 11V17" stroke="white" strokeWidth="2" />
              <path d="M17 11V17" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-xl font-bold text-real-gray-900">NivaasAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? "text-real-blue"
                  : "text-real-gray-600 hover:text-real-blue"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/search"
            className="btn-primary"
          >
            Start Exploring
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-real-blue"
                    : "text-real-gray-600 hover:text-real-blue"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/search" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Exploring
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
