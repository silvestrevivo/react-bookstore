import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class BooksDisplay extends Component {
  // state = {  }
  render () {
    console.log('props', this.props)
    return (
      <div>
        <ul>
          {
            this.props.bookList.map((item, index) => {
              return (
                <h2 key={index}>{item.volumeInfo.title}</h2>
              )
            })
          }
        </ul>
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
