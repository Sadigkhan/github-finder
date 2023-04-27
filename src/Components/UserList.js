import React from "react";
import User from "./User";
import Loading from "./Loading";

const UserList = ({ users, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (!users || users.length === 0) {
    return (
      users.map((user) => <User key={user.id} user={user} />)
    );
  }

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;



