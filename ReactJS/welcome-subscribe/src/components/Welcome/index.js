import { Component } from "react"
import "./index.css"

class Welcome extends Component {
  state = { subscribeStatus: false }

  toggleSubscribe = () => {
    this.setState(prevState => ({
      subscribeStatus: !prevState.subscribeStatus
    }))
  }

  renderAuthButton = () => {
    const { subscribeStatus } = this.state
    return (
      <button
        className="button"
        onClick={this.toggleSubscribe}
      >
        {subscribeStatus ? "Subscribed" : "Subscribe"}
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="indication">Thank you! happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome