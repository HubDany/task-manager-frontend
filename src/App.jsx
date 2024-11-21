import './assets/styles/App.css';
import AddTaskForm from "./components/AddTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
    return (
        <div className="app-container">
            <h1 className="app-title">Task Management</h1>
            <div className="task-components">
                <AddTaskForm />
                <TaskList />
            </div>
        </div>
    );
}

export default App;

