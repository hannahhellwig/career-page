import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Header from "./header/header"
import ColleagueFeedSmall from "./colleagues/colleagueFeedSmall"
import JobOpeningBody from "./jobOpeningBody/jobOpeningBody"
import Footer from "./footer/footer"
import BackNagivationButton from "./buttons/backNagivationButton"

const allColleagues = "http://hellotechnigo.comprendwebsites.net/api/users"
const allJobOpenings = "http://hellotechnigo.comprendwebsites.net/api/jobs/"

class JobOpeningPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colleague: [],
      jobDetails: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(allColleagues).then(response => response.json()).then(json => {
      this.setState({
        colleague: json
      })
    })
    fetch(allJobOpenings + id).then(response => response.json()).then(json => {
      this.setState({
        jobDetails: json
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="pageContent">
          <Link to="/jobs"><BackNagivationButton /></Link>
          <div className="jobOpeningBodyContainer">
            <JobOpeningBody
              title={this.state.jobDetails.title}
              workday={this.state.jobDetails.workday}
              city={this.state.jobDetails.city}
              aboutComprend={this.state.jobDetails.match}
              aboutYou={this.state.jobDetails.aboutYou}
              intro={this.state.jobDetails.intro}
              quote={this.state.jobDetails.quote}
              id={this.state.jobDetails.id}
              link={this.state.jobDetails.link} />
          </div>
          <h2>Some of your colleagues</h2>
          <div className="colleagueFeedInner">
            {this.state.colleague.map((person, index) => {
              if (index < 3) {
                return <ColleagueFeedSmall
                  picture={person.pictureUrl}
                  name={person.name}/>
              }
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default JobOpeningPage
