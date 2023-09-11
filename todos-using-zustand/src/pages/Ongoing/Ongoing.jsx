// import { InputModal, Search, Task } from "../../components";
import "../../App.css";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import CombinedTask from "../../components/CombinedTask/CombinedTask";

const Ongoing = () => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.type === 2),
    shallow
  );
  return <CombinedTask tasks={tasks} />;
};

export default Ongoing;
