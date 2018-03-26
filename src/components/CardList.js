import React from 'react'
import HotelCard from './HotelCard'

export default ({ hotels, onPress }) => hotels.map(
  hotel => <HotelCard
    key={hotel.name}
    name={hotel.name}
    image={hotel.images[0]}
    stars={hotel.stars}
    price={hotel.price}
    onPress={() => onPress(hotel)}
        />

)
