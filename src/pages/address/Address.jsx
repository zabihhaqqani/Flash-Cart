import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductsContext";
import { EditAddress } from "./EditAddress";
import { useState } from "react";
import { AddressForm } from "./AddressForm";

export function Address() {
  const { addressData,dispatch } = useProductContext();
const [addAddress, setAddAddress] = useState(false);
    console.log(addressData)
  const navigate = useNavigate()
  return (
    <div>
      <h1>Address</h1>
      <button onClick={() => setAddAddress(true)}>Add New Address</button>
     { addAddress && <AddressForm setAddAddress={setAddAddress}/>}
      {addressData?.length===0&&<h4>No Addresses!</h4>}
        {addressData?.map(data=> {
            const {id,userName,city,state,country,pincode,mobileNumber,isEdit} = data
            return (<div key={id}>
                <p><strong>{userName}</strong></p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{country}</p>
                <p>{pincode}</p>
                <p>{mobileNumber}</p>
                {isEdit&&<EditAddress editId={id}/>}
                <button onClick={()=>dispatch({type:"EDIT_ADDRESS",payload:id})}>Editsssssss</button>
                <button onClick={()=>dispatch({type:"DELETE_ADDRESS",payload:id})}>Delete</button>
            </div>)
        })}
    </div>
  );
}
