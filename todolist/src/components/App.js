import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/todos";
import "./App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const retrieveTodos = async () => {
    const response = await api.get("?_limit=10");
    return response.data;
  };

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const request = {
      id: uuid(),
      ...todo,
    };

    const response = await api.post("", request);
    console.log(response);
    setTodos([...todos, response.data]);
  };

  const updateTodoHandler = async (todo) => {
    const response = await api.put(`/${todo.id}`, todo);
    const { id, title, completed } = response.data;
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...response.data } : todo;
      })
    );
  };

  const removeTodoHandler = async (id) => {
    await api.delete(`/${id}`);
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodoList);
  };

  useEffect(() => {
    const getAllTodos = async () => {
      const allTodos = await retrieveTodos();
      if (allTodos) setTodos(allTodos);
    };

    getAllTodos();
  }, []);

  useEffect(() => {}, [todos]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <TodoList
                {...props}
                todos={todos}
                getTodoId={removeTodoHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddTodo {...props} addTodoHandler={addTodoHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditTodo {...props} updateTodoHandler={updateTodoHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
