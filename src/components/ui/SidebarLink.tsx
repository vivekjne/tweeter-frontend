import React from "react";
import { Box, Image, Link, HStack, Text } from "@chakra-ui/react";

type SidebarLinkProps = {
  src: any;
  activeSrc: any;
  alt?: string;
  linkText: string;
  isActive: Boolean;
  onClick: () => void;
};

const SidebarLink = ({
  src,
  activeSrc,
  alt,
  linkText,
  isActive,
  onClick,
}: SidebarLinkProps) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ textDecoration: "none" }}
      role="group"
      onClick={onClick}
    >
      <Box
        px="20px"
        py="4px"
        borderRadius="30px"
        _hover={{
          background: "purple.100",
        }}
      >
        <HStack>
          <Image
            boxSize="20px"
            objectFit="contain"
            src={isHover || isActive ? activeSrc : src}
            alt={alt}
          />
          <Text
            _groupHover={{
              color: "purple.500",
            }}
            color={isActive ? "purple.500" : "black"}
            fontWeight="bold"
            fontSize="md"
          >
            {linkText}
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default SidebarLink;
