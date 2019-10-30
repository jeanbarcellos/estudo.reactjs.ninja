'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      text: 'Jean'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Outro texto, clicou'
      })}>
       {this.state.text}
      </div>
    )
  }
}

export default App
