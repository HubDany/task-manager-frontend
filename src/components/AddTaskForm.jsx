import { useState } from "react";
import axios from "axios";
import "../assets/styles/AddTaskForm.css";

const AddTaskForm = () => {
    const [header, setHeader] = useState("");
    const [body, setBody] = useState("");
    const [status] = useState("Attivo");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = { header, body, status };

        axios.post("http://localhost:8080/api/task", newTask)
            .then((response) => {
                console.log("Task added:", response.data);
                setHeader("");
                setBody("");
            })
            .catch((error) => {
                console.error("There was an error adding the task!", error);
            });
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                placeholder="Task Title"
                className="task-input"
                required
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Task Description"
                className="task-textarea"
                required
            />
            <button type="submit" className="task-button">
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;
