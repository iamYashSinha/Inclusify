import React from "react";
import HoverSpeak from '../HoverSpeak.jsx';


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
      <HoverSpeak text="Unlocking Digital Accessibility for All">
        <div style={textStyle}>
          Unlocking Digital <span style={accessibilityStyle}>Accessibility</span>{" "}
          for All
        </div>
      </HoverSpeak>
    </div>
  );
};

export default HeroSection;
