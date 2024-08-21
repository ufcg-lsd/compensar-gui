import "./styles.scss";
import ThemeContainer from "@components/templates/ThemeContainer";
import { Fab, Stack, Typography } from "@mui/material";
import { ProtectedProvider } from "@contexts/ProtectedProvider";
import QuestionList from "@components/organisms/questions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Quiz from "@components/organisms/quiz";
import { HomeProvider } from "@contexts/HomeProvider";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Sidebar from "@components/Sidebar";
import QuestionFilter from "@components/QuestionFilter";

const HomePage = () => {
  const queryClient = new QueryClient();
  const [open, setOpen] = useState(false);

  return (
    <ProtectedProvider>
      <ThemeContainer>
        <HomeProvider>
          <QueryClientProvider client={queryClient}>
            <Stack direction="row">
              <Sidebar />
              <Stack
                sx={{
                  gap: "16px",
                  overflow: "auto",
                  background: "#F6F5FB",
                  paddingY: "36px",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "32px",
                    lineHeight: "1.2em",
                    fontWeight: "semibold",
                    color: "black",
                    margin: "auto",
                    width: "100%",
                    maxWidth: "818px",
                  }}
                >
                  Questões
                </Typography>
                <QuestionFilter />
                <QuestionList showBtnAdd={open} />
                {!open && (
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => setOpen(true)}
                    sx={{
                      position: "fixed",
                      right: "20px",
                      bottom: "20px",
                      zIndex: 1,
                    }}
                  >
                    <AddIcon />
                  </Fab>
                )}
              </Stack>
              {open && <Quiz setOpen={setOpen} />}
            </Stack>
          </QueryClientProvider>
        </HomeProvider>
      </ThemeContainer>
    </ProtectedProvider>
  );
};

export default HomePage;
