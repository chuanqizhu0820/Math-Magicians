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
    this.storeObj = this.storeObj.bind(this);
  }
/* eslint-disable*/
  storeObj(e) {
    let newObj = calculate(this.state.obj, e.target.value);
    this.setState({
      obj: newObj,
    });
  }

  render() {
    return (
      <div id="keyboard">
        <input type="text" id="display" placeholder="0" value={this.state.obj.next ? this.state.obj.next : this.state.obj.total ? this.state.obj.total : 0}/>
        <br />
        <Button value="AC" storeFunc={this.storeObj}/>
        <Button value="+/-" storeFunc={this.storeObj}/>
        <Button value="%" storeFunc={this.storeObj}/>   
        <Button value="/" storeFunc={this.storeObj} className="operators" />  
        <Button value="7" storeFunc={this.storeObj}/>    
        <Button value="8" storeFunc={this.storeObj}/> 
        <Button value="9" storeFunc={this.storeObj}/>
        <Button value="*" storeFunc={this.storeObj} className="operators"/>  
        <Button value="4" storeFunc={this.storeObj}/> 
        <Button value="5" storeFunc={this.storeObj}/> 
        <Button value="6" storeFunc={this.storeObj}/> 
        <Button value="-" storeFunc={this.storeObj} className="operators"/> 
        <Button value="1" storeFunc={this.storeObj}/>        
        <Button value="2" storeFunc={this.storeObj}/> 
        <Button value="3" storeFunc={this.storeObj}/> 
        <Button value="+" storeFunc={this.storeObj} className="operators"/> 
        <Button value="0" storeFunc={this.storeObj} id="zero"/> 
        <Button value="." storeFunc={this.storeObj}/>
        <Button value="=" storeFunc={this.storeObj} className="operators"/>  
      </div>
    );
  }
}

function Button(props){
  return <button type="button" onClick={props.storeFunc} value={props.value} className={props.className} id={props.id}>{props.value}</button>
}
/* eslint-enable */
export default Calculator;
