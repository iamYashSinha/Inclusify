import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaSort,
  FaFilter,
} from "react-icons/fa";
import jsonData from "../utils/Hand_Disability_Products.json";

function CardLayouts({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [sortOption, setSortOption] = useState("Relevance"); // Default sorting option

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

  useEffect(() => {
    // Filter products based on searchQuery
    const filtered = data.filter((product) =>
      product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, data]);
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
        <Input
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="green">
                    Buy now
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CardLayouts;
