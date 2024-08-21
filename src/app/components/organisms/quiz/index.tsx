import { Button, IconButton, Stack } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import QuizHeader from "./QuizHeader";
import QuizList from "./QuizList";
import { useHomeSessionContext } from "@contexts/HomeProvider";
import { Download } from "@mui/icons-material";
interface QuizProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Quiz: FC<QuizProps> = ({ setOpen }) => {
  const { hasQuestion } = useHomeSessionContext();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "36px 25px",
        height: "100vh",
        overflow: "auto",
        width: "350px",
        position: "sticky",
        top: 0,
        right: 0,
        borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <QuizHeader setOpen={setOpen} />
      <QuizList />
      {hasQuestion && (
        <Button
          sx={{
            fontSize: 14,
            backgroundColor: "#5671A6",
            borderColor: "#5671A6",
            color: "#fff",
            width: "100%",
            padding: "0 12px",
            height: "34px",
            borderRadius: "15px",
            marginTop: "16px"
          }}
        >
          <IconButton type="submit" size="small">
            <Download sx={{ color: "white" }} />
          </IconButton>
          Baixar lista
        </Button>
      )}
    </Stack>
  );
};

export default Quiz;
