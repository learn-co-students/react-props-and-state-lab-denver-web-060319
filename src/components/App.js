import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'  
      }
    }
  }

  componentDidMount(){
    fetch('/api/pets')
    .then(resp => resp.json())
    .then(pets => {
      this.setState({pets})
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      '/api/pets'
    }
    else {
      `/api/pets?type=${this.state.filters.type}`
    }
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters pets = {this.state.pets.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser key={this.state.pets.id} pets = {this.state.pets}/>
                </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default App
