import "./login.scss"
import logo from "../../images/logo2.png"
import { ArrowForwardIosOutlined } from "@material-ui/icons"

export default function Login() {
    

   
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <img className="logo" src={logo} alt="" />
        
        </div>
      
      </div>
      <div className="container">
        <form >
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number"/>
          <input type="password" placeholder="password" />
          <button className="LoginButton">Sign In</button>
          <span>New to Netflix? <b>Sign up now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot .
            <b>Learn more</b>
          </small>
        </form>
    </div>
    </div>
  );
}
