import React from 'react'
import PropTypes from 'prop-types'

const SingleBookDisplay = ({ singleBook }) => {
  const {
    title,
    subtitle,
    publisher,
    description,
    language,
    pageCount,
    previewLink,
    imageLinks } = singleBook.volumeInfo

  return (
    <div className="single-book-display">
      <div className="single-book-display__left">
        {imageLinks
          ? <img src={imageLinks.thumbnail} alt="thumbnail" className="single-book-display__image" />
          : <i className="fa fa-book" />}
      </div>
      <div className="single-book-display__right">
        <h2 className="single-book-display__title">{title}</h2>
        <h3 className="single-book-display__subtitle">{subtitle}</h3>
        <div className="single-book-display__rightsub">
          <div className="single-book-display__rightsub--left">
            {description ? <p className="single-book-display__description">{description}</p> : null}
          </div>
          <div className="single-book-display__rightsub--right">
            <h1>{publisher}</h1>
            <h1>{language}</h1>
            <h1>{pageCount}</h1>
            <h1><a href={previewLink}>Go to google</a></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

SingleBookDisplay.propTypes = {
  singleBook: PropTypes.obj
}

export default SingleBookDisplay
