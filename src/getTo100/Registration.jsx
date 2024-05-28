import React, { useState } from "react";
import User from "./User.jsx";
import ListUser from "./ListUser.jsx";
import styles from "./Registration.module.css";

export default function Registration(props) {
  const [newUser, setNewUser] = useState("");
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newUser.title) return;
    props.setUsers((prev) => [newUser, ...prev])
    setNewUser("");
  };
  const handleDelete = (userIdToRemove) => {
    props.setUsers((prev) => prev.filter((user) => user.id !== userIdToRemove));
  };

  return (
    
      <main className={styles.regist} >
        <h1>Get to 100!</h1>
        <h3>Add players:</h3>
        <User
          newUser={newUser}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ListUser allUsers={props.users} handleDelete={handleDelete} />
        <button onClick={props.handleStartGame}>start game</button>
      </main>
    
  );
}
