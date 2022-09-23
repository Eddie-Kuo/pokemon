import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectEl({ options, handleSelect }) {
  return (

    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Filter by type"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <MenuItem value='all'>All</MenuItem>
          {options.map((option) => {
            return <MenuItem key={option} value={option}>{option}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
