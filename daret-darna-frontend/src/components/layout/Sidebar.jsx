import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/annonces', label: 'Annonces' },
  { to: '/darets', label: 'Darets' },
  { to: '/chat', label: 'Chat' },
  { to: '/profile', label: 'Profile' },
];

const Sidebar = () => (
  <aside className="hidden w-60 flex-shrink-0 border-r bg-white/80 p-4 md:block">
    <nav className="space-y-2 text-sm">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `block rounded-md px-3 py-2 font-medium transition-colors ${
              isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
