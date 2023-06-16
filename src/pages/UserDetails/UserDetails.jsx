import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"

export function UserDetails () {
    const {user,userLogout} = useAuthContext()
    const navigate = useNavigate()
    return <>
    <div><p>Profile Information</p><p onClick={()=>navigate("/account-details/userdetails/address")}>Addresses</p><p> Order History</p></div>
    <div className="user-detail-container">
            <p><strong>Name: </strong>{user.firstName}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <button onClick={userLogout}>Logout</button>
        </div></>
}