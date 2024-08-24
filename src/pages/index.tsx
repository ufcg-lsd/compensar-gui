"use client";
import "./styles.scss";
import Header from "../app/components/organisms/Header";
import CompetencesContainer from "../app/components/organisms/competences";
import AboutComputationalThinking from "../app/components/organisms/about-computational-thinking";
import { QueryClient, QueryClientProvider } from "react-query";

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
