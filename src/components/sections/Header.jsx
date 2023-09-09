import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "../ui/Logo";
import NavFont from "./NavFont";
import ContrastAdjuster from "./ContrastAdjuster";

import "../../css/high-contrast.css";
import { useHoverSpeak } from "../../HoverSpeakContext";

const MenuItem = ({
  children,
  isLast,
  to = "/",
  noHover,
  onClick,
  ...rest
}) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      position="relative"
      padding="0.5rem 1rem" // Add padding
      _hover={
        !noHover && {
          background: "#4CAF50", // Lighten the green color
          color: "white",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow on hover
        }
      }
      {...rest}
    >
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const getUserPhoto = sessionStorage.getItem("photoURL");
console.log(getUserPhoto);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const [contrastEnabled, setContrastEnabled] = React.useState(false);
  const { hoverSpeakEnabled, toggleHoverSpeak } = useHoverSpeak(); // Use the hook to access HoverSpeak state

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="#" onClick={toggleHoverSpeak}>
            {hoverSpeakEnabled ? "Turn Off HoverSpeak" : "Turn On HoverSpeak"}
          </MenuItem>
          <MenuItem to="#">
            <ContrastAdjuster
              contrastEnabled={contrastEnabled}
              setContrastEnabled={setContrastEnabled}
            />
          </MenuItem>
          <MenuItem to="#">
            <NavFont />
          </MenuItem>
          {getUserPhoto ? (
            <MenuItem to="/profile">
              <img src={getUserPhoto} alt="" />
            </MenuItem>
          ) : (
            <MenuItem to="/login">Login</MenuItem>
          )}
          <MenuItem to="/signup" isLast noHover>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Profile
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
