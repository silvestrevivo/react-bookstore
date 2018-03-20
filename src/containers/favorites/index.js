import React, { Component } from 'react'
import HeaderSubPage from '../../components/headersubpage'

class Favorites extends Component {
  state = {}
  render () {
    return (
      <div className="body-book">
        <div className="body-book__pattern">
          <div className="container">
            <HeaderSubPage>Favorites</HeaderSubPage>
            <div>
              Favorites
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Favorites
