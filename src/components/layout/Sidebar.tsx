import React from "react";
import { Box, Image, Link, VStack } from "@chakra-ui/react";
import Logo from "../../assets/images/bird.png";
import SidebarLink from "../ui/SidebarLink";
import listRoutes from "../../utils/listRoutes";

const Sidebar = () => {
  const [activeLink, setActiveLink] = React.useState("home");
  return (
    <Box
      position="fixed"
      width="275px"
      height="100vh"
      borderRightWidth="0.5px"
      borderRightColor="black.500"
      px="16px"
    >
      <VStack alignItems="start" spacing={4} mt="8px">
        <Link href="/">
          <Image boxSize="40px" objectFit="contain" src={Logo} alt="logo" />
        </Link>
        {listRoutes.map((route) => (
          <SidebarLink
            src={route.src}
            activeSrc={route.activeSrc}
            alt="Home Link"
            linkText={route.link}
            onClick={() => setActiveLink(route.route)}
            isActive={activeLink === route.route}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
