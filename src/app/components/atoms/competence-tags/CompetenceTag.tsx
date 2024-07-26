import { FC } from "react";
import { Box, Typography } from "@mui/material";

import getCompetenceColor from "@app/utils/competencesColor";

interface CompetenceTagProps {
  title: string;
}
const CompetenceTag: FC<CompetenceTagProps> = ({ title }) => {
  const color = getCompetenceColor(title);
  return (
    <Box
      sx={{
        bgcolor: color,
        width: "max-content",
        borderRadius: "3px",
        padding: "5px 7px",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: 10,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CompetenceTag;
