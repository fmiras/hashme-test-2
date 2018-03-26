import React from 'react'
import { Container, Content } from 'native-base'

export default Screen => class extends React.Component {
  static navigationOptions = Screen.navigationOptions

  render () {
    return (
      <Container>
        <Content>
          <Screen {...this.props} />
        </Content>
      </Container>
    )
  }
}
