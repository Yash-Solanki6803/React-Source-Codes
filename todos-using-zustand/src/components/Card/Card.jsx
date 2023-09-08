import { useStore } from "../../store";
import "./Card.css";
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {
  const toggleModal = useStore((state) => state.toggleModal);
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
          />
        </div>
        <div className="task-input">
          <label htmlFor="task-type">Type:</label>
          <select className="add-task-input" name="task-type" id="task-type">
            <option value="1">Planned</option>
            <option value="2">Ongoing</option>
            <option value="3">Done</option>
          </select>
        </div>
        <div className="submit">
          <button className="submit-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
