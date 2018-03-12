import React, { Component } from 'react'
import Search from './search'
import Gallery from './gallery'
import axios from 'axios'

class App extends Component {
  state = {
    items: []
  }
  render () {
    console.log('esto es state', this.state.items)
    return (
      <div className="container">
        <h1 className="text-center">BookStore</h1>
        <Search search={this.search} />
        <Gallery fetchdata={this.state.items} />
      </div>
    )
  }

  search = (term) => {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
    axios.get(`${BASE_URL}${term}`)
      .then(response => {
        this.setState({
          items: response.data.items
        })
      })
  }
}

export default App
