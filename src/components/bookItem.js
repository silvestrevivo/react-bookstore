import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'
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
    return (
      <Transition in={this.state.visible} timeout={duration} mounOnEnter unmountOnExit>
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <Card>
              {imageLinks ? <img src={imageLinks.thumbnail} alt="smallThumbnail" /> : null}
              {title ? <h2>{title}</h2> : null}
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

// const BookItem = ({ book }) => {
//   console.log(book.id.length)
//   const duration = 1000
//   const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0
//   }
//   const transitionStyles = {
//     entering: { opacity: 0 },
//     entered: { opacity: 1 }
//   }

//   const {
//     title,
//     description,
//     language,
//     pageCount,
//     previewLink,
//     imageLinks } = book.volumeInfo
//   return (
//     <Transition in={book.id.length === 0} timeout={duration}>
//       {(state) => (
//         <div style={{
//           ...defaultStyle,
//           ...transitionStyles[state]
//         }}>
//           <Card>
//             {imageLinks ? <img src={imageLinks.thumbnail} alt="smallThumbnail" /> : null}
//             {title ? <h2>{title}</h2> : null}
//             {description ? <p>{description}</p> : null}
//             {pageCount ? <p>Pages: {pageCount}</p> : null}
//             {previewLink ? <a href={previewLink}>Link to Google</a> : null}
//             {language ? <p>{language}</p> : null} />
//           </Card>
//         </div>
//       )}
//     </Transition>
//     // <Card>
//     //   {imageLinks ? <img src={imageLinks.thumbnail} alt="smallThumbnail" /> : null}
//     //   {title ? <h2>{title}</h2> : null}
//     //   {description ? <p>{description}</p> : null}
//     //   {pageCount ? <p>Pages: {pageCount}</p> : null}
//     //   {previewLink ? <a href={previewLink}>Link to Google</a> : null}
//     //   {language ? <p>{language}</p> : null} />
//     // </Card>
//   )
// }

// BookItem.propTypes = {
//   book: PropTypes.object
// }

// export default BookItem
