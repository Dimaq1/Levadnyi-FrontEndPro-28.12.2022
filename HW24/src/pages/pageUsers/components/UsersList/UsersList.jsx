import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <Link to={`/users/${user.id}/albums`}>Album</Link>
        </div>
      ))}
    </div>
  );
};

export default UsersList;