'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './app'
import reducer from 'reducers'

// middleware - log
const logger = ({ dispatch, getState }) => next => action => {
  console.log('LOGGER::will dispatch:', action)
  const nextAction = next(action)
  console.log('LOGGER::next action:', nextAction)
  return nextAction
}

// middleware - thunk
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const store = createStore(reducer, applyMiddleware(logger, thunk))

// -------------------
store.dispatch(lazyAction())
function lazyAction() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'todos:ADD_TODO',
        payload: {
          text: 'Lazy Action',
          id: '123'
        }
      })
    }, 2000)
  }
}
// -------------------

const renderState = () => {
  console.log('state:', store.getState())
}

store.subscribe(renderState)
renderState()

/**
 * Rendenrizar o app
 *
 * @param {*} NextApp
 */
const renderApp = NextApp => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default

    renderApp(NextApp)
  })

  // M3#A62 - replaceReducer - hot reload para reducers
  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers').default
    store.replaceReducer(nextReducer)
  })
}

// entrada de edição dos arquivos
