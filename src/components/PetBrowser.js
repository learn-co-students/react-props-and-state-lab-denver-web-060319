import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  mapPets = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    console.log(this.props)
    return <div className="ui cards">{this.mapPets()}</div>
  }
}

export default PetBrowser
