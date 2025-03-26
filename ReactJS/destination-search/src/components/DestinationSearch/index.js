import { Component } from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchBoxInput: ''
  }

  onChangeSearchInput = event => {
    this.setState({ searchBoxInput: event.target.value })
  }

  render() {
    const { searchBoxInput } = this.state
    const { destinationsList } = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchBoxInput.toLowerCase())
    )

    return (
      <div className='container'>
        <div className='search-container'>
          <h1 className='heading'>Destination Search</h1>
          <div className='input-container'>
            <input
              className='search-input'
              type='search'
              placeholder='search'
              value={searchBoxInput}  // Use the state variable here
              onChange={this.onChangeSearchInput}  // Use onChange event
            />
            <img
              src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png'
              alt='search-icon'
            />
          </div>
          <ul className='destination-list'>
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch