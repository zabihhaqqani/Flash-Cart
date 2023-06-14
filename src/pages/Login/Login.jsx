import { AuthContext, useAuthContext } from "../../contexts/AuthContext";

export function Login() {
  const { userEmail, userPassword, loginAsGuest, email, password,userLogin } =
    useAuthContext(AuthContext);

  return (
    <>
      <div>
        <h3>Sign In</h3>

        <label htmlFor="email">
          Email:
          <input
            onChange={e => userEmail(e)}
            id="email"
            value={email}
            type="email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            onChange={e => userPassword(e)}
            id="password"
            value={password}
            type="password"
          />
        </label>
        <button onClick={() => userLogin()}>
          Login
        </button>
        <button onClick={() => loginAsGuest()}>
          Login as Guest
        </button>
      </div>
    </>
  );
}
