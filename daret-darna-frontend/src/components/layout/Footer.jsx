import React from 'react';

const Footer = () => (
  <footer className="border-t bg-white">
    <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm text-gray-500">
      <span>© {new Date().getFullYear()} Daret L'Darna. All rights reserved.</span>
      <span>Made with ❤️ in Morocco.</span>
    </div>
  </footer>
);

export default Footer;
