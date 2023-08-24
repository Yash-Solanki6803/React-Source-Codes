import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search">
        <button className="search-btn">
          <AiOutlineSearch />
        </button>
        <input className="search-input" type="text" />
      </div>
    </div>
  );
};

export default Search;
