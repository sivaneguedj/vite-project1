import React from "react";
import styles from "./ListUser.module.css"

function ListUser({ allUsers, handleDelete }) {
  return (
    <ul className={styles.users}>
      {allUsers.map(({ title, id }) => (
        <li className={styles.userli} key={id}>
          <div>
            <h2 style={{display: 'inline-block'}}>{title}</h2>
            <button style={{display: 'inline-block'}} onClick={() => handleDelete(id)}>X</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListUser;
