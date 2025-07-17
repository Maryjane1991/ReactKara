import React from 'react';

const Button = ({ className = "", btnText = "Click Me" }) => {
  return (
    <button
      className={`${className} rounded-md bg-brainywavepurple text-white hover:bg-brainywavepurple/70 hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {btnText}
    </button>
  );
};

export default Button;
