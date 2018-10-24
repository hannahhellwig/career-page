import React from "react"

class Footer extends React.Component {

  render() {

    return (
      <footer>
        <div className="logoContainer">
          <img src="../images/logo.png" alt="Comprend logo" />
        </div>
        <nav className="footerLinks">
          <a href="#">© 2014-2018 Comprend</a>
          <a href="#">Privacy notice</a>
          <a href="#">Cookie policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Subscribe to our newsletter</a>
        </nav>
        <p>Comprend is part of H&H Group</p>
      </footer>
    )
  }

}

export default Footer
