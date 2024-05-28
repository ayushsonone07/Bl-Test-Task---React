import React from 'react';


const Dropdown = ({ states, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {states.map((state) => (
        <option key={state.code} value={state.code}>{state.name}</option>
      ))}
    </select>
  );
};

export default Dropdown;