import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
        userInput: '',
        palindrome: ''
        }
    }


    handleChange(val) {
        this.setState({ userInput: val });
      }


    checkPalindrome(userInput) {
        let original = userInput
        let reversed = userInput.split('').reverse().join('')

        let answer = 'Nope'

        if (original === reversed) {
            answer = 'It is'
        }
    
        this.setState({ palindrome: answer });
    }


    render() {
      return (
        <div className="puzzleBox filterObjectPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} />
            <button className="confirmationButton" onClick={ () => { this.checkPalindrome(this.state.userInput) }}>Check if Palindrome</button>
            <span className="resultsBox filterObjectRB">Is this a palindrome? { this.state.palindrome }</span>
        </div>
      )
     }
  }