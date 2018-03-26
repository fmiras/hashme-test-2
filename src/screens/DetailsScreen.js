import React from 'react'
import { Image } from 'react-native'
import { List, ListItem, Text } from 'native-base'

import defaultScreen from '../hocs/defaultScreen'
import Price from '../components/Price'
import Stars from '../components/Stars'

class DetailsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hotel: {}
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    headerTitle: params ? params.name : 'Not loaded yet'
  }

  async componentWillMount () {
    this.setState({ hotel: this.props.navigation.state.params.hotel })
  }

  render () {
    return (
      <List>
        <ListItem>
          <Text>Nombre: {this.state.hotel.name}</Text>
        </ListItem>
        <ListItem>
          <Text>Estrellas:</Text>
          <Stars stars={this.state.hotel.stars} />
        </ListItem>
        <ListItem>
          <Text>Precio:</Text>
          <Price price={this.state.hotel.price} />
        </ListItem>
        {this.state.hotel.images.map(image => (
          <ListItem>
            <Image
              key={this.state.hotel.name}
              source={{ uri: image }}
              style={{height: 200, width: null, flex: 1}}
            />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default defaultScreen(DetailsScreen)
