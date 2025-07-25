import React from "react";

const Heading = ({ headingText, className }) => {
  return <h1 className={`${className}`}>{headingText}</h1>;
};

export default Heading;
