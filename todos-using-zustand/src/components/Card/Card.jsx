import { useState } from "react";
import { useStore } from "../../store";
import "./Card.css";
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {
  const addTask = useStore((state) => state.addTask);
  const tasks = useStore((state) => state.tasks);
  const toggleModal = useStore((state) => state.toggleModal);
  const [task, setTask] = useState({
    title: "",
    type: 1,
  });
  return (
    <div className="modal">
      <div className="card-container">
        <div className="close" onClick={() => toggleModal()}>
          <AiOutlineClose />
        </div>
        <div className="task-input">
          <label htmlFor="task" value="Task">
            Task:
          </label>
          <input
            className="add-task-input"
            type="text"
            name="task"
            id="task"
            placeholder="Fold clothes"
            maxLength={20}
            value={task.title}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
          />
        </div>
        <div className="task-input">
          <label htmlFor="task-type">Type:</label>
          <select
            className="add-task-input"
            name="task-type"
            id="task-type"
            value={task.type}
            onChange={(e) => {
              setTask({ ...task, type: e.target.value });
            }}
          >
            <option value={1}>Planned</option>
            <option value={2}>Ongoing</option>
            <option value={3}>Done</option>
          </select>
        </div>
        <div className="submit">
          <button
            onClick={() => {
              console.log(task);
              addTask(task);
              toggleModal();
              console.log(tasks);
            }}
            className="submit-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
