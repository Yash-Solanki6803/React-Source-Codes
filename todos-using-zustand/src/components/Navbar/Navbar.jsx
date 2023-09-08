import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { AiOutlinePlus, AiFillHome } from "react-icons/ai";
import { BiSolidNetworkChart } from "react-icons/bi";
import { TbTruckLoading } from "react-icons/tb";
import { MdOutlineDoneAll } from "react-icons/md";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div className={`navbar ${menuClicked && "active"}`}>
      <button
        className={`btn ${menuClicked && "clicked"}`}
        onClick={() => {
          setMenuClicked(!menuClicked);
        }}
      >
        <AiOutlinePlus />
      </button>
      <Link className="navbar-icon" to="/">
        <AiFillHome style={{ color: "var(--HOME)" }} />
      </Link>
      <Link className="navbar-icon" to="/planned">
        <BiSolidNetworkChart style={{ color: "var(--PLANNED)" }} />
      </Link>
      <Link className="navbar-icon" to="/ongoing">
        <TbTruckLoading style={{ color: "var(--ONGOING)" }} />
      </Link>
      <Link className="navbar-icon" to="done">
        <MdOutlineDoneAll style={{ color: "var(--DONE)" }} />
      </Link>
      {/* {menuClicked && (
        <>
          
        </>
      )} */}
    </div>
  );
};

export default Navbar;
