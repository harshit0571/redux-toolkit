"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodos } from "@/redux/features/todos/todoslice";

export default function Home() {
  const [val, setval] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="add task"
          className="text-black"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <button
          className="bg-gray-500 p-1 rounded-lg"
          onClick={() => {
            dispatch(addTodo(val));
          }}
        >
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <div className="flex gap-4 bg-gray-600 justify-around">
          <p>{todo.id}</p>
          <p>{todo.task}</p>
          <button
            onClick={() => {
              dispatch(removeTodos(todo.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
