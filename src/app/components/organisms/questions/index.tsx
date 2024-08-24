import { FC } from "react";

import { Backdrop, CircularProgress, List, ListItem } from "@mui/material";
import Question from "../../molecules/question/Question";

import useQueryQuestions from "@hooks/useQueryQuestions";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

interface QuestionListProps {
  showBtnAdd: string;
}

const QuestionList: FC<QuestionListProps> = ({ session, howBtnAdd }) => {


  useEffect(() => {
    if (session) {
      const accessToken = session.accessToken;
      console.log("Google Access Token:", accessToken);

      // Você pode usar o accessToken aqui para fazer chamadas à API do Google
    }
  }, [session]);

  const questions: any[] = [];
  const isLoading = false;

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
    <SessionProvider session={session}>
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
            <Question
              index={index}
              question={question}
              showBtnAdd={showBtnAdd}
            />
          </ListItem>
        ))}
      </List>
    </SessionProvider>
  );
};

export default QuestionList;
