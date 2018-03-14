import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/sass/style.scss'

import Home from './containers/home'
import Book from './containers/book'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/book" component={Book} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'))
