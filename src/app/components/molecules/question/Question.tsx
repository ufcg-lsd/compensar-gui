import { Question as QuestionInterface } from "@interfaces/question.types";
import { FC, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import QuestionMain from "./QuestionMain";
import QuestionInfo from "./QuestionInfo";
import { useHomeSessionContext } from "@contexts/HomeProvider";

interface QuestionProps {
  index: number;
  question: QuestionInterface;
  showBtnAdd: boolean;
}

const Question: FC<QuestionProps> = ({ question, showBtnAdd }) => {
  const {
    _id,
    title,
    statement,
    font,
    year,
    image,
    alternatives,
    response,
    competences,
    type,
  } = question;

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
    <Stack
      width="100%"
      borderRadius="15px"
      sx={{
        background: "white",
        overflow: "hidden",
        boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
      }}
      onClick={addQuestionInListAndUpdateBtn}
    >
      <Box
        height="12px"
        sx={{ background: !showBtnAdd ? "#556EA550" : (hasAdd ? "#5671A6" : "#AAAAAA") }}
        
      ></Box>
      <QuestionInfo
        year={year}
        font={font}
        type={type}
        competences={competences}
      />
      <Stack paddingY="24px" gap="20px">
        <QuestionMain
          title={title}
          statement={statement}
          image={image}
          alternatives={alternatives}
          response={response}
        />
      </Stack>
    </Stack>
  );
};

export default Question;
