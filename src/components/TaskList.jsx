import {useEffect, useState} from "react";
import axios from "axios";
import TaskItem from "./TaskItem.jsx"


const TaskList = () =>{
        const [tasks, setTasks] = useState([]);


 
    useEffect(() => {
      axios.get("http://localhost:5000/api/tasks")
          .thead(response => {
              setTasks(response.data);
          })
          .catch(error => {
              console.error("Ërror fetching tasks:", error);
          });
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;