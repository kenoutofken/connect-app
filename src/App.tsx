import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/header/Header";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router";
import "./App.css";
import { PostsLastPageProvider } from "@/lib/contexts/PostsLastPageProvider";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Separator className="sticky top-19" />
        <main className="max-w-4xl mx-auto px-4 pb-8">
          <PostsLastPageProvider>
            <Outlet />
          </PostsLastPageProvider>
        </main>
        <Toaster position="top-right" richColors closeButton />
      </QueryClientProvider>
    </>
  );
}

export default App;
