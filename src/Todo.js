import React from "react";

export default function ({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={todo.complete} />
        {todo.name}
      </label>
    </div>
  );
}
