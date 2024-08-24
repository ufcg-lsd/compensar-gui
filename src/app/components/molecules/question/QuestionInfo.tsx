import { Question as QuestionProps } from "@interfaces/question.types";
import { FC } from "react";

import { Stack } from "@mui/material";
import QuestionInfoItem from "./QuestionInfoItem";
import CompetenceTagList from "../../atoms/competence-tags/CompetenceTagList";

const QuestionInfo: FC<
  Omit<
    QuestionProps,
    "_id" | "statement" | "image" | "alternatives" | "response" | "title"
  >
> = ({ font, year = "?", competences = [], type }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding="8px 30px"
      borderBottom="2px solid rgba(0,0,0,.1)"
      alignItems="center"
    >
      <Stack direction="row">
        <QuestionInfoItem field="Ano" value={year} />
        <QuestionInfoItem field="Banca" value={font} />
        <QuestionInfoItem field="Área" value={type} />
      </Stack>

      <CompetenceTagList competences={competences} />
    </Stack>
  );
};

export default QuestionInfo;
