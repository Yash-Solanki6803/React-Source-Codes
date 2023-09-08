import "../../App.css";
import { Task } from "../../components";
import { useStore } from "../../store";

const HomePage = () => {
  const tasks = useStore((store) => store.tasks);
  return (
    <div className="page">
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
};

export default HomePage;
