import CONTENT_OPTIONS from "@app/constants/content";
import Editor from "../../Editor/Editor";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternativesForm from "./AlternativasForm";
import RadioGroupRating from "./FeedbackForm";

const CreateQuestionForm = () => {
  return (
    <Stack gap="16px">
      <Typography
        sx={{
          fontSize: "32px",
          lineHeight: "1.2em",
          fontWeight: "semibold",
          color: "black",
          margin: "auto",
          width: "100%",
          maxWidth: "818px",
        }}
      >
        Criar questão
      </Typography>
      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        direction="row"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Tipo</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="OBJECTIVE"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="OBJECTIVE"
              control={<Radio />}
              label="Objetiva"
            />
            <FormControlLabel
              value="SUBJECTIVE"
              control={<Radio />}
              label="Subjetiva"
            />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        direction="row"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <FormControl>
          <TextField id="standard-basic" label="Fonte" variant="standard" />
          <Typography fontStyle="italic">Ex.: PISA, ENEM ou Autoral</Typography>
        </FormControl>
      </Stack>

      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <Typography>Enunciado</Typography>
        <Editor />
      </Stack>
      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <Typography>Conteúdo</Typography>
        <Select>
          {CONTENT_OPTIONS.map((option, index) => (
            <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <TextField id="standard-basic" label="Espelho" variant="standard" />
      </Stack>
      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <Typography>Alternativas</Typography>
        <AlternativesForm />
      </Stack>

      <Stack
        width="100%"
        maxWidth="818px"
        margin="auto"
        borderRadius="15px"
        sx={{
          background: "white",
          overflow: "hidden",
          // boxShadow: "0px 4px 10px #0000002B, 0px 2px 6px #00000005",
          gap: "16px",
          padding: "16px 24px",
          marginBottom: "16px",
        }}
      >
        <Box>[Aqui serão listadas as competências identificadas]</Box>
        <Typography>Confiança da avaliação</Typography>
        <RadioGroupRating />
        <TextField label="Observações" />
      </Stack>
    </Stack>
  );
};

export default CreateQuestionForm;
