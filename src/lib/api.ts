import axios from "axios";
import { type PostsResponse } from "@/lib/types/post";

export function fetchPosts() {
  return axios
    .get<PostsResponse>("https://dummyjson.com/posts")
    .then((response) => response.data);
}
