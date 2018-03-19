import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'
import { connect } from 'react-redux'
import Aux from '../../hoc/aux'
import BookItem from '../../components/bookItem'
import Toggle from '../../components/toogle'
import Pagination from '../../components/pagination'

class BooksDisplay extends Component {
  state = { grid: false }

  displayBooks = () => {
    return this.props.bookList.map(book => {
      return (
        <BookItem key={book.id} book={book} />
      )
    })
  }

  render () {
    // console.log('props', this.props)
    // console.log('state', this.state.grid)
    return (
      <div className="bookdisplay">
        {this.props.bookList.length > 0
          ? <Aux>
            <div className="bookdisplay__control">
              <Toggle onChange={() => this.setState({ grid: !this.state.grid })} />
              <Pagination />
            </div>
            <div className={Classnames('bookdisplay__books', this.state.grid ? 'bookdisplay__books--grid' : 'bookdisplay__books--accordion')}>
              {this.displayBooks()}
            </div>
          </Aux> : null
        }
        <h1>{this.props.errorBook}</h1>
      </div>
    )
  }
}

BooksDisplay.propTypes = {
  bookList: PropTypes.array,
  errorBook: PropTypes.string
}

function mapStateToProps (state) {
  return {
    bookList: state.bookList,
    errorBook: state.errorBook
  }
}

export default connect(mapStateToProps, null)(BooksDisplay)
