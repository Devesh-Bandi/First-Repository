import { Component } from 'react';
import './index.css';

class FruitCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0
  };

  eatMango = () => {
    this.setState((prevState) => ({
      mangoes: prevState.mangoes + 1
    }));
  };

  eatBanana = () => {
    this.setState((prevState) => ({
      bananas: prevState.bananas + 1
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>
          Bob ate {this.state.mangoes} mangoes {this.state.bananas} bananas
        </h1>
        {/* New wrapper for fruit sections */}
        <div className="fruit-container">
          <div className="fruit-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="Mango"
            />
            <button onClick={this.eatMango}>Eat Mango</button>
          </div>
          <div className="fruit-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="Banana"
            />
            <button onClick={this.eatBanana}>Eat Banana</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FruitCounter;
