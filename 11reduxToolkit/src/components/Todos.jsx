import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      <div className="flex flex-col justify-center items-center my-[10px]">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="w-[400px] h-[50px] bg-cyan-300 flex justify-center items-center my-[10px]"
          >
            <span className="text-[30px] text-amber-900">{todo.text}</span>
            <button
              className="px-[20px]"
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              del
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
