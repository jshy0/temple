"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTodo: TodoItem = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTask("");
    toast.success("Todo successfully added!");
  };

  const handleToggleTask = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    const completedTodo = todos.filter((todo) => todo.id === id);
    if (!completedTodo[0].completed)
      toast.success(`${completedTodo[0].task} completed! 🥳`);
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    toast.success("Todo successfully deleted!");
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Todo List</h2>

      <div className="flex mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 border border-slate-300 rounded-l-md"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 text-white px-6 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="space-x-4"
              checked={todo.completed}
              onChange={() => handleToggleTask(todo.id)}
            />
            <span
              className={`text-lg ${
                todo.completed ? "line-through text-slate-400" : ""
              }`}
            >
              {todo.task}
            </span>
            <button onClick={() => handleDeleteTask(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
