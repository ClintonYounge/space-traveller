import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleButtonClick = (buttonName) => {
    setValue((previousValue) => calculate(previousValue, buttonName));
  };

  return (
    <div className="cal-page">

      <h2>Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="display">{value.next || value.total || 0}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonClick('AC')} type="button" className="clear-button">
              AC
            </button>
            <button onClick={() => handleButtonClick('+/-')} type="button" className="clear-button">
              +/-
            </button>
            <button onClick={() => handleButtonClick('%')} type="button" className="clear-button">
              %
            </button>
            <button onClick={() => handleButtonClick('÷')} type="button" className="operator-button">
              ÷
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('7')} type="button" className="button">
              7
            </button>
            <button onClick={() => handleButtonClick('8')} type="button" className="button">
              8
            </button>
            <button onClick={() => handleButtonClick('9')} type="button" className="button">
              9
            </button>
            <button onClick={() => handleButtonClick('x')} type="button" className="operator-button">
              ×
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('4')} type="button" className="button">
              4
            </button>
            <button onClick={() => handleButtonClick('5')} type="button" className="button">
              5
            </button>
            <button onClick={() => handleButtonClick('6')} type="button" className="button">
              6
            </button>
            <button onClick={() => handleButtonClick('-')} type="button" className="operator-button">
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('1')} type="button" className="button">
              1
            </button>
            <button onClick={() => handleButtonClick('2')} type="button" className="button">
              2
            </button>
            <button onClick={() => handleButtonClick('3')} type="button" className="button">
              3
            </button>
            <button onClick={() => handleButtonClick('+')} type="button" className="operator-button">
              +
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('0')} type="button" className="zero-button">
              0
            </button>
            <button onClick={() => handleButtonClick('.')} type="button" className="decimal-button">
              .
            </button>
            <button onClick={() => handleButtonClick('=')} type="button" className="operator-button">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
