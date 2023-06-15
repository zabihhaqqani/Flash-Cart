import { useAuthContext } from "../../contexts/AuthContext"

export function UserDetails () {
    const {user,userLogout} = useAuthContext()

    return <><div className="user-detail-container">
            <p><strong>Name: </strong>{user.firstName}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <button onClick={userLogout}>Logout</button>
        </div></>
}