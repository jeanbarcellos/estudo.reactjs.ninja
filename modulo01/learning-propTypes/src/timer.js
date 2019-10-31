import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    console.log('constructor() Timer')

    super()
    this.state = {
      time: 0
    }

    this.timer
  }

  render() {
    console.log('render() Timer')

    return <div>Timer: {this.state.time}</div>
  }

  /**
   * Logo após o componente ser renderizado
   * Manipular DOM depois de renrezidao
   */
  componentDidMount() {
    console.log('componentDidMount() Timer')
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() Timer')
    clearInterval(this.timer)
  }

  /**
   * Executado toda vez que alguma propriedade do componente for atualizada
   *
   * AQUI É O MOMENTO DE ALTERAR O ESTADO DO COMPONENTE ANTES DE SER RENDERIZADO
   */
  componentWillReceiveProps(nextProps) {
    console.log(
      'componentWillReceiveProps(nextProps) Timer',
      this.props,
      nextProps
    )

    // this.setState({
    //   time: nextProps.time
    // })
  }

  /**
   * Fazer testes de valores antes de renderizar
   */
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate(nextProps, nextState) Timer', this.props, nextProps, this.state, nextState);

    // Validar se o 'state' esstiver mudando
    // return this.state.time != nextState.time

    // Validar se as 'props' estão mudando
    return this.props.time != nextProps.time
  }

  /**
   * Não se mexe no estado aqui
   */
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate(nextProps, nextState) Timer', this.props, nextProps, this.state, nextState);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate(prevProps, prevState) Timer', this.props, prevProps, this.state, prevState);
  }
}

export default Timer
