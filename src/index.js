import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"

import Footer from "./components/footer/footer"
import Header from "./components/header/header"

import ApplyButton from "./components/buttons/applybutton"
import MoreColleaguesButton from "./components/buttons/moreColleaguesButton"
import JobsButton from "./components/buttons/jobsButton"

import ColleagueFeedSmall from "./components/colleagues/colleagueFeedSmall"
import ColleagueFeedLarge from "./components/colleagues/colleagueFeedLarge"

import JobListingPage from "./components/jobListingPage"
import JobOpeningPage from "./components/jobOpeningPage"
import StartPage from "./components/startPage"

// import Api from "./components/api"
import "./index.css"

ReactDOM.render(<App />, document.getElementById("root"))
