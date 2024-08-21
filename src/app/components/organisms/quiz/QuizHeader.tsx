import { Dispatch, FC, SetStateAction, useState } from "react";
import { Controller } from "react-hook-form";

import { Quiz, QuizForm } from "@interfaces/quiz.types";

import { useHomeSessionContext } from "@contexts/HomeProvider";
import { fetchQuiz } from "@hooks/fetchs/fetchQuiz";
import { useFormQuiz } from "./useFormQuiz";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Input from "@components/atoms/Input";

import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

interface QuizHeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const QuizHeader: FC<QuizHeaderProps> = ({ setOpen }) => {
  const { control, handleSubmit } = useFormQuiz();
  const { myQuestions, hasQuestion } = useHomeSessionContext();

  const submitQuiz = (form: QuizForm) => {
    const quiz: Quiz = {
      title: form.title,
      questions: myQuestions,
    };

    fetchQuiz(quiz);
  };

  return (
    <form onSubmit={handleSubmit(submitQuiz)}>
      <Stack sx={{ gap: "30px" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "1.2em",
              fontWeight: "semibold",
              color: "black",
            }}
          >
            Questionário
          </Typography>
          <IconButton size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Stack>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "1.2em",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Nome
          </Typography>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Controller
              name="title"
              control={control}
              render={({ field, formState: { errors } }) => (
                <Input
                  showError={!!errors.title?.message}
                  errorMessage={errors.title?.message}
                  variant="standard"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Box>
        </Stack>

        <Stack>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "1.2em",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Questões
          </Typography>
        </Stack>
      </Stack>
    </form>
  );
};

export default QuizHeader;
