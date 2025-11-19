import React from "react";

const Card = ({ className ="", children}) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
