import React, { useState } from 'react';
import styles from './Register.module.scss'

const Register = () =>   {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    <div className={styles.register}> 
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
            <input
                type="text"
                id="firstName"
                value={firstName}
                placeholder='First name'
                onChange={(e) => setFirstName(e.target.value)}
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            </div>
            <div className={styles.inputBox}>
            <input
                type="text"
                id="lastName"
                value={lastName}
                placeholder='Last name'
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            </div>
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
            <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Register;    