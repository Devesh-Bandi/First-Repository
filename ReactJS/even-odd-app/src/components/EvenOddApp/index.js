// Write your code here
import { Component } from 'react'

import './index.css'

class CounterApp extends Component {
  state = {
    count: 0,
  }

  onClickIncrement = () => {
    const randomIncrement = Math.floor(Math.random() * 101); // Generates random number between 0 and 100
    this.setState(prevState => ({ count: prevState.count + randomIncrement }));
  }

  render() {
    const { count } = this.state
    const isEven = count % 2 === 0
    const countStatus = isEven ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-status">Count is {countStatus}</p>
          <button
            type="button"
            onClick={this.onClickIncrement}
            className="button"
          >
            Increment
          </button>
          <small className="note">*Increases By Random Number Between 0 to 100</small>
        </div>
      </div>
    )
  }
}

export default CounterApp