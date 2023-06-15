import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export function SignUp() {

    const {userSignup} = useAuthContext()
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = e => {
    e.preventDefault();
     if (
      !userDetails?.firstName.trim() ||
      !userDetails?.lastName.trim() ||
      !userDetails?.email.trim() ||
      !userDetails?.password.trim() ||
      !userDetails?.confirmPassword.trim()
    ) {
    } else if (userDetails?.password !== userDetails?.confirmPassword) {
    } else {
      userSignup(userDetails);
    }
  };

  return (
    <>
      <div className="signup-conatiner">
        <h2>SignUp</h2>
        <form onSubmit={e => signUpHandler(e)}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            required
            value={userDetails.firstName}
            onChange={e =>
              setUserDetails(data => ({ ...data, firstName: e.target.value }))
            }
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            required
            value={userDetails.lastName}
            onChange={e =>
              setUserDetails(data => ({ ...data, lastName: e.target.value }))
            }
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={userDetails.email}
            onChange={e =>
              setUserDetails(data => ({ ...data, email: e.target.value }))
            }
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            required
            value={userDetails.password}
            onChange={e =>
              setUserDetails(data => ({ ...data, password: e.target.value }))
            }
          />
           <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            required
            value={userDetails.confirmPassword}
            onChange={e =>
              setUserDetails(data => ({ ...data, confirmPassword: e.target.value }))
            }
          />
           <button type="submit" className="signup-button">
          Signup
        </button>
        </form>
      </div>
    </>
  );
}
