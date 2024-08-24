"use client";

import Sidebar from "../app/components/Sidebar";
import ThemeContainer from "../app/components/templates/ThemeContainer";
import { Stack } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app"; // Importando o tipo de `props` da página Next.js
import { SessionProvider, useSession } from "next-auth/react";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  const session = useSession();

  return (
    <ThemeContainer>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Stack>
            {/* <Sidebar /> */}
            <Component {...pageProps} />
          </Stack>
        </SessionProvider>
      </QueryClientProvider>
    </ThemeContainer>
  );
};

export default App;
