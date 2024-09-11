import React, { useState } from 'react';
import './index.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Add new user to the list
    existingUsers.push(newUser);
    // Store updated list back in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-form">
      <h2 className="register-heading">Register Form</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="User Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
