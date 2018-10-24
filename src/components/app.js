import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import StartPage from "./startPage"
import JobListingPage from "./jobListingPage"
import JobOpeningPage from "./jobOpeningPage"
import ColleaguePage from "./colleaguePage"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "StartPage"
    }
  }

  goToStart = () => {
    this.setState({ page: "StartPage"})
  }

  goToJobs = () => {
    this.setState({ page: "JobListingPage"})
  }

  goToJobOpening = () => {
    this.setState({ page: "JobOpeningPage"})
  }

  goToColleaguesPage = () => {
    this.setState({ page: "ColleaguePage"})
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={StartPage} />
          <Route path="/join-us" exact="true" component={StartPage} />
          <Route path="/jobs" exact="true" component={JobListingPage} />
          <Route path="/jobs/:id" component={JobOpeningPage} />
          <Route path="/colleagues" exact="true" component={ColleaguePage} />
        </div>
      </Router>
    )
  }

}

export default App
