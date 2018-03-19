import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/sass/style.scss'

import Home from './containers/home'
import Book from './containers/book'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'
import logger from 'redux-logger'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
  // logger pluging to follow redux on the console
)

// then run the saga
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/book" component={Book} exact />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
