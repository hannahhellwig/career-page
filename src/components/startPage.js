import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Instafeed from "react-instafeed"

import ColleagueFeedLarge from "./colleagues/colleagueFeedLarge"
import MoreColleaguesButton from "./buttons/moreColleaguesButton"
import JobsButton from "./buttons/jobsButton"
import Header from "./header/header"
import Footer from "./footer/footer"

const allColleagues = "http://hellotechnigo.comprendwebsites.net/api/users"

class StartPage extends React.Component {

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

// const randomColleagues = colleague[Math.floor(Math.random()*colleague.length)]


  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div>
        <Header />
        <div>
          <div className="heroContainer">
            <h1>If you’re curious, creative and passionate about digital communication –
            get in touch to explore our world.
            </h1>
          </div>
          <div className="startPageTextContainer">
            <div className="textSection">
              <h3>Together</h3>
              <p>We work together with our clients.
              We work together with our colleagues and partners at sister agencies,
              or other agencies for that matter.
              </p>
            </div>
            <div className="textSection">
              <h3>Committed</h3>
              <p>We are loyal to our clients and our team mates. We want them to succeed.
              We want Comprend to succeed.
              </p>
            </div>
            <div className="textSection">
              <h3>Creative</h3>
              <p>We look for the best solution for each situation whether it is visual,
              tech or anything else.
              </p>
            </div>
          </div>
          <div className="toAllJobsContainer">
            <h1>Join our team!</h1>
            <Link to="/jobs"><JobsButton /></Link>
          </div>
          <div className="colleagueFeedContainer">
            <h2>Meet some of your colleagues</h2>
            <div className="colleagueFeedInner">
              {this.state.colleague.map((person, index) => {
                if (index < 5) {
                  return <ColleagueFeedLarge
                    picture={person.pictureUrl} />
                }
              })}
            </div>
            <div className="buttonContainer">
              <Link to="/colleagues"> <MoreColleaguesButton /> </Link>
            </div>
          </div>
          <div className="instagramContainer">
            <h2>#comprendlife</h2>
            <div id={instafeedTarget} className="instaFeedContainer">
              <Instafeed
                limit=''
                ref='instafeed'
                caption='0'
                maxWidth='150'
                resolution='low_resolution'
                sortBy='most-recent'
                target={instafeedTarget}
                template=''
                userId='8926749738'
                clientId='client_id=assignment.technigo.comprend'
                accessToken='8926749738.1677ed0.b38c4d7f4215405c836a7b11d6c54d01'
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default StartPage
