import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="logoContainer">
          <Link to="/join-us">
            <img src="../images/logo.png" alt="Comprend logo" />
          </Link>
        </div>
        <nav className="headerLinks">
          <a href="#">Our Services</a>
          <a href="#">Blog</a>
          <a href="#">Webranking</a>
          <Link to="/join-us">
            <a href="#">Join us</a>
          </Link>
          <a href="#">Contact</a>
        </nav>
      </header>
    )
  }
}

export default Header
