import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBuilding2 } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
            <LuBuilding2 className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-gray-900">Dart l'Darna</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-500 transition hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/properties"
            className="text-sm text-gray-500 transition hover:text-gray-900"
          >
            Properties
          </Link>
          <Link
            to="/savings"
            className="text-sm text-gray-500 transition hover:text-gray-900"
          >
            Savings Groups
          </Link>
          <Link
            to="/about"
            className="text-sm text-gray-500 transition hover:text-gray-900"
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-md px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <div className="space-y-3 px-4 py-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="block py-2 text-gray-900 transition hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              to="/properties"
              onClick={closeMenu}
              className="block py-2 text-gray-900 transition hover:text-gray-600"
            >
              Properties
            </Link>
            <Link
              to="/savings"
              onClick={closeMenu}
              className="block py-2 text-gray-900 transition hover:text-gray-600"
            >
              Savings Groups
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block py-2 text-gray-900 transition hover:text-gray-600"
            >
              About
            </Link>
            <div className="flex gap-2 pt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="inline-flex flex-1 items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="inline-flex flex-1 items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
