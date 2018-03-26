import React from 'react'
import { View, Icon } from 'native-base'

export default ({ stars }) => (
  <View style={{flexDirection: 'row'}}>
    {[...Array(Number(stars))].map((x, i) =>
      <Icon key={i} active name='ios-star' style={{color: '#ffd700'}} />
  )}
    {[...Array(Number(5 - stars))].map((x, i) =>
      <Icon key={i} active name='ios-star-outline' />
  )}
  </View>
)
