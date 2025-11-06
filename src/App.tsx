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
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#fff",
              color: "#1f2937", // slate-800 text
              border: "1px solid #242424",
              fontWeight: 500,
            },
            classNames: {
              error: "bg-white text-red-600 border border-red-400",
              success: "bg-white text-green-600 border border-green-400",
            },
            closeButton: true,
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
