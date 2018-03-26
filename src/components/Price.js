import React from 'react'
import { Icon, Text, View } from 'native-base'

export default ({ price }) => (
  <View style={{flexDirection: 'row', 'alignItems': 'center' }}>
    <Icon active name='pricetag' style={{padding: 10}} />
    <Text style={{padding: 10}}>${price} por noche</Text>
  </View>
)
