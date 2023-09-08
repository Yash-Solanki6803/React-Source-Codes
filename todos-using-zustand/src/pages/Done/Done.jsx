import { Search, Task } from "../../components";
import "../../App.css";

const Done = () => {
  return (
    <div className="container">
      <div className="row">
        <Search />
      </div>
      <div className="page">
        <Task type={3} />
      </div>
    </div>
  );
};

export default Done;
