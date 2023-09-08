import "../../App.css";
import { InputModal, Search, Task } from "../../components";
import { useStore } from "../../store";

const HomePage = () => {
  const tasks = useStore((store) => store.tasks);
  return (
    <div className="container">
      <div className="row">
        <Search />
        <InputModal />
      </div>
      <div className="page">
        {/* <Task type={3} /> */}
        {tasks.map((task) => (
          <Task key={task.title} title={task.title} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
