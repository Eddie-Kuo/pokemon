import React from 'react';

// set up select options with props
export default function Select({ options, handleSelect }) {
  return (
    <div>
      <label>Filter Pokemon by type</label>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value='all'>All</option>
        {options.map((option) => {
          return <option key={option} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}
