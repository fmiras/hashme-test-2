import React from 'react'
import { Text } from 'native-base'

import CardList from '../../components/CardList'
import { API_URL } from '../../../config.json'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      hotels: []
    }
  }

  async componentWillMount () {
    const response = await fetch(API_URL)
    const { hotels } = await response.json()
    this.setState({ hotels, isLoading: false })
  }

  render () {
    return this.state.isLoading ? (
      <Text>Loading...</Text>
    ) : (
      <CardList hotels={this.state.hotels} />
    )
  }
}
