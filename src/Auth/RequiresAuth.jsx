import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export function RequiresAuth ({children}) {
    let location = useLocation();
    const {login} = useAuthContext()
    return login?children: <Navigate to="/login"  state={{from:location}}/>
}