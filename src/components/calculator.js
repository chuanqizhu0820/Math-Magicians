import React from 'react';
import './calculator.css';
import PropTypes from 'prop-types';
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
    this.storeObj = this.storeObj.bind(this);
  }

  componentDidUpdate() {
    const beep = document.querySelector('#beep');
    beep.play();
  }

  storeObj(e) {
    const { obj } = this.state;
    const newObj = calculate(obj, e.target.value);
    this.setState({
      obj: newObj,
    });
  }

  // }

  render() {
    let someValue = '0';
    const { obj } = this.state;
    const { total, next } = obj;
    if (next !== null) {
      someValue = next;
    } if (total !== null && next === null) {
      someValue = total;
    }
    return (
      <div id="keyboard">
        <input
          type="text"
          id="display"
          value={someValue}
        />
        <br />
        <Button value="AC" storeFunc={this.storeObj} />
        <Button value="+/-" storeFunc={this.storeObj} />
        <Button value="%" storeFunc={this.storeObj} />
        <Button value="/" storeFunc={this.storeObj} className="operators" />
        <Button value="7" storeFunc={this.storeObj} />
        <Button value="8" storeFunc={this.storeObj} />
        <Button value="9" storeFunc={this.storeObj} />
        <Button value="*" storeFunc={this.storeObj} className="operators" />
        <Button value="4" storeFunc={this.storeObj} />
        <Button value="5" storeFunc={this.storeObj} />
        <Button value="6" storeFunc={this.storeObj} />
        <Button value="-" storeFunc={this.storeObj} className="operators" />
        <Button value="1" storeFunc={this.storeObj} />
        <Button value="2" storeFunc={this.storeObj} />
        <Button value="3" storeFunc={this.storeObj} />
        <Button value="+" storeFunc={this.storeObj} className="operators" />
        <Button value="0" storeFunc={this.storeObj} id="zero" />
        <Button value="." storeFunc={this.storeObj} />
        <Button value="=" storeFunc={this.storeObj} className="operators" />
      </div>
    );
  }
}

const Button = (props) => {
  const {
    storeFunc = '', value = '', className = '', id = '',
  } = props;
  return (
    <button
      type="button"
      onClick={storeFunc}
      value={value}
      className={className}
      id={id}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  storeFunc: null,
  value: null,
  className: null,
  id: null,
};

Button.propTypes = {
  storeFunc: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
export default Calculator;
