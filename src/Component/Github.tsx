import React, { useState } from 'react';
import '../Style/Github.css'; 

const NumberList: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number | "">("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const addNumber = () => {
    if (inputValue === "") {
      setErrorMessage("Please enter a number.");
      return;
    }

    if (numbers.includes(inputValue)) {
      setErrorMessage("This number is already in the list.");
    } else {
      setNumbers((prevNumbers) => [...prevNumbers, inputValue]);
      setErrorMessage("");
    }
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setInputValue(isNaN(value) ? "" : value);
    setErrorMessage(""); 
  };

  return (
    <div className="container">
      <h1 className="title">Number List</h1>

      <div className="input-group">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a number"
          className="input-field"
        />
        <button onClick={addNumber} className="add-btn">Add Number</button>
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <ul className="number-list">
        {numbers.map((number, index) => (
          <li key={index} className="list-item">{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(NumberList);
