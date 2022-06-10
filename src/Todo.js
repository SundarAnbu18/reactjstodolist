import React from "react";
import Checkbox from '@mui/material/Checkbox';
export default function ({ todo }) {
  return (
    <div>
      <label>
      <Checkbox defaultChecked />
        {todo.name}
      </label>
    </div>
  );
}
