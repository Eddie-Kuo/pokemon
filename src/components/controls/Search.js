import React from 'react';
import TextField from '@mui/material/TextField';


export default function Search({ handleSearch, searched }) {
  return (
    <div className='search-bar'>
      <TextField id="outlined-basic" label="Search Pokemon" variant="outlined" type='text' value={searched} onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );


}
