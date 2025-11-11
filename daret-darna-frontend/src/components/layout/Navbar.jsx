import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="border-b bg-white">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <Link to="/" className="text-lg font-semibold text-primary-600">
        Daret L'Darna
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link to="/annonces" className="text-gray-600 hover:text-primary-600">
          Annonces
        </Link>
        <Link to="/darets" className="text-gray-600 hover:text-primary-600">
          Darets
        </Link>
        <Link to="/chat" className="text-gray-600 hover:text-primary-600">
          Chat
        </Link>
        <Link to="/admin" className="text-gray-600 hover:text-primary-600">
          Admin
        </Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
