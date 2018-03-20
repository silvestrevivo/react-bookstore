import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestBook } from '../../actions'
import BooksDisplay from './booksdisplay'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Spinner from '../../components/spinner'

class Home extends Component {
  state = {
    value: '',
    loading: false
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.value.length > 0) {
      this.props.requestBook(this.state.value)
      this.setState({
        value: '',
        loading: true
      })
    }
  }

  spinnerHelper = () => {
    this.setState({ loading: false })
  }

  componentDidUpdate (nextProps, nextState) {
    if ((this.props.bookList !== nextProps.bookList) && this.props.bookList.length > 0) {
      this.spinnerHelper()
    }
  }

  render () {
    // console.log('props books', this.props.bookList)
    return (
      <div className="body-home">
        <div className="body-home__pattern">
          <div className="container">
            <Header
              value={this.state.value}
              onKeyPress={this.handleKeyPress}
              onChange={event => this.setState({ value: event.target.value })} />
            {this.state.loading && this.props.errorBook === null ? <Spinner /> : <BooksDisplay />}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  requestBook: PropTypes.func,
  bookList: PropTypes.array,
  errorBook: PropTypes.string
}

function mapStateToProps (state) {
  return {
    bookList: state.bookList,
    errorBook: state.errorBook
  }
}

export default connect(mapStateToProps, { requestBook })(Home)
