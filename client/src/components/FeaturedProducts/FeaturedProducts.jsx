import Card from '../Card/Card'
import React from 'react'

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      name: 'a',
    },
    {
      name: 'b',
    },
    {
      name: 'c',
    },
    {
      name: 'd',
    },
  ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} products</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint vitae
          vero quam, sapiente, aliquam corrupti veniam consequuntur quaerat
          obcaecati sunt temporibus ratione mollitia voluptatum debitis delectus
          fugit ipsum cum nisi asperiores nesciunt ipsa, eos id odio! Eligendi
          rem sequi, eveniet omnis vel obcaecati, corrupti accusamus
          consequuntur, debitis ex quidem natus?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
