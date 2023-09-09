import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import customTheme from "./utils/theme";
import { HoverSpeakProvider } from "./HoverSpeakContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <HoverSpeakProvider>
        <App />
      </HoverSpeakProvider>
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
