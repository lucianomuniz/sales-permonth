import React, { useState } from 'react';
// import './App.css';

function App() {
  // Array of objects containing our fruit data
  const countries = [
    { label: 'Kenya', value: 'Kenya', id: 1 },
    { label: 'India', value: 'India', id: 2 },
    { label: 'Botswana', value: 'Botswana', id: 3 },
  ];

  // Using state to keep track of what the selected fruit is
  const [countryReg, setCountryReg] = useState('');

  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  const handleCountryChange = (e) => {
    setCountryReg(e.target.value);
  };

  return (
    <div className='App'>
      {countryReg}
      <br />
      <select onChange={handleCountryChange}>
        <option value=''> -- Select a Country -- </option>
        {countries.map((countryReg) => (
          <option value={countryReg.value}>{countryReg.label}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
