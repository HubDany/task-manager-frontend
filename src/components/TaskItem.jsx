import "../assets/styles/TaskItem.css";
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
    const { header, body, status } = task;

    return (
        <li className="task-card">
            <div className="task-card-content">
                <h3 className="task-card-title">{header}</h3>
                <p className="task-card-body">{body}</p>
                <p className={`task-card-status ${status.toLowerCase()}`}>{status}</p>
            </div>
            <button className="remove-button">Remove</button>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        taskId: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskItem;
