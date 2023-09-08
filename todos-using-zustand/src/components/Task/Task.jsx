import { useStore } from "../../store";
import "./Task.css";
import PropTypes from "prop-types";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const task_type = {
    color: "",
  };

  switch (task.type) {
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
    <div className="task">
      <div
        className="taskContent"
        style={{ backgroundColor: `var(${task_type.color})` }}
      >
        {title}
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
};

export default Task;
