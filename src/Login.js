import React, { useState }  from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
    const[email, setEmail]=useState('');
    const [password, setpassword] = useState('')
    const history= useHistory()

  const signIn = (e) =>{
    e.preventDefault();   /// it is used for not refreshing the page
    auth
      .signInWithEmailAndPassword(email,password)
      .then((auth)=>{
          history.push('/');
      })
      .catch((error)=>alert(error.message));
  } 

  const register = (e) =>{
      e.preventDefault();

      auth 
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch((error)=> alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__section">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e=> setpassword(e.target.value)} />

          <button className="login__signInButton" type='submit' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amazon fake clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
