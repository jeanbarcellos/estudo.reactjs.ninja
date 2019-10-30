'use strict'

import React from 'react'

const Button = ({ children, handleclick }) => (
  <button className='main-button' onClick={handleclick}>
    <span>{children}</span>
  </button>
)

export default Button
