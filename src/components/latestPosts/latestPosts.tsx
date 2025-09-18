import { Suspense } from "react";
import PostsList from "@/components/ui/posts/PostsList";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import styles from "./latestPosts.module.css";
import React from "react";
import PostsSkeleton from "@/components/ui/skeletons/PostsSkeleton";

export default function LatestPosts() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold mb-6">Latest Posts</h2>
        <Button className={`${styles.button}`}>
          <PlusIcon className="size-6" /> Create Post
        </Button>
      </div>
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList />
      </Suspense>
    </main>
  );
}
