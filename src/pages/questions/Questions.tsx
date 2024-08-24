import { Box, Fab, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { ProtectedProvider } from "@contexts/ProtectedProvider";
import QuestionList from "../../app/components/organisms/questions";
import Quiz from "../../app/components/organisms/quiz";
import { HomeProvider } from "@contexts/HomeProvider";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import QuestionFilter from "../../app/components/QuestionFilter";
import CreateQuestionForm from "../../app/components/QuestionsPage/CreateQuestionForm";
import { SessionProvider, useSession } from "next-auth/react";

const Questions = () => {
  const [open, setOpen] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session } = useSession();

  return (
    <SessionProvider session={session}>
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
            {open === "CREATE_QUESTION" && <CreateQuestionForm />}

            {open !== "CREATE_QUESTION" && (
              <>
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
                <QuestionList showBtnAdd={open} session={session} />
              </>
            )}

            {open === "" && (
              <Box
                sx={{
                  position: "fixed",
                  right: "20px",
                  bottom: "20px",
                  zIndex: 1,
                }}
              >
                <Fab
                  id="basic-button"
                  aria-controls={opened ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={opened ? "true" : undefined}
                  onClick={handleClick}
                  color="primary"
                  aria-label="add"
                  // onClick={() => setOpen(true)}
                >
                  <AddIcon />
                </Fab>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={opened}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => setOpen("CREATE_QUESTION_LIST")}>
                    Lista de Exercício
                  </MenuItem>
                  <MenuItem onClick={() => setOpen("CREATE_QUESTION")}>
                    Questão
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Stack>
          {open === "CREATE_QUESTION_LIST" && <Quiz setOpen={setOpen} />}
        </Stack>
      </HomeProvider>
    </SessionProvider>
  );
};

export default Questions;
