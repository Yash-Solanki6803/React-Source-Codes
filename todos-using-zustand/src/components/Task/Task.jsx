import "./Task.css";
import PropTypes from "prop-types";

const Task = ({ type }) => {
  const task_type = {
    color: "",
  };

  switch (type) {
    case 1: {
      task_type.color = "--PLANNED";
      break;
    }
    case 2: {
      task_type.color = "--ONGOING";
      break;
    }
    case 3: {
      task_type.color = "--DONE";
      break;
    }

    default:
      break;
  }
  return (
    <div
      className="task"
      style={{ backgroundColor: `var(${task_type.color})` }}
    >
      Task
    </div>
  );
};

Task.propTypes = {
  type: PropTypes.number,
};

export default Task;
