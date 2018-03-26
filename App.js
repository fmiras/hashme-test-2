import React, { Component } from 'react'
import { Container, Header, Content } from 'native-base'

import HomeScreen from './src/screens/HomeScreen'

export default class AwesomeApp extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <HomeScreen />
        </Content>
      </Container>
    )
  }
}
