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

const store = createStore(counter)

store.subscribe(() => {
  console.log('Disparou uma ação!', store.getState())
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })

/*

https://redux.js.org/api/store

// const store = createStore(reducer, [preloadedState], [enhancer])
Cria uma loja Redux que contém a árvore de estados completa do seu aplicativo.
Só deve haver uma única loja no seu aplicativo.

// store.getState()
retorna o estado atual

//  dispatch(action)
Despacha uma ação. Essa é a única maneira de desencadear uma mudança de estado.

// subscribe(listener)
Adiciona um ouvinte de alterações. Será chamado sempre que uma ação for despachada, e parte da árvore de estados pode ter sido alterada. Você pode ligar getState()para ler a árvore de estado atual dentro do retorno de chamada.
Executada toda vez que uma ação for disparada
*/
