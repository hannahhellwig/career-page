import React from "react"
import ApplyButton from "../buttons/applybutton"
import ShareButton from "../buttons/sharebutton"

class JobOpeningBody extends React.Component {

  render() {
    return (
      <div className="jobOpeningBody">
        <h1>{this.props.title}</h1>
        <p><strong>{this.props.city}</strong></p>
        <p>{this.props.intro}</p>
        <img className="jobOpeningImage" src="../images/jobs.png" alt="JobImage" />
        <div className="buttonContainer">
          <a href={this.props.link} target="_blank"><ApplyButton /></a>
          <ShareButton />
        </div>
        <h3>Your Workday</h3>
        <p>{this.props.workday}</p>
        <p>{this.props.quote}</p>
        <h3>Who are you</h3>
        <p>{this.props.aboutYou}</p>
        <h3>Is Comprend the company for you</h3>
        <p>{this.props.aboutComprend}</p>

      </div>
    )
  }

}

export default JobOpeningBody
