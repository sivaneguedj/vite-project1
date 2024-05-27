import React from "react";

function User({ newUser, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New player"
        value={newUser.title || ""}
        onChange={handleChange}
      />
      {!newUser.title ? null : (
        
          <button type="submit">Add player</button>
        
      )}
    </form>
  );
}

export default User;