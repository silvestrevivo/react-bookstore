import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderSubPage from '../../components/headersubpage'
import { connect } from 'react-redux'
import { removeFavorites } from '../../actions'

class Favorites extends Component {
  state = {}

  static propTypes = {
    favorites: PropTypes.array,
    removeFavorites: PropTypes.func
  }

  removeFavorites = (id) => {
    console.log('item id', id)
    this.props.removeFavorites(id)
  }

  render () {
    console.log('props in favorites', this.props)
    return (
      <div className="body-book">
        <div className="body-book__pattern">
          <div className="container">
            <HeaderSubPage>Favorites</HeaderSubPage>
            <div>
              {
                this.props.favorites.map(item => {
                  return (
                    <div key={item.id}>
                      <h1 onClick={() => this.removeFavorites(item.id)}>{item.volumeInfo.title}</h1>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, { removeFavorites })(Favorites)
