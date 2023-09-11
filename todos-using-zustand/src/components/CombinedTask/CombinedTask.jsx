import { useState } from "react";
import "./CombinedTask.css";
import "../../App.css";
// import Search from "../Search/Search";
import InputModal from "../InputModal/InputModal";
import Task from "../Task/Task";
import { AiOutlineSearch } from "react-icons/ai";
import { PropTypes } from "prop-types";

const CombinedTask = ({ tasks }) => {
  console.log(tasks);
  const [search, setSearch] = useState("");
  const filteredTasks = tasks.filter((task) => {
    return search.toLowerCase() === ""
      ? task
      : task.title.toLowerCase().includes(search);
  });
  console.log(`filteredTasks`, filteredTasks);
  // console.log(search);
  return (
    <div className="container">
      <div className="row">
        <div className="search-wrapper">
          <div className="search">
            <button className="search-btn">
              <AiOutlineSearch />
            </button>
            <input
              className="search-input"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <InputModal />
      </div>
      <div className="page">
        {filteredTasks.map((task) => (
          <Task key={task.title} title={task.title} />
        ))}
      </div>
    </div>
  );
};

CombinedTask.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.number.isRequired,
    })
  ),
};

export default CombinedTask;
