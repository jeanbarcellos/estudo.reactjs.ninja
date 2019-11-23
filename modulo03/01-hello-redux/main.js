'use strict'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }

  return state
}

const { createStore } = Redux
const store = createStore(counter) // fonte de verdade

// Criar as variáveis
const $counter = document.querySelector('[data-js="counter"]')
const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')

// Aducionando eventos para os botões
$decrement.addEventListener('click', decrement, false)
$increment.addEventListener('click', increment, false)

// Criar as funções
function decrement() {
  store.dispatch({ type: 'DECREMENT' })
}

function increment() {
  store.dispatch({ type: 'INCREMENT' })
}

// manipular valor
store.subscribe(() => {
  //$counter.innerHTML = store.getState()
  $counter.textContent = store.getState()
})

// logar
store.subscribe(() => {
  console.log('state: ' + store.getState())
})
