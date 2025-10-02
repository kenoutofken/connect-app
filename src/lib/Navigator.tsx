import { type RouteObject } from "react-router";
import App from "@/App";
import LatestPosts from "@/components/latestPosts/latestPosts";
import Members from "@/components/screens/members/Members";
import Notifications from "@/components/screens/notificaitons/Notifications";
import Messages from "@/components/screens/messages/Messages";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LatestPosts },
      { path: "/members", Component: Members },
      { path: "/notifications", Component: Notifications },
      { path: "/messages/", Component: Messages },
    ],
  },
];

export default routes;
