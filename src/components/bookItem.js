import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'

const BookItem = ({ book }) => {
  console.log(book)
  const {
    title,
    description,
    language,
    pageCount,
    previewLink,
    imageLinks } = book.volumeInfo
  return (
    <Card>
      {imageLinks ? <img src={imageLinks.thumbnail} alt="smallThumbnail" /> : null}
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
      {pageCount ? <p>Pages: {pageCount}</p> : null}
      {previewLink ? <a href={previewLink}>Link to Google</a> : null}
      {language ? <p>{language}</p> : null} />
    </Card>
  )
}

BookItem.propTypes = {
  book: PropTypes.object
}

export default BookItem
