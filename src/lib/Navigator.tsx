import { type RouteObject } from "react-router";
import App from "@/App";
import LatestPosts from "@/components/latestPosts/latestPosts";
import Members from "@/components/screens/members/Members";
import Notifications from "@/components/screens/notificaitons/Notifications";
import Messages from "@/components/screens/messages/Messages";
import NotFound from "@/components/screens/notFound/NotFound";
import PostsbyMember from "@/components/screens/members/PostsbyMember";
import Login from "@/components/screens/login/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LatestPosts },
      { path: "/members", Component: Members },
      { path: "/members/:id/posts", Component: PostsbyMember },
      { path: "/notifications", Component: Notifications },
      { path: "/messages", Component: Messages },
      { path: "/login", Component: Login },
      { path: "*", Component: NotFound },
    ],
  },
];

export default routes;
