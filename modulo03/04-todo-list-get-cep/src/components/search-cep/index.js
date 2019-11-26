'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  }

  async componentDidMount() {
    const response = await ajax({
      headers: { 'content-type': null }
    }).get('http://apps.widenet.com.br/busca-cep/api/cep.json', {
      code: '88054-635'
    })
    this.setState(response)
    console.log(response)
  }

  render() {
    return <SearchCep {...this.state} />
  }
}

export default SearchCepContainer
