import { useState } from "react";

import "./App.css";

import AddUser from "./components/Users/AddUser";
import userList from "./components/Users/UserList";
import UserList from "./components/Users/UserList";

/**
 *
 * @returns
 */
const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (age, name) => {
    setUsersList((prevState) => {
      return [...prevState, { age, name, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
