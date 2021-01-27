import Home from "../assets/images/home.png";
import HomeActive from "../assets/images/home_active.png";
import Hashtag from "../assets/images/hashtag.png";
import HashtagActive from "../assets/images/hashtag_active.png";
import Notification from "../assets/images/notification.png";
import NotificationActive from "../assets/images/notification_active.png";
import Messaging from "../assets/images/messaging.png";
import MessagingActive from "../assets/images/messaging_active.png";
import Bookmark from "../assets/images/bookmark.png";
import BookmarkActive from "../assets/images/bookmark_active.png";
import Playlist from "../assets/images/playlist.png";
import PlaylistActive from "../assets/images/playlist_active.png";
import MaleUser from "../assets/images/male_user.png";
import MaleUserActive from "../assets/images/male_user_active.png";
import ViewMore from "../assets/images/view_more.png";
import ViewMoreActive from "../assets/images/view_more_active.png";

export default [
  {
    link: "Home",
    route: "home",
    src: Home,
    activeSrc: HomeActive,
  },
  {
    link: "Explore",
    route: "explore",
    src: Hashtag,
    activeSrc: HashtagActive,
  },
  {
    link: "Notifications",
    route: "notifications",
    src: Notification,
    activeSrc: NotificationActive,
  },
  {
    link: "Messages",
    route: "messages",
    src: Messaging,
    activeSrc: MessagingActive,
  },
  {
    link: "Bookmarks",
    route: "bookmarks",
    src: Bookmark,
    activeSrc: BookmarkActive,
  },
  {
    link: "Lists",
    route: "lists",
    src: Playlist,
    activeSrc: PlaylistActive,
  },
  {
    link: "Profile",
    route: "profile",
    src: MaleUser,
    activeSrc: MaleUserActive,
  },
  {
    link: "More",
    route: "more",
    src: ViewMore,
    activeSrc: ViewMoreActive,
  },
];
