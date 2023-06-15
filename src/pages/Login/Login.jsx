import { useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

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

  const loginHandler = () => {
    loginUser(userData)
  }

  const loginAsGuest =() => {
    setUserData(guestUserData)
    loginUser(guestUserData)
  }

  return (
    <>
      <div>
        <h3>Sign In</h3>

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
            type="password"
            placeholder="Enter Your Password"
            onChange={e => setUserData(data=>({...data,password:e.target.value}))}
            required
          />
        </label>
        <button onClick={loginHandler}>
          Login
        </button>
        <button onClick={() => loginAsGuest()}>
          Login as Guest
        </button>
        <button onClick={()=>navigate("/signup")}>
          SignUp
        </button>
      </div>
    </>
  );
}
