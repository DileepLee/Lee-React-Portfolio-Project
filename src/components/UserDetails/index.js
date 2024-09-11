import React, { useState, useEffect } from 'react';
import './index.css';

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="user-details">
      <h2 className="userdetails-heading">User Details</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <div className="user-cards">
          {users.map((user, index) => (
            <div className="user-card" key={index}>
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
