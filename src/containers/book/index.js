import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HeaderSubPage from '../../components/headersubpage'
import Footer from '../../components/footer'
import SingleBookDisplay from './singlebookdisplay'

class Book extends Component {
  // state = {  }

  static propTypes = {
    singleBook: PropTypes.object
  }

  render () {
    console.log('single book props', this.props)
    return (
      <div className="body-book">
        <div className="body-book__pattern">
          <div className="container">
            <HeaderSubPage link="favorites">Single Book</HeaderSubPage>
            <SingleBookDisplay singleBook={this.props.singleBook} />
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
