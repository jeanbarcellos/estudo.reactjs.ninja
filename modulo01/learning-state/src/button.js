'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    <span>{children}</span>
  </button>
)

export default Button
