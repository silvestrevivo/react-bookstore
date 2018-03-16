import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchBook } from '../actions'
import BooksDisplay from '../components/booksdisplay'
import Footer from '../components/footer'
import logo from '../../assets/img/GooglePlayLogo.png'

class Home extends Component {
  state = {
    value: ''
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.value.length > 0) {
      this.props.searchBook(this.state.value)
    }
  }

  render () {
    return (
      <div className="body-home">
        <div className="body-home__pattern">
          <div className="container">
            <header className="header">
              <h1>Bookstore</h1>
              <p className="subheader">powered by</p>
              <img src={logo} alt="logo" className="header__logo" />
              <input
                type="text"
                placeholder="Search book title.."
                onChange={event => this.setState({ value: event.target.value })}
                onKeyPress={this.handleKeyPress} />
            </header>
            <BooksDisplay bookList={this.props.bookList} />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  searchBook: PropTypes.func,
  bookList: PropTypes.array
}

export default connect(null, { searchBook })(Home)
