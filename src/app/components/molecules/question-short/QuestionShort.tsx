import { Question as QuestionInterface } from "@interfaces/question.types";
import { FC } from "react";

import {
  Avatar,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { useHomeSessionContext } from "@contexts/HomeProvider";
import { Close } from "@mui/icons-material";
import getCompetenceColor from "@app/utils/competencesColor";

interface QuestionShortProps {
  question: QuestionInterface;
}

const QuestionShort: FC<QuestionShortProps> = ({ question }) => {
  const {
    title,
    font,
    year,
    competences,
  } = question;
  const { removeMyQuestions } = useHomeSessionContext();

  const removeQuestion = () => {
    removeMyQuestions(question);
  };

  return (
    <Stack sx={{ padding: "12px" }} direction="row">
      <Stack gap={0.5}>
        <Typography
          fontSize="12px"
          fontStyle="italic"
          lineHeight={1.2}
          color="#aaa"
          textTransform="uppercase"
        >
          {`${font || ""} ${year || ""}`}
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="semibold"
          lineHeight={1.2}
          color="#aaa"
        >
          {title}
        </Typography>

        <Stack direction="row" gap={0.5}>
          {competences.map((competence) => (
            <Avatar
              aria-label="recipe"
              title={competence.title}
              sx={{
                bgcolor: getCompetenceColor(competence.title),
                height: 24,
                width: 24,
                fontSize: 12,
              }}
            >
              {competence.title.slice(0, 2)}
            </Avatar>
          ))}
        </Stack>
      </Stack>
      <IconButton
        aria-label="remove to list"
        onClick={removeQuestion}
        size="small"
      >
        <Close fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default QuestionShort;
