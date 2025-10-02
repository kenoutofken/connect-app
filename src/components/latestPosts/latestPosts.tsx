import { Suspense, useContext } from "react";
import PostsList from "@/components/ui/posts/PostsList";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import styles from "./latestPosts.module.css";
import React from "react";
import PostsSkeleton from "@/components/ui/skeletons/PostsSkeleton";
import ErrorBoundary from "@/components/error/ErrorBoundary";
import { PostsLastPageContext } from "@/lib/contexts/PostsLastPageContext";

export default function LatestPosts() {
  const context = useContext(PostsLastPageContext);
  if (!context) {
    throw new Error("LatestPosts must be used within a PostsLastPageProvider");
  }
  const { page, setPage } = context;
  return (
    <>
      <div className={styles.latest_posts_container}>
        <h2 className="text-4xl font-bold mb-6">Latest Posts</h2>
        <Button className={`${styles.create_post_button}`}>
          <PlusIcon className="size-6" /> Create Post
        </Button>
      </div>
      <ErrorBoundary message="Failed to load posts">
        <Suspense fallback={<PostsSkeleton />}>
          <PostsList page={page} setPage={setPage} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
