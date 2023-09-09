import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Logo(props) {
    const navigate = useNavigate();
    const navi = ()=>{
        navigate('/')
    }
  return (
    <Box {...props}>
      <Text style={{cursor:'pointer'}} onClick={navi} fontSize="lg" fontWeight="bold">
        Inclusify
      </Text>
    </Box>
  );
}