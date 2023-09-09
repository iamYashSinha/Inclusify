import React from "react";

const HeroSection = () => {
  const textStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "80px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };

  const accessibilityStyle = {
    color: "#24FF00",
  };

  return (
    <div>
      <div style={textStyle}>
        Unlocking Digital <span style={accessibilityStyle}>Accessibility</span>{" "}
        for All
      </div>
    </div>
  );
};

export default HeroSection;
