import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Icon, Left, Body, Right } from 'native-base'

export default ({ image, name, stars, price }) => (
  <Card>
    <CardItem>
      <Left>
        <Body>
          <Text>{name}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image source={{ uri: image }} style={{height: 200, width: null, flex: 1}} />
    </CardItem>
    <CardItem>
      <Left>
        <Icon active name='pricetag' />
        <Text>${price} por noche</Text>
      </Left>
      <Right style={{flexDirection: 'row'}}>
        {[...Array(Number(stars))].map((x, i) =>
          <Icon key={i} active name='ios-star' />
        )}
        {[...Array(Number(5 - stars))].map((x, i) =>
          <Icon key={i} active name='ios-star-outline' />
        )}
      </Right>
    </CardItem>
  </Card>
)
