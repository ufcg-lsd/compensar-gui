import { Question as QuestionProps } from "@interfaces/question.types";
import { FC, useState } from "react";
import {
  Button,
  CardMedia,
  FormControl,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import { alphabet } from "@app/utils/questionUtils";

const QuestionMain: FC<
  Omit<
    QuestionProps,
    "_id" | "title" | "font" | "year" | "type" | "competences"
  >
> = ({ statement, image, alternatives, response }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Escolha uma opção");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === response) {
      setHelperText("Parabéns, você acertou!");
      setError(false);
    } else if (value) {
      setHelperText("Resposta errada, tente novamente.");
      setError(true);
    } else {
      setHelperText("Escolha uma opção");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel id="demo-error-radios">
          <Typography variant="body2" color="text.secondary" paragraph>
            {statement}
          </Typography>
          {image && (
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="question image"
            />
          )}
        </FormLabel>
        <RadioGroup
          aria-labelledby="product-size-attribute"
          sx={{ gap: 2, mb: 2, flexWrap: "wrap", flexDirection: "row" }}
          value={value}
          onChange={handleRadioChange}
        >
          <Stack direction="column">
            {alternatives?.map((alternative, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                gap="15px"
                padding="10px 0"
                marginBottom="5px"
              >
                <Sheet
                  sx={{
                    position: "relative",
                    width: 25,
                    height: 25,
                    flexShrink: 0,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",

                    [`.${radioClasses.action}`]: {
                      borderColor: "#00bcd4",
                    },
                    [`& .${radioClasses.label}`]: {
                      color: "#00bcd4",
                    },
                    [`& .${radioClasses.checked} .${radioClasses.label}`]: {
                      color: "white",
                    },
                    [`& .${radioClasses.checked} .${radioClasses.action}`]: {
                      backgroundColor: "#00bcd4",
                      borderColor: "#00bcd4",
                    },
                  }}
                >
                  <Radio
                    color="neutral"
                    overlay
                    disableIcon
                    value={alternative}
                    label={
                      <Typography sx={{ fontSize: 12 }}>
                        {alphabet[index]}
                      </Typography>
                    }
                  />
                </Sheet>
                <Typography sx={{ fontSize: 14 }}>{alternative}</Typography>
              </Stack>
            ))}
          </Stack>
        </RadioGroup>

        <Stack direction="row" alignItems="center">
          <Button
            type="submit"
            variant="outlined"
            sx={{
              fontSize: 14,
              backgroundColor: "#00bcd4",
              borderColor: "#00bcd4",
              color: "#fff",
              width: "fit-content",
              padding: "0 12px",
              height: "34px",
              borderRadius: "3px",
            }}
          >
            Responder
          </Button>
          <FormHelperText sx={{ margin: "0px 0px 0px 15px" }}>
            {helperText}
          </FormHelperText>
        </Stack>
      </FormControl>
    </form>
  );
};

export default QuestionMain;
