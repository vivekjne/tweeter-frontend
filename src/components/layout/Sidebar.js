import React from "react";
import { Box, Image, Link, VStack } from "@chakra-ui/react";

import Logo from "../../assets/images/bird.png";
import Home from "../../assets/images/home.png";
import HomeActive from "../../assets/images/home_active.png";
import Hashtag from "../../assets/images/hashtag.png";
import HashtagActive from "../../assets/images/hashtag_active.png";
import Notification from "../../assets/images/notification.png";
import NotificationActive from "../../assets/images/notification_active.png";
import Messaging from "../../assets/images/messaging.png";
import MessagingActive from "../../assets/images/messaging_active.png";
import Bookmark from "../../assets/images/bookmark.png";
import BookmarkActive from "../../assets/images/bookmark_active.png";
import Playlist from "../../assets/images/playlist.png";
import PlaylistActive from "../../assets/images/playlist_active.png";
import MaleUser from "../../assets/images/male_user.png";
import MaleUserActive from "../../assets/images/male_user_active.png";
import ViewMore from "../../assets/images/view_more.png";
import ViewMoreActive from "../../assets/images/view_more_active.png";

import SidebarLink from "../ui/SidebarLink";
import listRoutes from "../../utils/listRoutes";

export default function Sidebar() {
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
}
