import axios from "axios";
import { type PostsResponse } from "@/lib/types/post";
import { API_BASE_URL } from "./constants";

export function fetchPosts() {
  return axios
    .get<PostsResponse>(`${API_BASE_URL}/post`)
    .then((response) => response.data);
}
