import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FiPlus, FiMinus } from "react-icons/fi";

// Add this function to NavFont.jsx
function changeGlobalFontSize(delta) {
  const root = document.documentElement; // Get the <html> element
  const currentFontSize = parseFloat(getComputedStyle(root).fontSize);
  const newFontSize = currentFontSize + delta;

  root.style.fontSize = `${newFontSize}px`;
}

function NavFont() {
  const increaseFontSize = () => {
    changeGlobalFontSize(2); // Increase font size by 2 units for the entire page
  };

  const decreaseFontSize = () => {
    changeGlobalFontSize(-2); // Decrease font size by 2 units for the entire page
  };

  return (
    <div>
      <p>Font Size</p>
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="green"
        margin="0.5rem"
        aria-label="Increase font size"
        fontSize="20px"
        size="xs"
        onClick={increaseFontSize}
        icon={<FiPlus />}
      />
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="green"
        aria-label="Decrease font size"
        fontSize="20px"
        size="xs"
        onClick={decreaseFontSize}
        icon={<FiMinus />}
      />
    </div>
  );
}

export default NavFont;
