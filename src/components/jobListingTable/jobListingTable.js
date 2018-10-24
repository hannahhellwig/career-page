import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class JobListingTable extends React.Component {

  render() {
    return (
      <div className="jobList">
        <Link to={`/jobs/${this.props.id}`}><p className="jobHeadlineTitle">{this.props.title}</p></Link>
        <p className="jobHeadelineDepartment">{this.props.department}</p>
        <p className="jobHeadlineCity">{this.props.city}</p>
      </div>

    )
  }

}

export default JobListingTable
