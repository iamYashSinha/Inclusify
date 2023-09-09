import React from "react";
import "../../css/AboutSection.css"; // Import your CSS file for styling

const AboutSection = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h2>TRY YOURSELF</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <div className="child">
            <div className="left-side-or">OR</div>
            <div className="right-side-button">
              <button>Button</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h2>FEATURES</h2>
        <p>Comprehensive Product Database</p>
        <p>Personalized Recommendation</p>
        <p>User-Generated Reviews</p>
      </div>
    </div>
  );
};

export default AboutSection;
