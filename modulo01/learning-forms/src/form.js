'use strict'

import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false,
      selectValue: 3,
      textValue: 'text\narea'
    }
  }

  render() {
    return (
      <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('event', e)
      }}
      onChange={(e) => {
        console.log(e.target)
      }}
      >
        <input
          type='text'
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value })
          }}
        />

        <br></br><br></br>

        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={e => {
              this.setState({ checked: !this.state.checked })
            }}
          />
          Checkebox
        </label>

        <br></br><br></br>

        <input type='radio' name='rd' value='1' /> Radio 1
        <input type='radio' name='rd' value='2' defaultChecked /> Radio 2

        <br></br><br></br>

        <select
          value={this.selectValue}
          onChange={(e) => {
            this.setState({
              selectValue: e.target.value
            })
          }}
        >
          <option value={1}>Opção 1</option>
          <option value={2}>Opção 2</option>
          <option value={3}>Opção 3</option>
        </select>

        <br></br><br></br>

        <textarea
          value={this.textValue}
          onChange={(e) => {
            this.setState({
              textValue: e.target.value
            })
          }}
        />

        <br></br>

        <button type='button'>Enviar</button>

      </form>
    )
  }

  componentDidUpdate(){
    //console.log(this.state);
  }
}

export default App

// Controlled components
// https://pt-br.reactjs.org/docs/forms.html
//
// Componente statless
