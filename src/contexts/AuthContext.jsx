import axios from "axios";
import {
  createContext,
  useContext,
  
  useReducer,
  
} from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const initialState = {
    isUserLoggedIn: false,
    user: {},
    token: "",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = async userLoginData => {
    try {
      const response = await axios.post(`/api/auth/login`, userLoginData);
      if (response.status === 200) {
        
        localStorage.setItem("token", response?.data?.encodedToken);
        dispatch({type:"IS_LOGGED_IN_TRUE",payload:true})
        dispatch({type:"SET_TOKEN",payload: response?.data?.encodedToken})
        dispatch({type:"SET_USER",payload:response?.data?.foundUser})
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      }
    } catch (error) {
      console.log(state?.password);
      dispatch({type:"IS_LOGGED_IN_FALSE" ,payload:false})
      console.log(error?.response?.data);
    }
  };
const userSignup = async (signupData) => {
    try {
      const response = await axios.post(`/api/auth/signup`, signupData);
      if (response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        dispatch({ type: "IS_LOGGED_IN_TRUE", payload: true });
        dispatch({ type: "SET_USER", payload: response?.data?.createdUser });
        dispatch({ type: "SET_TOKEN", payload: response?.data?.encodedToken });
        navigate("/");
      }
    } catch (e) {
      dispatch({type:"IS_LOGGED_IN_FALSE" ,payload:false})
      console.error(e);
    }
  };


  const userLogout = () => {
    dispatch ({type:"IS_LOGGED_IN_FALSE",payload:false})
    dispatch ({type:"SET_USER",payload:{}})
    dispatch  ({ type: "SET_TOKEN", payload: "" });
    localStorage.removeItem("token")
    toast.success("Logout Successful!")
     navigate("/");
  }


  return (
    <AuthContext.Provider value={{...state, loginUser ,userSignup,userLogout}}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext };
