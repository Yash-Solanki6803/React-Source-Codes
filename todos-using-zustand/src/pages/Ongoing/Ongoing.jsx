import { Task } from "../../components";
import "../../App.css";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

const Ongoing = () => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.type === 2),
    shallow
  );
  return (
    <div className="page">
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
};

export default Ongoing;
