import { FC } from "react";
import CompetenceTag from "./CompetenceTag";

import { Competences } from "@interfaces/competence.types";
import { Stack } from "@mui/material";

interface CompetenceTagListProps {
  competences: Competences;
}

const CompetenceTagList: FC<CompetenceTagListProps> = ({
  competences = [],
}) => {
  return (
    <Stack
      gap="6px"
      sx={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
      }}
    >
      {competences.length === 0 ? (
        <CompetenceTag title="Não avaliada" />
      ) : (
        competences.map((competence, index) => (
          <CompetenceTag key={index} title={competence.title} />
        ))
      )}
    </Stack>
  );
};

export default CompetenceTagList;
