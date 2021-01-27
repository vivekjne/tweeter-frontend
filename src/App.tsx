import * as React from "react";
import { ChakraProvider, Flex, Box, Text, Image, Link } from "@chakra-ui/react";

import { theme } from "./index";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import SideContent from "./components/layout/SideContent";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex bg="white" alignSelf="center" minH="100vh" m="0 auto">
      <Sidebar />

      <MainContent>Main</MainContent>
      <SideContent>Side</SideContent>
    </Flex>
  </ChakraProvider>
);
