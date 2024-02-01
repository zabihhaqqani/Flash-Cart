import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const  AuthProvider = ({ children }) =>{
  const initialState = {
    isUserLoggedIn: false,
    user: {},
    token: "",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = async (userLoginData) => {
    try {
      const response = await axios.post(`/api/auth/login`, userLoginData);
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.encodedToken);
        dispatch({ type: "IS_LOGGED_IN_TRUE", payload: true });
        dispatch({ type: "SET_TOKEN", payload: response?.data?.encodedToken });
        dispatch({ type: "SET_USER", payload: response?.data?.foundUser });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      }
      toast.success("Log In Successful!");
    } catch (error) {
      dispatch({ type: "IS_LOGGED_IN_FALSE", payload: false });
      const notification = error?.response?.data?.errors?.find(
        (notification) => ({ notification })
      );
      toast.warning(notification);
      console.error(error?.response?.data?.errors);
      console.error(error)
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
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      }
      toast.success("Sign Up Successful!");
    } catch (error) {
      dispatch({ type: "IS_LOGGED_IN_FALSE", payload: false });
      const notification = error?.response?.data?.errors?.find(
        (notification) => ({ notification })
      );
      toast.warning(notification);
      console.error(error?.response?.data?.errors);
      console.error(error)
    }
  };

  const userLogout = () => {
    dispatch({ type: "IS_LOGGED_IN_FALSE", payload: false });
    dispatch({ type: "SET_USER", payload: {} });
    dispatch({ type: "SET_TOKEN", payload: "" });
    localStorage.removeItem("token");
    toast.success("Logout Successful!");
    navigate(
      location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
    );
  };

  return (
    <AuthContext.Provider
      value={{ ...state, loginUser, userSignup, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext };

