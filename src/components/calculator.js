import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorUI extends React.Component {
  render() {
    return (
      <div id="keyboard">
        <input type="text" id="display" placeholder="0" />
        <br />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operators">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operators">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operators">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operators">+</button>
        <button type="button" id="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="operators">=</button>
      </div>
    );
  }
}

export default CalculatorUI;
