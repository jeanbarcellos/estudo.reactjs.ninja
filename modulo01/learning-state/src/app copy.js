'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './Timer'

class App extends Component {
  constructor() {
    console.log('constructor()')

    super()
    this.state = {
      color: 'green'
    }
  }

  render() {
    console.log('render()')

    return (
      <div>
        <Square color={this.state.color} />

        {['red', 'green', 'blue'].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }

  /**
   * Antes do componente renderizado, este método será executado
   */
  componentWillMount() {
    console.log('componentWillMount()')
  }

  /**
   * Logo após o componente ser renderizado
   * Manipular DOM depois de renrezidao
   */
  componentDidMount() {
    console.log('componentDidMount()')
  }
}

export default App
