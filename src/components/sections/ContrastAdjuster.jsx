import React from "react";
import "../../css/high-contrast.css";

const checkboxStyles = {
  marginRight: "10px",
  width: "20px",
  height: "20px",
  border: "2px solid #333",
  borderRadius: "4px",
  backgroundColor: "#fff",
  display: "inline-block",
  verticalAlign: "middle",
};

const checkmarkStyles = {
  position: "absolute",
  top: "3px",
  left: "6px",
  width: "6px",
  height: "10px",
  border: "solid #333",
  borderWidth: "0 2px 2px 0",
  transform: "rotate(45deg)",
  display: "none", // Hidden by default
};

function ContrastAdjuster({ contrastEnabled, setContrastEnabled }) {
  const toggleContrast = () => {
    setContrastEnabled(!contrastEnabled);

    // Toggle the class on the root element
    document.documentElement.classList.toggle("high-contrast");
  };

  return (
    <div>
      <label style={{ display: "inline-flex", alignItems: "center", cursor: "pointer", userSelect: "none" }}>
        <input
          type="checkbox"
          checked={contrastEnabled}
          onChange={toggleContrast}
          style={{ position: "absolute", opacity: 0 }}
        />
        <span style={checkboxStyles}></span>
        <span style={checkmarkStyles}></span>
        Increase Contrast
      </label>
    </div>
  );
}

export default ContrastAdjuster;

