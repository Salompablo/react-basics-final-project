import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersLists, setUsersList] = useState([]);

  function addUserHandler(uName, uAge) {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersLists} />
    </div>
  );
}

export default App;
