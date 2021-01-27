import * as React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Image,
  Link,
  background,
} from "@chakra-ui/react";
import Star from "./assets/images/star.png";
import { theme } from "./index";
import Sidebar from "./components/layout/Sidebar";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex bg="white" alignSelf="center" minH="100vh" m="0 auto">
      <Sidebar />

      <Flex ml="275px" flex="1" height="100vh" position="relative">
        <Flex
          height="40px"
          borderBottomWidth="0.5px"
          borderBottomColor="black.500"
          alignItems="center"
          justifyContent="space-between"
          px="16px"
          direction="row"
          width="100%"
          bg="white"
          position="fixed"
          top="0px"
        >
          <Text fontSize="md">Home</Text>
          <Link role="group">
            <Box
              p="3px"
              borderRadius="20px"
              _groupHover={{
                bg: "purple.100",
              }}
            >
              <Image
                src={Star}
                alt="top trending"
                boxSize="30px"
                objectFit="contain"
              />
            </Box>
          </Link>
        </Flex>
        <Box mt="40px" width="100%">
          <div style={{ height: "2000px" }}>
            {Array.from(Array(100).keys()).map((a) => (
              <p>{a}</p>
            ))}
          </div>
        </Box>
      </Flex>
      <Box
        position="fixed"
        height="100%"
        width="350px"
        bg="white"
        right="0"
        borderLeftColor="black.500"
        borderLeftWidth="0.5px"
      ></Box>
    </Flex>
  </ChakraProvider>
);
