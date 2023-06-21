
import { useProductContext } from "../../contexts/ProductsContext";
import { EditAddress } from "./EditAddress";
import { useState } from "react";
import { AddressForm } from "./AddressForm";
import "./address.css"

export function Address() {
  const { addressData,dispatch } = useProductContext();
const [addAddress, setAddAddress] = useState(false);
    console.log(addressData)
  // const navigate = useNavigate()
  return (
    <div>
      <h1>Address</h1>
        <div className="address-container-main">
     { addAddress && <AddressForm setAddAddress={setAddAddress}/>}
      {addressData?.length===0&&<h4 style={{margin:"1rem"}} >No Addresses!</h4>}
        {addressData?.map(data=> {
            const {id,userName,city,state,country,pincode,mobileNumber,isEdit} = data
            return (<div className="user-detail-address" key={id}>
                <p><strong>{userName}</strong></p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{country}</p>
                <p>{pincode}</p>
                <p>{mobileNumber}</p>
                {isEdit&&<EditAddress editId={id}/>}
                <button style={{backgroundColor:"green"}} className="add-to-cart-btn" onClick={()=>dispatch({type:"EDIT_ADDRESS",payload:id})}>Edit</button>
                <button className="add-to-cart-btn" onClick={()=>dispatch({type:"DELETE_ADDRESS",payload:id})}>Delete</button>
            </div>)
        })}
</div>
      <button style={{backgroundColor:"green"}} className="add-new-address"  onClick={() => setAddAddress(true)}>Add New Address</button>
    </div>
  );
}
