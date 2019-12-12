import React from 'react'

class Pet extends React.Component {
  render() {
    console.log("name",this.props.pet.name)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "female" ? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">{this.props.pet.isAdopted}</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
