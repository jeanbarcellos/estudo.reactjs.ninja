'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    <span>{children}</span>
  </button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}

export default Button

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
