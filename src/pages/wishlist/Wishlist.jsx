import ProductCard from "../../components/productCard/ProductCard"
import { useProductContext } from "../../contexts/ProductsContext"

export const Wishlist = () => {
  const { wishListData } = useProductContext()

  return (
    <>
      <div>
        {wishListData?.length <= 0 ? (
          ""
        ) : (
          <h3 className="title">My WishList ({wishListData?.length})</h3>
        )}
        <div className="card-container">
          {wishListData?.length > 0 ? (
            wishListData?.map((product) => {
              const { _id, name, price, category, url, rating } = product
              return (
                <ProductCard
                  key={_id}
                  name={name}
                  price={price}
                  category={category}
                  url={url}
                  rating={rating}
                  product={product}
                  _id={_id}
                />
              )
            })
          ) : (
            <h3 className="title">Your Wishlist is Empty!</h3>
          )}
        </div>
      </div>
    </>
  )
}
