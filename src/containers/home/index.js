import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestBook } from '../../actions'
import BooksDisplay from './booksdisplay'
import Footer from '../../components/footer'
import Header from '../../components/header'

class Home extends Component {
  state = {
    value: ''
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.value.length > 0) {
      this.props.requestBook(this.state.value)
      this.setState({
        value: ''
      })
    }
  }

  render () {
    return (
      <div className="body-home">
        <div className="body-home__pattern">
          <div className="container">
            <Header
              value={this.state.value}
              onKeyPress={this.handleKeyPress}
              onChange={event => this.setState({ value: event.target.value })} />
            <BooksDisplay />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  requestBook: PropTypes.func
}

export default connect(null, { requestBook })(Home)
