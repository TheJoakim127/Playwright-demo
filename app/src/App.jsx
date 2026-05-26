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
  const [taskLoading, setTaskLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 
 
  const [editingId, setEditingId] = useState(null); 
  const [editValue, setEditValue] = useState(""); 
 
  const [filter, setFilter] = useState("all"); 
 
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
    setErrorMessage(""); 
 
    try { 
      await fakeLoginApi( 
        loginForm.username, 
        loginForm.password 
      ); 
 
      setIsAuthenticated(true); 
    } catch (error) { 
      setErrorMessage(error); 
    } finally { 
      setLoading(false); 
    } 
  }; 
 
  const handleLogout = () => { 
    setIsAuthenticated(false); 
  }; 
 
const handleAddTask = async () => {
  if (!newTask.trim()) {
    setErrorMessage("Task cannot be empty");
    return;
  }

  setTaskLoading(true);
  setErrorMessage("");

  // Random async delay
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 3000)
  );

  const task = {
    id: Date.now(),
    title: newTask,
    completed: false,
  };

  setTasks([...tasks, task]);

  setNewTask("");

  setTaskLoading(false);
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
 
  const handleSaveEdit = (id) => { 
    setTasks( 
      tasks.map((task) => 
        task.id === id 
          ? { ...task, title: editValue } 
          : task 
      ) 
    ); 
 
    setEditingId(null); 
    setEditValue(""); 
  }; 
 
  const filteredTasks = tasks.filter((task) => { 
    if (filter === "active") { 
      return !task.completed; 
    } 
 
    if (filter === "completed") { 
      return task.completed; 
    } 
 
    return true; 
  }); 
 
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
 
          {errorMessage && ( 
            <p className="error">{errorMessage}</p> 
          )} 
 
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
 
            <button 
              onClick={handleAddTask} 
              disabled={taskLoading} 
            > 
              {taskLoading ? "Adding..." : "Add"} 
            </button> 
          </div> 
 
          {taskLoading && <p>Adding task...</p>} 
 
          {errorMessage && ( 
            <p className="error">{errorMessage}</p> 
          )} 
 
          <div className="filters"> 
            <button onClick={() => setFilter("all")}> 
              All 
            </button> 
 
            <button 
              onClick={() => setFilter("active")} 
            > 
              Active 
            </button> 
 
            <button 
              onClick={() => setFilter("completed")} 
            > 
              Completed 
            </button> 
          </div> 
 
          <ul className="task-list"> 
            {filteredTasks.map((task) => ( 
              <li 
                key={task.id} 
                className={ 
                  task.completed ? "completed" : "" 
                } 
              > 
                <div> 
                  <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => 
                      toggleTask(task.id) 
                    } 
                  /> 
 
                  {editingId === task.id ? ( 
                    <> 
                      <input 
                        value={editValue} 
                        onChange={(e) => 
                          setEditValue(e.target.value) 
                        } 
                      /> 
 
                      <button 
                        onClick={() => 
                          handleSaveEdit(task.id) 
                        } 
                      > 
                        Save 
                      </button> 
                    </> 
                  ) : ( 
                    <span>{task.title}</span> 
                  )} 
                </div> 
 
                <div> 
                  <button 
                    onClick={() => { 
                      setEditingId(task.id); 
                      setEditValue(task.title); 
                    }} 
                  > 
                    Edit 
                  </button> 
 
                  <button 
                    onClick={() => 
                      handleDeleteTask(task.id) 
                    } 
                  > 
                    Delete 
                  </button> 
                </div> 
              </li> 
            ))} 
          </ul> 
 
          {filteredTasks.length === 0 && ( 
            <p>No tasks available.</p> 
          )} 
        </div> 
      )} 
    </div> 
  ); 
} 