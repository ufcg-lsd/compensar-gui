import { FC } from "react";

import { Stack, Typography } from "@mui/material";

interface QuestionInfoItem {
  field: string;
  value: string | number;
}

const QuestionInfoItem: FC<QuestionInfoItem> = ({ field, value = "" }) => {
  return (
    <Stack direction="row" marginRight="15px" gap="3px">
      <Typography fontWeight="bold" fontSize="12px">{`${field}: `}</Typography>
      <Typography fontSize="12px">{value}</Typography>
    </Stack>
  );
};

export default QuestionInfoItem;
