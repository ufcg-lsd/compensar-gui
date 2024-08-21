import {
  FormControl,
  InputLabel,
  Select,
  Stack,
} from "@mui/material";

const QuestionFilter = () => {
  return (
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
      <FormControl sx={{ width: "25%", borderRadius: "10px", background: "#FAFAFA" }}>
        <InputLabel>Competências</InputLabel>
        <Select
          sx={{
            border: "none",
            "& fieldset": { border: "none" },
          }}
          label="Competências"
        ></Select>
      </FormControl>
      <FormControl sx={{ width: "25%", borderRadius: "10px", background: "#FAFAFA" }}>
        <InputLabel>Área</InputLabel>
        <Select
          sx={{
            border: "none",
            "& fieldset": { border: "none" },
          }}
          label="Área"
        ></Select>
      </FormControl>
      <FormControl sx={{ width: "25%", borderRadius: "10px", background: "#FAFAFA" }}>
        <InputLabel>Banca</InputLabel>
        <Select
          sx={{
            border: "none",
            "& fieldset": { border: "none" },
          }}
          label="Banca"
        ></Select>
      </FormControl>
      <FormControl sx={{ width: "25%", borderRadius: "10px", background: "#FAFAFA" }}>
        <InputLabel>Ano</InputLabel>
        <Select
          sx={{
            border: "none",
            "& fieldset": { border: "none" },
          }}
          label="Ano"
        ></Select>
      </FormControl>
    </Stack>
  );
};

export default QuestionFilter;
