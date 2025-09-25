import { Suspense } from "react";
import PostsList from "@/components/ui/posts/PostsList";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import styles from "./latestPosts.module.css";
import React from "react";
import PostsSkeleton from "@/components/ui/skeletons/PostsSkeleton";
import ErrorBoundary from "@/components/error/ErrorBoundary";
import { Loader2 } from "lucide-react";

export default function LatestPosts() {
  return (
    <main className="max-w-4xl mx-auto px-4 pb-8">
      <div className={styles.latest_posts_container}>
        <h2 className="text-4xl font-bold mb-6">Latest Posts</h2>
        <Button className={`${styles.create_post_button}`}>
          <PlusIcon className="size-6" /> Create Post
        </Button>
      </div>
      <ErrorBoundary message="Failed to load posts">
        <Suspense
          fallback={<Loader2 className="animate-spin size-10 mx-auto m-12" />}
        >
          <PostsList />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
