import { Component } from 'react'
import './index.css'
class RandomNumGen extends Component {
  state = {
    randomNumber: 0
  }
  onClickGenRandomNum = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    this.setState({ randomNumber: newNumber })
  }
  render() {
    const { randomNumber } = this.state
    return (
      <div className='container'>
        <div className='generator-card'>
          <h1 className='heading'>Random Number</h1>
          <p className='instruction'>Generate a random number in the range of 0 to 100</p>
          <button className='button' type='button' onClick={this.onClickGenRandomNum}>Generate</button>
          <p className='randomized-number'>{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumGen