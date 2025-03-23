// Write your code here
import { Component } from "react"

import "./index.css"

class Speedometer extends Component {
  state = { speed: 0 } // Initial speed is 0mph

  accelerate = () => {
    this.setState((prevState) => ({
      speed: prevState.speed < 200 ? prevState.speed + 10 : 200
    }))
  }

  applyBrake = () => {
    this.setState((prevState) => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : 0
    }))
  }

  render() {
    const { speed } = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img className="image" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" />
        <h2 className="speed-display">Speed is {speed} mph</h2>
        <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
        <button className="button" onClick={this.accelerate}>Accelerate</button>
        <button className="button" onClick={this.applyBrake}>Apply Brake</button>
      </div>
    )
  }
}

export default Speedometer
