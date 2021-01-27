import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type SideContentProps = {
  children: ReactNode;
};

const SideContent = ({ children }: SideContentProps) => {
  return (
    <Box
      as="section"
      position="fixed"
      height="100%"
      width="350px"
      bg="white"
      right="0"
      borderLeftColor="black.500"
      borderLeftWidth="0.5px"
    >
      {children}
    </Box>
  );
};

export default SideContent;
