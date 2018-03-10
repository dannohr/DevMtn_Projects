import React, { Component } from 'react';

export default class Sum extends Component {

    constructor() {
        super();

        this.state = {
        number1: 0,
        number2: 0,
        sum: null
        }
    }

    handleChange1(val) {
        this.setState({ number1: parseInt(val, 10) });
      }

    handleChange2(val) {
        this.setState({ number2: parseInt(val, 10) });
      }

    sumTheTwo (num1, num2) {
        let answer = num1 + num2
        
        this.setState({ sum: answer });
    }

    render() {
      return (
        <div className="puzzleBox filterObjectPB">
            <h4>Add Two Numbers</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value)} />
            <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value)} />
            <button className="confirmationButton" onClick={ () => { this.sumTheTwo(this.state.number1, this.state.number2) }}>Sum the Inputs</button>
            <span className="resultsBox filterObjectRB">The sum is: { this.state.sum }</span>
        </div>
      )
     }
  }