import { FC } from "react";

import { Container, Typography } from "@mui/material";
import Competences from "./Competences";
import useQueryCompetences from "@hooks/useQueryCompetences";
import LoadingCompetences from "./LoadingCompetences";

const CompetencesContainer: FC = () => {
  const { competences = [], isLoading, isError } = useQueryCompetences();
  const sortedCompetences = competences.sort((a, b) => a?.title.localeCompare(b?.title));
console.log(sortedCompetences)
  if (isError) return null;

  if (isLoading) return <LoadingCompetences />;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        margin: "24px 16px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Competências do Pensamento Computacional
      </Typography>
      <Competences competences={sortedCompetences} />
    </Container>
  );
};

export default CompetencesContainer;
