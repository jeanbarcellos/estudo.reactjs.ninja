'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './app'
import reducer from 'reducers'

const store = createStore(reducer)

store.subscribe(() => {
  console.log('state:', store.getState())
})

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
}

// entrada de edição dos arquivos
