'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { Provider } from 'react-redux'

import App from './app'
import configureStore from './redux-flow/configure-store'

const store = configureStore()

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
