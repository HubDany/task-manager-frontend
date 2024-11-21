import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem.jsx";
import "../assets/styles/TaskList.css";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/task")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    return (
        <div className="task-list-container">
            <h2 className="task-list-title">Task List</h2>
            <ul className="task-list">
                {tasks.map((task) => (
                    <TaskItem key={task.taskId} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
