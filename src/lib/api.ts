import axios from "axios";
import { type PostsResponse } from "@/lib/types/post";
import { API_BASE_URL, POSTS_PER_PAGE } from "./constants";

export function fetchPosts(page: number) {
  return axios
    .get<PostsResponse>(
      `${API_BASE_URL}/post?limit=${POSTS_PER_PAGE}&skip=${
        page * POSTS_PER_PAGE
      }`
    )
    .then((response) => response.data);
}
