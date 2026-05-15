import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save auth state
  useEffect(() => {
    localStorage.setItem(
      "isAuthenticated",
      JSON.stringify(isAuthenticated)
    );
  }, [isAuthenticated]);

  // Fake Login API
  const fakeLoginApi = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "password") {
          resolve(true);
        } else {
          reject("Invalid credentials");
        }
      }, 1000);
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await fakeLoginApi(
        loginForm.username,
        loginForm.password
      );

      setIsAuthenticated(true);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);

    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  return (
    <div className="container">
      <h1>TaskFlow Manager</h1>

      {!isAuthenticated ? (
        <div className="card">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginForm.username}
              onChange={(e) =>
                setLoginForm({
                  ...loginForm,
                  username: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({
                  ...loginForm,
                  password: e.target.value,
                })
              }
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p>
            Username: <strong>admin</strong>
          </p>

          <p>
            Password: <strong>password</strong>
          </p>
        </div>
      ) : (
        <div className="card">
          <div className="header">
            <h2>Your Tasks</h2>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="task-input">
            <input
              type="text"
              placeholder="Add new task..."
              value={newTask}
              onChange={(e) =>
                setNewTask(e.target.value)
              }
            />

            <button onClick={handleAddTask}>
              Add
            </button>
          </div>

          <ul className="task-list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={task.completed ? "completed" : ""}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                      toggleTask(task.id)
                    }
                  />

                  <span>{task.title}</span>
                </div>

                <button
                  onClick={() =>
                    handleDeleteTask(task.id)
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {tasks.length === 0 && (
            <p>No tasks available.</p>
          )}
        </div>
      )}
    </div>
  );
}