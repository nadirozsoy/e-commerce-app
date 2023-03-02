import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

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
        {error
          ? 'Something went wrong!'
          : loading
          ? 'loading'
          : data.map((item) => (
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
