import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { Title, SubTitle } from '../components/card'
import Transition from 'react-transition-group/Transition'

class BookItem extends Component {
  state = { visible: false }

  static propTypes = {
    book: PropTypes.object
  }

  componentDidMount () {
    this.setState({ visible: true })
  }

  render () {
    const {
      title,
      subtitle,
      publisher,
      description,
      language,
      pageCount,
      previewLink,
      imageLinks } = this.props.book.volumeInfo
    const duration = 300
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    }
    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    }

    console.log(this.props.book)
    return (
      <Transition in={this.state.visible} timeout={duration} mounOnEnter unmountOnExit>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }} className="book-item">
            <Card>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              {imageLinks ? <img src={imageLinks.thumbnail} alt="smallThumbnail" /> : null}
              {subtitle ? <h3>{subtitle}</h3> : null}
              {publisher ? <h4>{publisher}</h4> : null}
              {description ? <p>{description}</p> : null}
              {pageCount ? <p>Pages: {pageCount}</p> : null}
              {previewLink ? <a href={previewLink}>Link to Google</a> : null}
              {language ? <p>{language}</p> : null} />
            </Card>
          </div>
        )}
      </Transition>
    )
  }
}

export default BookItem
