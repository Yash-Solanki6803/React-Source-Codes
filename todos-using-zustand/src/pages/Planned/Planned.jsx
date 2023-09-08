import { Task } from "../../components";
import "../../App.css";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

const Planned = () => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.type === 1),
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

export default Planned;
