import { Question as QuestionInterface } from "@interfaces/question.types";
import { FC } from "react";
import { Stack } from "@mui/material";
import QuestionMain from "./QuestionMain";
import QuestionHeader from "./QuestionHeader";
import QuestionInfo from "./QuestionInfo";

interface QuestionProps {
  index: number;
  question: QuestionInterface;
  showBtnAdd: boolean;
}

const Question: FC<QuestionProps> = ({ question, ...props }) => {
  const { statement, font, year, image, alternatives, response, competences } =
    question;

  return (
    <Stack width="100%" border="1px solid #bbb" borderRadius="3px">
      <QuestionHeader question={question} {...props} />
      <QuestionInfo year={year} font={font} competences={competences} />
      <Stack padding="20px" gap="20px">
        <QuestionMain
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
