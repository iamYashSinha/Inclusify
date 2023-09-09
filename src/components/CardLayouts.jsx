import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaSort,
  FaFilter,
  FaMicrophone,
} from "react-icons/fa";
import jsonData from "../utils/Hand_Disability_Products.json";

function CardLayouts({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [sortOption, setSortOption] = useState("Relevance"); // Default sorting option
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cardStyle = {
    flex: "0 0 calc(20% - 20px)",
    margin: "40px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    position: "relative",
    height: "450px", // Adjusted card height
  };

  const hoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const iconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    color: "black",
    cursor: "pointer",
    zIndex: 1,
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const priceStyle = {
    fontSize: "16px",
    color: "black",
    marginTop: "10px",
  };

  const mrpStyle = {
    fontSize: "14px",
    color: "black",
    marginTop: "5px",
  };

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // Filter products based on searchQuery
    const filtered = jsonData.filter((product) =>
      product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  //   useEffect(() => {
  //   // Filter products based on searchQuery
  //   const filtered = data.filter((product) =>
  //     product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   // Sort the filtered products based on the selected sorting option
  //   let sortedData = [...filtered];
  //   switch (sortOption) {
  //     case "Price Low to High":
  //       sortedData.sort((a, b) =>
  //         parseFloat(a["Product Price"]) - parseFloat(b["Product Price"])
  //       );
  //       break;
  //     case "Price High to Low":
  //       sortedData.sort((a, b) =>
  //         parseFloat(b["Product Price"]) - parseFloat(a["Product Price"])
  //       );
  //       break;
  //     // Default case is "Relevance"
  //     default:
  //       // You can implement your relevance-based sorting logic here
  //       break;
  //   }
  //   setFilteredProducts(sortedData);
  // }, [searchQuery, data, sortOption]);

  useEffect(() => {
    setSearchQuery(transcript)
  }, [transcript, data])

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <ButtonGroup spacing="2">
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<Icon as={FaSort} />}
              variant="solid"
              colorScheme="green"
            >
              Sort
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSortOption("Price Low to High")}>
                Price Low to High
              </MenuItem>
              <MenuItem onClick={() => setSortOption("Price High to Low")}>
                Price High to Low
              </MenuItem>
              <MenuItem onClick={() => setSortOption("Relevance")}>
                Relevance
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            leftIcon={<Icon as={FaFilter} />}
            variant="outline"
            colorScheme="green"
            _hover={{ bg: "green.500", color: "white" }}
            style={{ marginRight: "10px" }}
          >
            Filter
          </Button>
        </ButtonGroup>
        {/* Voice Search Button */}
        <Button
          leftIcon={<Icon as={FaMicrophone} />}
          onClick={() => {
            resetTranscript(); // Reset transcript before starting voice search
            SpeechRecognition.startListening();
          }}
          variant="outline"
          colorScheme="green"
          style={{ marginRight: "10px" }}
        >
          {/* Voice Search */}
        </Button>

        {/* Search Input */}
        <Input
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
          style={{ maxWidth: "400px" }}
        />
        <Icon as={FaSearch} style={{ fontSize: "20px", marginLeft: "10px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredCardIndex === index ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <Image
              src={product["Image URL"]}
              alt={product["Product Name"]}
              style={{ ...imageStyle }}
            />
            <Stack
              mt="6"
              spacing="3"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardHeader>
                <div style={{ ...titleStyle, height: "40px" }}>
                  {product["Product Name"]}
                </div>
              </CardHeader>
              <CardBody style={{ flexGrow: 1 }}>
                <div style={{ ...priceStyle, height: "20px" }}>
                  {product["Product Price"]}
                </div>
                <div style={mrpStyle}>{product["MRP"]}</div>
              </CardBody>
              <CardFooter>
                <a href="https://buy.stripe.com/test_00g6pb9hU5JZgvedQQ" style={{ color: "white", backgroundColor: "#549c4e" }}>Buy Now</a>
                <Modal
                  isCentered
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset="slideInBottom"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Product Description</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{product["Description"]}</ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Buy</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CardLayouts;
