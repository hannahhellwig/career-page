import React from "react"

class ColleagueFeedSmall extends React.Component {

  render() {
    return (
      <div className="colleaguePhoto">
        <div> <img src={this.props.picture} alt="Comprend colleague" /> </div>
        <h5>{this.props.name}</h5>
      </div>
    )
  }

}

export default ColleagueFeedSmall
