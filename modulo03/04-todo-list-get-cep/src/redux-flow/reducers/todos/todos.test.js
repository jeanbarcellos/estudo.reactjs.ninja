'use strict'

import { expect } from 'chai'

import todos from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'
import deepFreeze from 'deep-freeze'

it('should add a todo item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'Hey' }
  })
  const after = [{ id: 0, text: 'Hey', completed: false }]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false }
  ])

  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 1, text: 'Ho' }
  })

  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 0 }
  })

  const after = [
    { id: 0, text: 'Hey', completed: true },
    { id: 1, text: 'Ho', completed: false }
  ]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 1 }
  })

  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: true }
  ]

  expect(todos(before, action)).to.be.deep.equal(after)
})
