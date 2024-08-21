import QuestionShort from "@components/molecules/question-short/QuestionShort";
import { useHomeSessionContext } from "@contexts/HomeProvider";
import { List, ListItem } from "@mui/material";

const QuizList = () => {
  const { myQuestions } = useHomeSessionContext();
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        gap:"16px"
      }}
    >
      {myQuestions.map((question, index) => (
        <ListItem
          key={index}
          alignItems="flex-start"
          sx={{
            padding: 0,
            boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <QuestionShort question={question} />
        </ListItem>
      ))}
    </List>
  );
};

export default QuizList;
