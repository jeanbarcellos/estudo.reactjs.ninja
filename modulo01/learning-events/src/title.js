'use strict'

import React from 'react'

// desestruturalção de props
const Title = ({ name, lastName }) => (
  <h1>Olá {`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

// arrow funcions
// const Title = (props) => (
//   <h1>Olá {`${props.name} ${props.lastName}`}</h1>
// )

// const Title = React.createClass({
//   getDefaultProps: function (){
//     return {
//       name: 'Desconhecido',
//       lastName: {
//         first: 'Sem',
//         last: 'Sobrenome'
//       }
//     }
//   },

//   render: function () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastName.first + ' ' + this.props.lastName.last}!</h1>
//     )
//   }
// })

export default Title
