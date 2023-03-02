import Card from '../Card/Card'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        )
        console.log(res)
        setData(res.data.data)
      } catch (err) {
        // alert('There was a problem fetching data')
        console.log(err)
      }
    }
    fetchData()
  }, [])

  console.log(data)

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
