import React from 'react'
import Card from '../.././components/Card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({ catId, maxPrice, sort, subCats }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map((item) => `&[filters][sub_categories][id]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )

  return (
    <div className="list">
      {error
        ? 'Something went wrong!'
        : loading
        ? 'loading'
        : data?.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
          ))}
    </div>
  )
}

export default List
