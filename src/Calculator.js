import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-900">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="text"
          className="input-display mb-2 px-2 py-1 w-full border rounded border-gray-300 focus:outline-none"
          value={input}
          readOnly
        />

        <div className="flex justify-end text-2xl mb-4 font-semibold result-display">
          {result}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', 0, '=', 'C'].map((item, index) => (
            <button
              key={index}
              className={`button ${isNaN(item) ? 'operator-button' : ''}`}
              onClick={() => (item === '=' ? calculate() : item === 'C' ? clear() : handleInput(item))}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
