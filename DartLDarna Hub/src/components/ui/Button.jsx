import React, { Children } from 'react'

const Button = ({ className = "", size = "md", children }) => {
  const sizeClass = size === "lg" ? "px-4 py-3 text-base" : "px-4 py-2 text-sm";
  return (
    <button className={`inline-flex items-center justify-center font-medium transition ${sizeClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button 
