// import { InputModal, Search, Task } from "../../components";
import "../../App.css";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import CombinedTask from "../../components/CombinedTask/CombinedTask";

const Planned = () => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.type === 1),
    shallow
  );
  return <CombinedTask tasks={tasks} />;
};

export default Planned;
