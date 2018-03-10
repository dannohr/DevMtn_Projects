import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();
    
        this.state = {
          unFilteredArray:  [
                              { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
                              { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
                              { "name": "Carly Armstrong", "title": "CEO" } 
                            ],
          userInput: '',
          filteredArray: []
        }
      }

    handleChange(val) {
        this.setState({ userInput: val });
      }

      filterArray(userInput) {
        var unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];
        
        for ( var i = 0; i < unFilteredArray.length; i++ ) {
          if ( unFilteredArray[i].hasOwnProperty(userInput) ) {
            filteredArray.push(unFilteredArray[i]);
          }
        }
    
        
        this.setState({ filteredArray: filteredArray });
      }


    render() {
      return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object for Object Key</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={ () => { this.filterArray(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>


      )
     }
  }