import React, { Component } from 'react'
import BooksDisplay from '../components/booksdisplay'
import Footer from '../components/footer'
import logo from '../../assets/img/GooglePlayLogo.png'

class Home extends Component {
  // state = {}
  render () {
    return (
      <div className="body-home">
        <div className="body-home__pattern">
          <div className="container">
            <header className="header">
              <h1>Bookstore</h1>
              <p className="subheader">powered by</p>
              <img src={logo} alt="logo" className="header__logo" />
              <input type="text" placeholder="Search book title.." />
            </header>
            <BooksDisplay />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
