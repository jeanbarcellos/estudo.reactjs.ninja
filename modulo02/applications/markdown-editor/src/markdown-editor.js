'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, handleSave, getMarkup }) => (
  <section className='editor'>
    <header className='editor-header'>
      <button onClick={handleSave} className='save'>Salvar</button>
    </header>

    <textarea value={value} onChange={handleChange} autoFocus />

    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
