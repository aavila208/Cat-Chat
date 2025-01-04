import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
