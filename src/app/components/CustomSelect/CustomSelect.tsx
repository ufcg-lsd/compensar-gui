import React, { useState } from 'react';
import { TextField, MenuItem, Select } from '@mui/material';

const options = [
  { label: 'Geometria', tokens: ['Formas Geométricas', 'Círculo', 'Quadrado'] },
  { label: 'Matemática Avançada', tokens: ['Cálculo', 'Matemática'] },
  { label: 'Língua Portuguesa', tokens: ['Literatura', 'Livros'] }
];

export default function TokenSelect() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (event: { target: { value: string; }; }) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm) ||
    option.tokens.some(token => token.toLowerCase().includes(searchTerm))
  );

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        fullWidth
        variant="outlined"
      >
        {filteredOptions.map((option, index) => (
          <MenuItem key={index} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
