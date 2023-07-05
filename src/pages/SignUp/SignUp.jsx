import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./signUp.css";

export function SignUp() {
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
      toast.success("Sign Up Successful!");
    }
  };
  return (
    <>
      <div className="login-form-contianer">
        <form className="login-form" onSubmit={(e) => signUpHandler(e)}>
          <h2>SignUp</h2>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            required
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, firstName: e.target.value }))
            }
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            required
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, lastName: e.target.value }))
            }
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, email: e.target.value }))
            }
          />
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            placeholder="***************"
            minlength="5"
            maxlength="10"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, password: e.target.value }))
            }
          />
          <span
            className="show-hide-btn"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </span>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type={showPassword2 ? "text" : "password"}
            id="confirm-password"
            placeholder="***************"
            required
            minlength="5"
            maxlength="10"
            value={userDetails.confirmPassword}
            onChange={(e) =>
              setUserDetails((data) => ({
                ...data,
                confirmPassword: e.target.value,
              }))
            }
          />
          <span
            className="show-hide-btn"
            onClick={() => setShowPassword2(!showPassword2)}
          >
            {showPassword2 ? "hide" : "show"}
          </span>
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
