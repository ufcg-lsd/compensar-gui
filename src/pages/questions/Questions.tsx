import { Fab, Stack, Typography } from "@mui/material";
import { ProtectedProvider } from "@contexts/ProtectedProvider";
import QuestionList from "@components/organisms/questions";
import Quiz from "@components/organisms/quiz";
import { HomeProvider } from "@contexts/HomeProvider";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import QuestionFilter from "@components/QuestionFilter";

const Questions = () => {
  const [open, setOpen] = useState(false);

  return (
    <ProtectedProvider>
      <HomeProvider>
        <Stack direction="row">
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
      </HomeProvider>
    </ProtectedProvider>
  );
};

export default Questions;
