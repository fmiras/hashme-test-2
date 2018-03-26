import React from 'react'
import HotelCard from './HotelCard'

export default ({ hotels }) => hotels.map(
  ({ name, images, stars, price }) =>
    <HotelCard
      key={name}
      name={name}
      image={images[0]}
      stars={stars}
      price={price}
    />
)
