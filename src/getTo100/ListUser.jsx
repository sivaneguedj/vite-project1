import React from "react";

function ListUser({ allUsers, handleDelete }) {
  return (
    <ul>
      {allUsers.map(({ title, id }) => (
        <li style={{ listStyleType: "none" }} key={id}>
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
