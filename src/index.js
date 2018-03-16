import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/sass/style.scss'

import Home from './containers/home'
import Book from './containers/book'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/book" component={Book} exact />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
