import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/header/Header";
import { Separator } from "@/components/ui/separator";
import LatestPosts from "@/components/latestPosts/latestPosts";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientPRovider client={queryClient}>
        <Header />
        <Separator />
        <LatestPosts />
      </QueryClientPRovider>
    </>
  );
}

export default App;
