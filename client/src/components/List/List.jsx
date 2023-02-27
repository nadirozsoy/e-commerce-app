import React from 'react'
import Card from '../.././components/Card/Card'

const List = () => {
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
    <div className="list">
      {data?.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default List
