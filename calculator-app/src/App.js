import { Component } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Input from "./Components/Input";


class App extends Component {
  constructor() {
    super();
    this.state = { 
      input: "0", 
      operator: "", 
      previousNumber: ""};
  }


 

  handleInput = (e) => {
    if (this.state.input === "0"){
      this.setState({ input: e.target.value});

    }else {
      let num = this.state.input
      num += e.target.value
      this.setState({input: num})
    }
  };

   handleZero = (value) => {
     if (this.state.input !== "") {
       this.setState({ input: this.state.input + value})
     }
   }

  

   handleOp = (e) => {
     this.setState({
       operator: e.target.value, previousNumber: this.state.input })
   }


   handleEqual = () => { 
     let sum = 0

     const {operator, input, previousNumber} = this.state
    if (operator === "/"){
      sum = parseFloat(previousNumber) / parseFloat(input)
      this.setState({input: sum.toFixed(2)})
    } else if (operator === "*") {
      sum = parseFloat(previousNumber) * parseFloat(input)
      this.setState({input: sum})
    } else if (operator === "-"){
      sum = parseFloat(previousNumber) - parseFloat(input)
      this.setState({input: sum})
    } else if (operator === "+"){
      sum = parseFloat(previousNumber) + parseFloat(input)
      this.setState({input: sum})
    }
   }

   handleClear = () => {
     this.setState({input: "0", operator:"", previousNumber:""})
   }
   
   handleNegative = () => {
     const {input} = this.state
     if(input) {
       let num = (input) * (-1)
       this.setState({input: num})
     }
   }


  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <Input input={Number(this.state.input).toLocaleString("en-US")} />
          
          <Buttons handleInput={this.handleInput} handleZero={this.handleZero} handleEqual={this.handleEqual} handleOp={this.handleOp} handleClear={this.handleClear} handleNegative={this.handleNegative}/>
          
        </div>
      </div>
    );
  }
}

export default App;

