import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import ColleagueFeedLarge from "./colleagues/colleagueFeedLarge"
import Header from "./header/header"
import Footer from "./footer/footer"

const allColleagues = "http://hellotechnigo.comprendwebsites.net/api/users"

class ColleaguePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colleague: []
    }
  }

  componentDidMount() {
    fetch(allColleagues).then(response => response.json()).then(json => {
      this.setState({
        colleague: json
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="colleagueFeedContainer">
          <h2>Meet the people of Comprend</h2>
          <div className="colleagueFeedInnerLarge">
            {this.state.colleague.map((person) => {
              if (person.pictureUrl) {
                return <ColleagueFeedLarge
                  picture={person.pictureUrl}
                  name={person.name}
                  title={person.title}
                  />
              }
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default ColleaguePage
