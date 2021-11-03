import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }
/* eslint-disable*/
  storeObj(newObj) {
    this.setState({
      obj: newObj,
    });
  }

  // componentDidUpdate(){
  //   this.value = 
  // } 
  render() {
    return (
      <div id="keyboard">
        <input type="text" id="display" placeholder="0" value={this.state.obj.next ? this.state.obj.next : this.state.obj.total ? this.state.obj.total : 0}/>
        <br />
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, 'AC'))}>AC</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '+/-'))}>+/-</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '%'))}>%</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '/'))} className="operators">/</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '7'))}>7</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '8'))}>8</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '9'))}>9</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '*'))} className="operators">*</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '4'))}>4</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '5'))}>5</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '6'))}>6</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '-'))} className="operators">-</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '1'))}>1</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '2'))}>2</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '3'))}>3</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '+'))} className="operators">+</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '0'))} id="zero">0</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '.'))}>.</button>
        <button type="button" onClick={() => this.storeObj(calculate(this.state.obj, '='))} className="operators">=</button>
      </div>
    );
  }
}
/* eslint-enable */
export default Calculator;
