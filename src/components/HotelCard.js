import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Icon, Left, Body, Right } from 'native-base'

import Price from '../components/Price'
import Stars from '../components/Stars'

export default ({ image, name, stars, price, onPress }) => (
  <Card>
    <CardItem>
      <Left>
        <Body>
          <Text>{name}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody button onPress={onPress}>
      <Image source={{ uri: image }} style={{height: 200, width: null, flex: 1}} />
    </CardItem>
    <CardItem>
      <Left>
        <Price price={price} />
      </Left>
      <Right>
        <Stars stars={stars} />
      </Right>
    </CardItem>
  </Card>
)
