import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HoverSpeak from "./HoverSpeak";
import { Box, Button, Flex, Image, Heading, Stack } from "@chakra-ui/react";
import { useHoverSpeak } from "../../HoverSpeakContext"; // Import the useHoverSpeak hook

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  const parts = title.split("Accessibility");
  const beforeAccessibility = parts[0];
  const afterAccessibility = parts.slice(1).join("Accessibility");

  // Use the useHoverSpeak hook to access hoverSpeakEnabled
  const { hoverSpeakEnabled } = useHoverSpeak();

  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="black"
          textAlign={["center", "center", "left", "left"]}
        >
          <HoverSpeak text={title} isEnabled={hoverSpeakEnabled}>
            {beforeAccessibility}
            <span style={{ color: "#48BB78" }}>Accessibility</span>
            {afterAccessibility}
          </HoverSpeak>
        </Heading>
        <Heading
          as="h2"
          size="md"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  hoverSpeakEnabled: PropTypes.bool, // Receive hoverSpeakEnabled as a prop
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
