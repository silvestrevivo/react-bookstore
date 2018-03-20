import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HeaderSubPage from '../../components/headersubpage'
import Footer from '../../components/footer'

class Book extends Component {
  // state = {  }

  static propTypes = {
    singleBook: PropTypes.object
  }

  render () {
    console.log('single book props', this.props)
    const {
      title,
      subtitle,
      publisher,
      description,
      language,
      pageCount,
      previewLink,
      imageLinks } = this.props.singleBook.volumeInfo
    return (
      <div className="body-book">
        <div className="body-book__pattern">
          <div className="container">
            <HeaderSubPage link="favorites">Single Book</HeaderSubPage>
            <div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <h2>{publisher}</h2>
              <p>{description}</p>
              <h2>{language}</h2>
              <h2>{pageCount}</h2>
              {imageLinks
                ? <img src={imageLinks.smallThumbnail} alt="smallThumbnail" />
                : <i className="fa fa-book" />}
              {previewLink ? <a href={previewLink}>Link to Google</a> : null}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    singleBook: state.singleBook
  }
}

export default connect(mapStateToProps, null)(Book)
