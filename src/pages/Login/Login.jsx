import { useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { toast } from 'react-toastify';

export function Login() {

  const navigate = useNavigate()
  const { loginUser } = useAuthContext()

  const [userData,setUserData] = useState({
    email:"",
    password:"",
  })

  const guestUserData = {
    email:"mdzabihhaqqani@gmail.com",
    password:"haqqani"
  }

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
     toast.warning("Enter valid Credentials!")
      
    } else {
      // toast.success("Log In Successful!")
      loginUser(userData);

    }
  }

  const loginAsGuest =(e) => {
    e.preventDefault()
    setUserData(guestUserData)
    loginUser(guestUserData)
    toast.success("Log In Successful!")
  }
const [showPassword,setShowPassword] = useState(false)

  return (
    <>
      <div>
        <h3>Log In</h3>
        
    <form >
        <label htmlFor="email">
          Email:
          <input
            id="email"
            value={userData.email}
            type="email"
            placeholder="Enter your Email"
            onChange={e => setUserData(data=>({...data,email:e.target.value}))}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            value={userData.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Your Password"
            onChange={e => setUserData(data=>({...data,password:e.target.value}))}
            required
          />
          <span onClick={()=>setShowPassword(!showPassword)}>{showPassword?"hide":"show"}</span>
        </label>
        <button onClick={loginHandler}>
          Login
        </button>
        <button onClick={loginAsGuest}>
          Login as Guest
        </button>
        </form>
        <button onClick={()=>navigate("/signup")}>
          SignUp
        </button>
      </div>
    </>
  );
}
