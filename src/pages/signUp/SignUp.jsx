import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.css";

export const SignUp = ()=> {
  const navigate = useNavigate();
  const { userSignup } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    if (
      !userDetails?.firstName.trim() ||
      !userDetails?.lastName.trim() ||
      !userDetails?.email.trim() ||
      !userDetails?.password.trim() ||
      !userDetails?.confirmPassword.trim()
    ) {
    } else if (userDetails?.password !== userDetails?.confirmPassword) {
      toast.warning("Passwords Do not Match!");
    } else {
      userSignup(userDetails);
    }
  };
  return (
    <>
      <div className="signup-form-contianer">
        <form className="signup-form" onSubmit={(e) => signUpHandler(e)}>
          <h2>Signup</h2>
          <div className="input-container">
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            required
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, firstName: e.target.value }))
            }
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            required
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, lastName: e.target.value }))
            }
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, email: e.target.value }))
            }
          />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            placeholder="Password"
            minLength="8"
            maxLength="10"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, password: e.target.value }))
            }
          />
         <i
          onClick={() => setShowPassword(!showPassword)}
          className={`fa-regular fa-${!showPassword ? "eye-slash" : "eye"}`}
          id="show-hide-btn1"
        ></i>
          <input
            type={showPassword2 ? "text" : "password"}
            id="confirm-password"
            required
            placeholder="Confirm Password"
            minLength="8"
            maxLength="10"
            value={userDetails.confirmPassword}
            onChange={(e) =>
              setUserDetails((data) => ({
                ...data,
                confirmPassword: e.target.value,
              }))
            }
          />
         <i
          onClick={() => setShowPassword2(!showPassword2)}
          className={`fa-regular fa-${!showPassword2 ? "eye-slash" : "eye"}`}
          id="show-hide-btn2"
        ></i>
        </div>
          <button type="submit" className="add-to-cart-btn">
            Signup
          </button>
          <p className="have-account" onClick={() => navigate("/login")}>
            Already have an account <i className="fa-solid fa-angle-right"></i>
          </p>
        </form>
      </div>
    </>
  );
}
