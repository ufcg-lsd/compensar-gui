"use client";

import Sidebar from "@components/Sidebar";
import ThemeContainer from "@components/templates/ThemeContainer";
import { Stack } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = ({ Component, ...props }) => {
  const queryClient = new QueryClient();

  return (
    <ThemeContainer>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Sidebar />
          <Component {...props} />
        </Stack>
      </QueryClientProvider>
    </ThemeContainer>
  );
};

export default App;
