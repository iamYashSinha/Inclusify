import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import jsonData from "../utils/Hand_Disability_Products.json";
function CardLayouts() {
  const [disability, setDisability] = useState();
  const cardStyle = {
    width: "300px", // Adjust the width as needed
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const imageStyle = {
    maxWidth: "100%",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const priceStyle = {
    fontSize: "16px",
    color: "blue",
  };

  const handleChange = () => {};
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
    {jsonData.map((product, index) => (
      <Card key={index} style={cardStyle}>
        <Image
          src={product["Image URL"]}
          alt={product["Product Name"]}
          style={imageStyle}
        />
        <Stack mt="6" spacing="3">
          <CardHeader>
            <Heading size="md" style={titleStyle}>
              {product["Product Name"]}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>{product["Product Price"]}</Text>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              {/* You can add more buttons or actions here */}
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    ))}
  </div>
  );
}

export default CardLayouts;