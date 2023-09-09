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

  const cardStyle = {
    flex: "0 0 calc(25% - 20px)",
    margin: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    position: "relative",
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
    height: "200px",
    objectFit: "cover",
    transition: "opacity 0.3s, transform 0.3s",
    borderRadius: "10px",
  };

  const imageHoverStyle = {
    transform: "scale(1.1)",
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
          <Button
            leftIcon={<Icon as={FaSort} />}
            variant="solid"
            colorScheme="blue"
          >
            Sort
          </Button>
          <Button
            leftIcon={<Icon as={FaFilter} />}
            variant="outline"
            colorScheme="blue"
            _hover={{ bg: "blue.500", color: "white" }}
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
          <Card key={index} style={cardStyle}>
            {/* <Icon
              as={FaHeart}
              style={iconStyle}
              onClick={() => {
                // Handle wishlist action
              }}
            />
            <Icon
              as={FaShoppingCart}
              style={{ ...iconStyle, right: "40px" }}
              onClick={() => {
                // Handle add to cart action
              }}
            /> */}
            <Image
              src={product["Image URL"]}
              alt={product["Product Name"]}
              style={{ ...imageStyle }}
              _hover={imageHoverStyle}
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
                  <Button variant="solid" colorScheme="blue">
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
