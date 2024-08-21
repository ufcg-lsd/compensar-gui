"use client";
import "./styles.scss";
import Header from "./components/organisms/Header";
import CompetencesContainer from "@components/organisms/competences";
import AboutComputationalThinking from "@components/organisms/about-computational-thinking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="main_home">
        <AboutComputationalThinking />
        <CompetencesContainer />
      </main>
      <footer></footer>
    </QueryClientProvider>
  );
}
