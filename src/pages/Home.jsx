import React from 'react'

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '200px', // Add top padding
  };

  const leftSectionStyle = {
    flex: '1',
  };

  const rightSectionStyle = {
    flex: '1',
  };

  const textStyle = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '80px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  };

  const accessibilityStyle = {
    color: '#24FF00',
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <div style={textStyle}>
          Unlocking Digital <span style={accessibilityStyle}>Accessibility</span> for All
        </div>
      </div>
      <div style={rightSectionStyle}>
        {/* Add your image here */}
        <img
          src="/path/to/your/image.jpg" // Replace with the actual path to your image
          alt="Accessibility Image"
          style={{ maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};
export default Home;


