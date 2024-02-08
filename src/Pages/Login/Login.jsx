import React, { useState } from 'react';
import styles from './Login.module.scss'
import { NavLink } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted:', { firstName, lastName, email, password });
  };

  return (
    <div className={styles.login}> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
            <input
                type="email"
                id="email"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className={styles.inputBox}>
            <input
                type="password"
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <p className={styles.forgotPass}>Forgot your password?</p>
            <button type="submit">Sign in</button>
            <NavLink to="/account/register" style={{color: "#123026", textDecoration: "none"}}>
                <p className={styles.createAcc}>Create account</p>
            </NavLink>
      </form>
    </div>
  );
}

export default Login;  