import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'
import { connect } from 'react-redux'
import Aux from '../../hoc/aux'
import BookItem from '../../components/bookItem'
import Toggle from '../../components/toogle'
import Pagination, { RetroPage, AddPage } from '../../components/pagination'
import ErrorMessage from '../../components/errormessage'

class BooksDisplay extends Component {
  state = {
    grid: false,
    counter: 3
  }

  displayBooks = (n) => {
    return this.props.bookList.map(book => {
      return (
        <BookItem key={book.id} book={book} />
      )
    }).slice(n - 3, n)
  }

  retroPage = () => this.setState({ counter: this.state.counter - 3 })

  addPage = () => this.setState({ counter: this.state.counter + 3 })

  render () {
    // console.log('props length', this.props.bookList.length)
    // console.log('step', this.state.step)
    return (
      <div className="bookdisplay">
        {this.props.bookList.length > 0
          ? <Aux>
            <div className="bookdisplay__control">
              <Toggle onChange={() => this.setState({ grid: !this.state.grid })} />
              <Pagination>
                <RetroPage onClick={this.retroPage} disabled={this.state.counter === 3} />
                <AddPage onClick={this.addPage} disabled={this.state.counter === 12} />
              </Pagination>
            </div>
            <div className={Classnames('bookdisplay__books', this.state.grid ? 'bookdisplay__books--grid' : 'bookdisplay__books--accordion')}>
              {this.displayBooks(this.state.counter)}
            </div>
          </Aux> : null
        }
        {this.props.errorBook ? <ErrorMessage message={this.props.errorBook} /> : null}
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
