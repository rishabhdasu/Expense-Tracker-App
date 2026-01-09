import React from "react";

const Spinner = ({ size = "w-8 h-8", color = "border-primary" }) => {
  return (
    <div
      className={`${size} border-4 ${color} border-t-transparent rounded-full animate-spin text-center`}
    ></div>
  );
};

export default Spinner;
