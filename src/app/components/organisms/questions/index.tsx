import { FC } from "react";

import {
  Backdrop,
  CircularProgress,
  List,
  ListItem,
} from "@mui/material";
import Question from "@components/molecules/question/Question";

import useQueryQuestions from "@hooks/useQueryQuestions";

interface QuestionListProps {
  showBtnAdd: boolean;
}
const QuestionList: FC<QuestionListProps> = ({ showBtnAdd }) => {
  const { questions, isLoading } = useQueryQuestions();

  if (isLoading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        gap: "20px",
        width: "100%",
        margin: "auto",
        maxWidth: "818px",
      }}
    >
      {questions.map((question, index) => (
        <ListItem sx={{ padding: 0 }} key={index} alignItems="flex-start">
          <Question index={index} question={question} showBtnAdd={showBtnAdd} />
        </ListItem>
      ))}
    </List>
  );
};

export default QuestionList;
