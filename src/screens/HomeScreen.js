import React from 'react'
import { Text, Content, Grid, Col, Button, Spinner } from 'native-base'

import defaultScreen from '../hocs/defaultScreen'
import CardList from '../components/CardList'
import { API_URL } from '../../config.json'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      failed: false,
      hotels: []
    }
  }

  static navigationOptions = {
    headerTitle: 'Lista de hoteles'
  }

  async componentWillMount () {
    try {
      const response = await fetch(API_URL)
      const { hotels } = await response.json()
      this.setState({ hotels, isLoading: false })
    } catch (e) {
      console.log(`The requested server url ${API_URL} isn\' available.`)
      this.setState({ failed: true, isLoading: false })
    }
  }

  render () {
    if (this.state.failed) {
      return <Text>Failed fetching resources at {API_URL}</Text>
    }

    return this.state.isLoading ? (
      <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
        <Grid style={{alignItems: 'center'}}>
          <Col>
            <Spinner />
          </Col>
        </Grid>
      </Content>
    ) : (
      <CardList
        hotels={this.state.hotels}
        onPress={hotel => this.props.navigation.navigate('Details', { hotel })}
        />
    )
  }
}

export default defaultScreen(HomeScreen)
