import React, { useState, useEffect } from 'react';
import './calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(() => {
    const beep = document.querySelector('#beep');
    beep.play();
  });

  let someValue = '0';
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
      <Button value="AC" obj={obj} func={setObj} />
      <Button value="+/-" obj={obj} func={setObj} />
      <Button value="%" obj={obj} func={setObj} />
      <Button value="/" obj={obj} func={setObj} className="operators" />
      <Button value="7" obj={obj} func={setObj} />
      <Button value="8" obj={obj} func={setObj} />
      <Button value="9" obj={obj} func={setObj} />
      <Button value="*" obj={obj} func={setObj} className="operators" />
      <Button value="4" obj={obj} func={setObj} />
      <Button value="5" obj={obj} func={setObj} />
      <Button value="6" obj={obj} func={setObj} />
      <Button value="-" obj={obj} func={setObj} className="operators" />
      <Button value="1" obj={obj} func={setObj} />
      <Button value="2" obj={obj} func={setObj} />
      <Button value="3" obj={obj} func={setObj} />
      <Button value="+" obj={obj} func={setObj} className="operators" />
      <Button value="0" obj={obj} func={setObj} id="zero" />
      <Button value="." obj={obj} func={setObj} />
      <Button value="=" obj={obj} func={setObj} className="operators" />
    </div>
  );
};

const Button = (props) => {
  const {
    obj, func, value, className, id,
  } = props;
  return (
    <button
      type="button"
      onClick={(e) => func(calculate(obj, e.target.value))}
      value={value}
      className={className}
      id={id}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  obj: null,
  func: null,
  value: null,
  className: null,
  id: null,
};

Button.propTypes = {
  obj: PropTypes.objectOf,
  func: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
export default Calculator;
