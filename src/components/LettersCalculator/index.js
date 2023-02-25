// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  countLength = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="content-tab">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="inputField">Enter the phrase</label>
          <input
            id="inputField"
            type="input"
            onChange={this.countLength}
            placeholder="Enter the phrase"
          />
          <p>No.of letters: {count}</p>
        </div>
        <div className="image-tab">
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
