// import { useState } from "react";
import "../../App.css";
// import { InputModal, Search, Task } from "../../components";
import { useStore } from "../../store";
import CombinedTask from "../../components/CombinedTask/CombinedTask";

const HomePage = () => {
  const tasks = useStore((store) => store.tasks);

  return <CombinedTask tasks={tasks} />;
};

export default HomePage;
