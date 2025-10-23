import axios from "axios";
import { type PostsResponse } from "@/lib/types/post";
import {
  type MembersResponse,
  type LoginCredentials,
  type AuthResponse,
} from "@/lib/types/member";
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

export function fetchPostsByMember(memberId: number): Promise<PostsResponse> {
  return axios
    .get<PostsResponse>(`${API_BASE_URL}/post/user/${memberId}`)
    .then((response) => response.data);
}

export function loginUser(
  crednetials: LoginCredentials
): Promise<AuthResponse> {
  return axios
    .post<AuthResponse>(`${API_BASE_URL}/auth/login`, {
      username: crednetials.username,
      password: crednetials.password,
    })
    .then((response) => response.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}
