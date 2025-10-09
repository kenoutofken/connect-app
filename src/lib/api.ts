import axios from "axios";
import { type PostsResponse } from "@/lib/types/post";
import { type MembersResponse } from "@/lib/types/member";
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

export function fetchMembers(): Promise<MembersResponse> {
  return axios.get(`${API_BASE_URL}/users`).then((response) => response.data);
}
