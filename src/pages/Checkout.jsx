import { useProductContext } from "../contexts/ProductsContext"

export function Checkout() {
    const {cartData,discount} = useProductContext()
    const deliveryCharge = 200
    return <div><h1>Check out page</h1>
      <div>
                   <p>
                  Price ({cartData?.length} items) :
                  {cartData?.reduce((total, curr) => total + curr.price*curr.qty-discount, 0)}
                  
                </p>
                <p>Delivery Charges: -{deliveryCharge}</p>
                <p>
                 <strong> Total Price :
                  {cartData?.reduce((total, curr) => (total + curr.price*curr.qty-discount)-deliveryCharge, 0)}</strong>
                  
                </p>
                <button>Place Order</button>
                </div>
    </div>
}