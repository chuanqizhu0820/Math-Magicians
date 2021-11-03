import React from 'react';
import './calculator.css';
import getValue from '../logic/calculate';
import { clearValue, number, operator } from '../logic/operate';

/* eslint-disable */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidUpdate(){
    // this.setState({
    //   value: document.querySelector("#display").value
    // })
    console.log("run")
  }

  render() {
    return (
      <div id="keyboard">
        <input type="text" id="display" placeholder="0"></input>
        <br />
        <button type="button" onClick={clearValue}>AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operators">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" onClick={()=>operator("*")} className="operators">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operators">-</button>
        <button type="button" onClick={()=>number(1)}>1</button>
        <button type="button" onClick={()=>number(2)}>2</button>
        <button type="button">3</button>
        <button type="button" onClick={()=>operator("+")} className="operators">+</button>
        <button type="button" id="zero">0</button>
        <button type="button">.</button>
        <button type="button" onClick={getValue}className="operators">=</button>
      </div>
    );
  }
}
/* eslint-enable */

export default Calculator;
