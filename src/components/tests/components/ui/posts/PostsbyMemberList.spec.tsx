import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  fireEvent,
  render,
  screen,
  type RenderOptions,
} from "@testing-library/react";
import { afterEach, describe, expect, test, vi, type Mock } from "vitest";
import PostsbyMemberList from "@/components/ui/members/PostsbyMemberList";

const mockMemberId = 1;
const mockMemberPosts = [
  {
    id: 1,
    title: "Post number 1",
    body: "It was a day like any other",
    tags: ["crime", "english"],
    reactions: {
      likes: 7,
      dislikes: 52,
    },
    userId: mockMemberId,
  },
  {
    id: 2,
    title: "Post number 2",
    body: "It was not a day like any other",
    tags: ["romance", "french"],
    reactions: {
      likes: 31,
      dislikes: 5,
    },
    userId: mockMemberId,
  },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: false,
    },
  },
});

vi.mock("@tanstack/react-query", async (importOriginal) => {
  const actual: object = await importOriginal();
  return {
    ...actual,
    useSuspenseQuery: vi.fn(),
  };
});

const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

const renderWithQueryClient = (
  children: React.ReactNode,
  options?: RenderOptions
) => {
  return render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    options
  );
};

describe("PostsByMemberList component", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("when the user has no post", () => {
    test("outputs an h33, and a button that can be clicked to go back", () => {
      (useSuspenseQuery as Mock).mockReturnValue({
        data: {
          posts: mockMemberPosts,
        },
      });

      const view = renderWithQueryClient(
        <PostsbyMemberList id={mockMemberId} />
      );
      expect(view).not.toBeNull();

      const h3 = screen.findByText("This member hasn't created any posts.");
      expect(h3).not.toBeNull();

      const btn = screen.getByRole("button", { name: "Back" });
      expect(btn).not.toBeNull();

      fireEvent.click(btn);
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    describe("when the user hast posts", () => {
      test("outputs a ul containing a li for each posts, and a button that can be clicked to go back", () => {
        (useSuspenseQuery as Mock).mockReturnValue({
          data: {
            posts: mockMemberPosts,
          },
        });

        const view = renderWithQueryClient(
          <PostsbyMemberList id={mockMemberId} />
        );
        expect(view).not.toBeNull();

        const ul = view.container.querySelector("ul");
        expect(ul).not.toBeNull();

        const lis = view.container.querySelectorAll("li");
        expect(lis.length).toBe(mockMemberPosts.length);

        const firstPostHeading = lis[0].querySelector("h3");
        expect(firstPostHeading?.textContent).toBe(mockMemberPosts[0].title);

        const btn = screen.getByRole("button", { name: "Back" });
        expect(btn).not.toBeNull();

        fireEvent.click(btn);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
      });
    });
  });
});
