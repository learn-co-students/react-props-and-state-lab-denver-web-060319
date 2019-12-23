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

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  apiURL = () => {
    return this.state.filters.type === 'all' ?
      '/api/pets'
     :`/api/pets?type=${this.state.filters.type}`
  }

  onFindPetsClick = () => {
    fetch(this.apiURL())
      .then(response => response.json())
      .then(response => this.setState({
        pets: response
      }))
  }

  onAdoptPet = (id) => {
    this.state.pets.find(pet => pet.id === id).isAdopted = true
    console.log(this.state.pets.find(pet => pet.id === id))
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
