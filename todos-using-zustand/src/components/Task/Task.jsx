import { useStore } from "../../store";
import "./Task.css";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const deleteTask = useStore((store) => store.deleteTask);
  const task_type = {
    status: "",
  };

  switch (task.type) {
    case 1: {
      task_type.status = "PLANNED";
      break;
    }
    case 2: {
      task_type.status = "ONGOING";
      break;
    }
    case 3: {
      task_type.status = "DONE";
      break;
    }

    default:
      break;
  }
  return (
    <div className="task">
      <div className="close" onClick={() => deleteTask(title)}>
        <AiFillDelete />
      </div>
      <div
        className="taskContent"
        style={{ backgroundColor: `var(--${task_type.status})` }}
      >
        <div className="task-title">{title}</div>
        <div className="task-status">{task_type.status}</div>
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
};

export default Task;
