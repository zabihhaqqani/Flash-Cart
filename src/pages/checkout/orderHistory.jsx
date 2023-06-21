import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useOrderContext } from "../../contexts/OrderContext";
import { useProductContext } from "../../contexts/ProductsContext";
import "./orderHistory.css"
export function OrderHistory() {
    // const {orderHistory} = useOrderContext()
    const {state} = useAuthContext()
    const navigate = useNavigate()
    const {orderState} = useOrderContext()
    const {cartData} = useProductContext()

    console.log(orderState?.orderHistory.length)

  return (
    <div>
        <h3 style={{margin:"1rem"}}>Orders Placed:</h3>
    <div className="order-history-container">
        <div >
            {orderState?.orderHistory?.length<= 0? <p style={{textAlign:"center",margin:"1rem"}}>No Orders Placed!</p>:<div className="user-detail-address-order" style={{textAlign:"left"}}>
           {orderState?.orderHistory?.map(item=>{
            const {delivery,price,orderProducts} = item
            return (<div className="order-history-card">
                <p> <strong>Items Ordered:</strong> {orderProducts?.map(item=>(<div key={item.id}>
                    <p> <strong> Order ID: </strong>{item._id}</p>
                   <p> Name: {item.name} - {item.category}</p>
                   
                     </div>))}</p>
                <p>Delivery Charge: ₹{delivery}</p>
                <p>Total Amount: ₹{price}</p>
                <strong>Delivery To:</strong>
                 <p>{orderState?.addressDetails?.userName}</p>
                 <p>{orderState?.addressDetails?.city}</p>
                 <p>{orderState?.addressDetails?.state}</p>
                 <p>{orderState?.addressDetails?.country}</p>
                 <p>{orderState?.addressDetails?.pincode}</p>
                 <p>{orderState?.addressDetails?.mobileNumber}</p>
            </div>)
           })}
          
        </div>}
           
        </div>
            
        
    </div>
    </div>
  );
}
