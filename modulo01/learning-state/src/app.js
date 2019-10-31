'use strict'

import React, { Component } from 'react'
import Timer from './Timer'

class App extends Component {
  constructor() {
    console.log('constructor() App')

    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  render() {
    console.log('render() App')

    return (
      <div>
        {this.state.showTimer && <Timer time={this.state.time} />}

        <button
          onClick={() => {
            this.setState({ time: this.state.time + 10 })
          }}
        >
          Change props
        </button>

        <button
          onClick={() => {
            this.setState({ showTimer: !this.state.showTimer })
          }}
        >
          Show / hide timer
        </button>
      </div>
    )
  }

  /**
   * Antes do componente renderizado, este método será executado
   */
  componentWillMount() {
    console.log('componentWillMount() App')
  }
}

export default App

// {this.state.showTimer && <Timer time={this.state.time} />}
