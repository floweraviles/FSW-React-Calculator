import React from "react";
import './Input.css'




class Input extends React.Component {
  render() {
    const {input} = this.props 
      return (
        <div className="input">
           <p>
            {input || 0}
            </p> 
        </div>
      )

  }
}
export default Input;

