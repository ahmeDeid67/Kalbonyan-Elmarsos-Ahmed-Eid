import { useState, Fragment } from "react";
import React from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
