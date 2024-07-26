import { Question as QuestionInterface } from "@interfaces/question.types";
import { FC, useEffect, useState } from "react";

import { Stack, Typography, Breadcrumbs, IconButton, Box } from "@mui/material";
import { useHomeSessionContext } from "@contexts/HomeProvider";

import { AddCircle, CheckCircle } from "@mui/icons-material";

interface QuestionProps {
  index: number;
  question: QuestionInterface;
  showBtnAdd: boolean;
}

const QuestionHeader: FC<QuestionProps> = ({ index, question, showBtnAdd }) => {
  const { title, type, _id } = question;

  const { saveMyQuestions, containQuestion, myQuestions } =
    useHomeSessionContext();

  const [hasAdd, setHasAdd] = useState(containQuestion(_id));

  const addQuestionInListAndUpdateBtn = () => {
    saveMyQuestions(question);
    setHasAdd(true);
  };

  useEffect(() => {
    setHasAdd(containQuestion(_id));
  }, [myQuestions, _id, containQuestion]);

  return (
    <Stack direction="row">
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRight: "1px solid rgba(0, 0, 0, .1)",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
          color: "#adb5bd",
          fontSize: "12px",
          fontWeight: "600",
          width: "50px",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        {hasAdd ? (
          <CheckCircle sx={{ padding: 0 }} color="success" />
        ) : showBtnAdd ? (
          <IconButton
            sx={{ padding: 0 }}
            aria-label="add to list"
            onClick={addQuestionInListAndUpdateBtn}
          >
            <AddCircle />
          </IconButton>
        ) : (
          index + 1
        )}
      </Box>
      <Typography
        sx={{
          backgroundColor: "#adb5bd",
          borderRight: "1px solid rgba(0, 0, 0, .1)",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "0 8px",
          height: "36px",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        {_id}
      </Typography>
      <Typography
        sx={{
          backgroundColor: "#f1f3f5",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
          fontSize: "12px",
          fontWeight: "normal",
          width: "100%",
          height: "36px",
          padding: "0 16px",
          color: "#495057",
          alignContent: "center",
        }}
      >
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Typography fontSize="12px">{title}</Typography>
          <Typography fontSize="12px">{type}</Typography>
        </Breadcrumbs>
      </Typography>
    </Stack>
  );
};

export default QuestionHeader;
