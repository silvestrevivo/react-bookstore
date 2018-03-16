import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BookItem from '../components/bookItem'

class BooksDisplay extends Component {
  state = { grid: true }

  displayBooks = () => {
    return this.props.bookList.map(book => {
      return (
        <BookItem key={book.id} book={book} />
      )
    })
  }

  render () {
    console.log('props', this.props)
    return (
      <div className="bookdisplay">
        {this.displayBooks()}
      </div>
    )
  }
}

BooksDisplay.propTypes = {
  bookList: PropTypes.array
}

function mapStateToProps (state) {
  return {
    bookList: state
  }
}

export default connect(mapStateToProps, null)(BooksDisplay)
