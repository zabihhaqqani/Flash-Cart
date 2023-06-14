import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    
    const initialState = {
        email:"",
        password:""
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const [login ,setLogin ] = useState(false)
   

    const guestData = async () => {
        try {
            const response = await axios.post(`/api/auth/login`, 
            {initialState}
            );
            // saving the encodedToken in the localStorage
            console.log(response)
            localStorage.setItem("token", response?.data?.encodedToken);
            
        } catch (error) {
      console.log(state.password)

    console.log(error.response.data);
  }
};
    // useEffect(() => {
    //     guestData()
    // }, []);





const userEmail = (e) => {
    const emailEntered = e.target.value;
    dispatch({type:"USER_EMAIL",payload:emailEntered})
  }
  
  const userPassword = (e) => {
    const passwordEntered = e?.target?.value;
    dispatch({type:"USER_PASSWORD",payload:passwordEntered})
  }


  const navigate = useNavigate();
  const location = useLocation();
  
  const loginAsGuest = () => {
    dispatch({type:"LOGIN_AS_GUEST"})
    setLogin(true)
    navigate(location?.state?.from?.pathname)
  
}

guestData()

const userLogin = () => {
    dispatch({type:"USER_LOGIN"})
    navigate(location?.state?.from?.pathname)
}


    return <AuthContext.Provider value={{...state,userEmail,userPassword,loginAsGuest,login,userLogin,dispatch}}>
        {children}
    </AuthContext.Provider>
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

export {useAuthContext}