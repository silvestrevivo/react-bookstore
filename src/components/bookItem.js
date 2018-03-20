import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { Title, SubTitle, Publisher, Description } from '../components/card'
import Transition from 'react-transition-group/Transition'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { singleBook } from '../actions'

class BookItem extends Component {
  state = {
    visible: false,
    selected: false
  }

  static propTypes = {
    book: PropTypes.object,
    singleBook: PropTypes.func
  }

  componentDidMount () {
    this.setState({ visible: true })
    // change of state for animation
  }

  addToFavorites = (id) => {
    console.log(id)
    this.setState({ selected: !this.state.selected })
  }

  toIndividualBook = (id) => {
    this.props.singleBook(this.props.book)
  }

  render () {
    // props variables of component
    const { id } = this.props.book
    const {
      title,
      subtitle,
      publisher,
      description,
      language,
      pageCount,
      previewLink,
      imageLinks } = this.props.book.volumeInfo
    // variables and parameter for animation
    const duration = 300
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    }
    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    }
    console.log('props in bookitem', this.props)
    return (
      <Transition in={this.state.visible} timeout={duration} mounOnEnter unmountOnExit>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }} className="book-item">
            <Card>
              <div className="card__cover">
                {imageLinks
                  ? <img src={imageLinks.smallThumbnail} alt="smallThumbnail" />
                  : <i className="fa fa-book" />}
              </div>
              <div className="card__information">
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                {publisher ? <Publisher>{publisher}</Publisher> : null}
                {description ? <Description description={description} /> : null}
                {pageCount ? <p>Pages: {pageCount}</p> : null}
                {previewLink ? <a href={previewLink}>Link to Google</a> : null}
                {language ? <p>{language}</p> : null} />
                <Link to={`/book/${id}`} onClick={() => this.toIndividualBook(id)}>
                  <h2 className="card__subtitle">See the details of this book</h2>
                </Link>
              </div>
              <div className="card__favorite" onClick={() => this.addToFavorites(id)}>
                {this.state.selected ? <span>&#9733;</span> : <span>&#9734;</span>}
              </div>
            </Card>
          </div>
        )}
      </Transition>
    )
  }
}

export default connect(null, { singleBook })(BookItem)
