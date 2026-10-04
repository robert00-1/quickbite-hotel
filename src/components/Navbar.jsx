import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-500"
        >
          QuickBite
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="text-gray-700 hover:text-red-500 transition"
          >
            Menu
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-red-500 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-red-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* Order Button */}
        <button
          onClick={() => navigate("/menu")}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Order Now
        </button>

      </div>
    </nav>
  );
}

export default Navbar;