import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Stack,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

type Alternative = {
  text: string;
  isCorrect: boolean;
};

const AlternativesForm = ({ onChange = (newAlternatives: Alternative[]) => {} }) => {
  const [alternatives, setAlternatives] = useState<Alternative[]>([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);

  const handleAlternativeChange = (
    index: number,
    field: 'text' | 'isCorrect',
    value: string | boolean
  ) => {
    const newAlternatives = [...alternatives];

    if (field === 'text' && typeof value === 'string') {
      newAlternatives[index][field] = value;
    } else if (field === 'isCorrect' && typeof value === 'boolean') {
      newAlternatives[index][field] = value;
    }

    setAlternatives(newAlternatives);
    onChange(newAlternatives);
  };

  const addAlternative = () => {
    setAlternatives([...alternatives, { text: '', isCorrect: false }]);
  };

  const removeAlternative = (index: number) => {
    const newAlternatives = alternatives.filter((_, i) => i !== index);
    setAlternatives(newAlternatives);
    onChange(newAlternatives);
  };

  return (
    <Stack spacing={2}>
      {alternatives.map((alt, index) => (
        <Box key={index} display="flex" alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center" flexGrow={1}>
            <TextField
              label={`Alternativa ${index + 1}`}
              value={alt.text}
              onChange={(e) => handleAlternativeChange(index, 'text', e.target.value)}
              variant="outlined"
              sx={{ flexGrow: 1 }}
            />
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Correta</InputLabel>
              <Select
                value={alt.isCorrect ? 'sim' : 'não'}
                onChange={(e) => handleAlternativeChange(index, 'isCorrect', e.target.value === 'sim')}
                label="Correta"
              >
                <MenuItem value="não">Não</MenuItem>
                <MenuItem value="sim">Sim</MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={() => removeAlternative(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Box>
      ))}
      <Button variant="contained" onClick={addAlternative}>
        Adicionar Alternativa
      </Button>
    </Stack>
  );
};

export default AlternativesForm;
