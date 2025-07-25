import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, updateTodo,toggleTodo } from '../features/slice';

function TodoForm() {
  const todos = useSelector((state) => (state.todos));
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  
  
  const addHandler = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task));
      console.log(task);
      setTask("");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Add Todo Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <form onSubmit={addHandler} className="flex gap-3">
            <input 
              type="text" 
              placeholder="What needs to be done?" 
              value={task} 
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-lg">No tasks yet. Add one above!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div 
                key={todo.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 border border-gray-100 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <input type="checkbox" checked={todo.completed} onChange={(e)=>(dispatch(toggleTodo(todo.id)))} ></input>
                    <p className={`ml-4 text-lg font-semibold inline transition-all duration-300 ${todo.completed ? "text-pink-500 line-through " : "text-gray-900"}`}>{todo.text}</p>

                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button 
                      onClick={() => dispatch(updateTodo({ text: task, id: todo.id }))}
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-150 shadow-md"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-150 shadow-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Stats */}
        {todos.length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
              <span className="text-gray-600">
                {todos.length} {todos.length === 1 ? 'task' : 'tasks'} total
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoForm