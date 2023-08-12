import "./AdminLogin.css";
// @ts-ignore
import Logo from './../../Assets/logo.svg'
const AdminLogin = () => {
  return (
    <div className="AdminLoginWrapper">
      <div className="AdminLoginFormWrapper">
        <img src={Logo} alt="logo" className="AdminLoginFormLogo"></img>
        <h1 className="AdminLoginFormHeading">ADMIN LOGIN</h1>
        <form action="" className="AdminLoginForm">
          <label
            htmlFor="AdminLoginUserNameInput"
            className="AdminLoginUserNameInputLabel"
          >
            Username
          </label>
          <input
            type="text"
            className="AdminLoginUserNameInput"
            id="AdminLoginUserNameInput"
          />
          <label
            htmlFor="AdminLoginPasswordInput"
            className="AdminLoginPasswordInputLabel"
          >
            Password
          </label>
          <input
            type="password"
            className="AdminLoginPasswordInput"
            id="AdminLoginPasswordInput"
          />
        </form>
        <button className="AdminLoginButton">Login</button>
        <p className="AdminLoginForgotPasswordLink">Forgot password?</p>
      </div>
    </div>
  );
};

export default AdminLogin;
