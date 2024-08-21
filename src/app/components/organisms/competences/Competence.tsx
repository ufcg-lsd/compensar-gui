import { FC } from "react";

import { Competence as CompetenceItem } from "@app/interfaces/competence.types";
import { Avatar, Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import getCompetenceColor from "@app/utils/competencesColor";

interface CompetenceProps  {
  competence: CompetenceItem
}

const Competence: FC<CompetenceProps>  = ({ competence }) => {
  const { title, description } = competence;
  const color = getCompetenceColor(title);

  return (
    <Stack
    width="300px"
      borderRadius="15px"
      sx={{
        background: "white",
        overflow: "hidden",
        boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
      }}
    >
      <Box
        height="12px"
        sx={{ background: color }}
        
      ></Box>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      </Stack>
  )
}

export default Competence;