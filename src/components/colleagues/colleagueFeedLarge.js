import React from "react"
// import Api from "./components/api.js"

class ColleagueFeedLarge extends React.Component {

  render() {
    return (
      <div className="colleaguePhoto">
        <div> <img src={this.props.picture} alt="Comprend colleague" /> </div>
        <h4>{this.props.name}</h4>
        <h5>{this.props.title}</h5>
      </div>
    )
  }

}

export default ColleagueFeedLarge
