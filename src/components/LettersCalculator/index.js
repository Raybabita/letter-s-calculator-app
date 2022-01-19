// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputLetter: ''}

  onInputLetters = event => {
    this.setState({inputLetter: event.target.value})
  }

  render() {
    const {inputLetter} = this.state
    const letterCount = inputLetter.length
    return (
      <div className="app-container">
        <div className="letter-count-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputText" className="description">
            Enter the phrase
          </label>
          <input
            id="inputText"
            className="input-letters"
            value={inputLetter}
            placeholder="Enter the phrase"
            type="input"
            onChange={this.onInputLetters}
          />
          <br />
          <p className="letter-count">No.of letters: {letterCount}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
