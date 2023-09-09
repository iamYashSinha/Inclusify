// sections/ContrastAdjuster.jsx
import React from "react";
import "../../css/high-contrast.css";

function ContrastAdjuster({ contrastEnabled, setContrastEnabled }) {
  const toggleContrast = () => {
    setContrastEnabled(!contrastEnabled);

    // Toggle the class on the root element
    document.documentElement.classList.toggle("high-contrast");
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={contrastEnabled}
          onChange={toggleContrast}
        />
        Increase Contrast
      </label>
    </div>
  );
}

export default ContrastAdjuster;
