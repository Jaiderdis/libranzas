import React, { useState } from 'react';

const InputNumber = ({id,onValueChange}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    
    const numericInput = value.replace(/[^0-9]/g, '');

    const formattedInput = numericInput.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setInputValue(formattedInput);
    onValueChange({name,value});
  };

  return (

    <input 
    id={id}
    type="text" 
    value={inputValue} 
    onChange={handleInputChange} 
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="$" />
  );
};

export default InputNumber;
