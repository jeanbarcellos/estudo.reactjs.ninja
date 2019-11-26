'use strict'

import { combineReducers } from 'redux'
import address from './address'
import todos from './todos'
import visibilityFilter from './visibility-filter'

export default combineReducers({
  address,
  todos,
  visibilityFilter
})

// const rootReducer = (state = {}, action) => {
//   return {
//     todos: reducerTodos(state.todos, action),
//     visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
//   }
// }

//
// const combineReducers = reducers => (state = {}, action) => {
//   return Object.keys(reducers).reduce((nextState, key) => {
//     return {
//       ...nextState,
//       [key]: reducers[key](state[key], action)
//     }
//   }, {})
// }

// const combineReducers = (reducers) => (state = {}, action) => {
//   return Object.keys(reducers).reduce((nextState, key) => {
//     return {
//       ...nextState,
//       [key]: reducers[key](state[key], action)
//     }
//   }, {})
// }
