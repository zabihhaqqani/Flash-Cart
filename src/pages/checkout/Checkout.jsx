import { useProductContext } from "../../contexts/ProductsContext";
import "../checkout/Checkout.css"

export function Checkout() {
  const { cartData, discount } = useProductContext();
  const deliveryCharge = 200;
  return (
    <div>
      <h3>Check out page</h3>
      {/* <AddressContainer/> */}
      {cartData?.length>0? <div className="checkout-card-container">
        <h3>Order Details:</h3>
        <div className="checkout-card-container-p">
       
          <p>
          Price ({cartData?.length} items) :
          </p>
          <p>
          ₹{cartData?.reduce(
            (total, curr) => total + curr.price * curr.qty - discount,
            0
          )}
       </p>
        </div>
         <div className="checkout-card-container-p">
        <p>Delivery Charges: </p>
        <p>+{deliveryCharge}</p>
        </div>
        <div className="checkout-card-container-p">
        <p>
        
           
           <strong>Total Price : </strong>  </p>
            <p><strong>
            ₹{cartData?.reduce(
              (total, curr) =>
                total + curr.price * curr.qty - discount + deliveryCharge,
              0
            )}
          </strong>
      </p>
        </div>
        <button className="add-to-cart-btn">Place Order</button>
      </div>: <p>No Items in Checkout!</p> }
     
    </div>
  );
}
