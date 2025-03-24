import { Component } from "react"
import "./index.css"

class ShowHideName extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false
  }

  toggleFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  render() {
    const { isFirstNameVisible, isLastNameVisible } = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="first-name-container">
          <button className="button" type="button" onClick={this.toggleFirstName}>
            Show/Hide Firstname
          </button>
          {isFirstNameVisible && (
            <div className="first-name">
              <p>Joe</p>
            </div>
          )}
        </div>
        <div className="last-name-container">
          <button className="button" type="button" onClick={this.toggleLastName}>
            Show/Hide Lastname
          </button>
          {isLastNameVisible && (
            <div className="last-name">
              <p>Jonas</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShowHideName