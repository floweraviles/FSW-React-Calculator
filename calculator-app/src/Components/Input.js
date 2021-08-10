import React from "react";
import './Input.css'




class Input extends React.Component {
  render() {
    const {input} = this.props 
      return (
        <div className="input">
            {input}
        </div>
      )

  }
}
export default Input;

