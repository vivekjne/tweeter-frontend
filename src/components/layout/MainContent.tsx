import React, { ReactNode } from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import Star from "../../assets/images/star.png";

type MainContentProps = {
  children: ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
  return (
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
      <Box as="main" mt="40px" width="100%" mr="350px" p="16px">
        {children}
      </Box>
    </Flex>
  );
};

export default MainContent;
