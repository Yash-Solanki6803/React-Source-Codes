import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { AiOutlinePlus, AiFillHome } from "react-icons/ai";
import { BiSolidNetworkChart } from "react-icons/bi";
import { TbTruckLoading } from "react-icons/tb";
import { MdOutlineDoneAll } from "react-icons/md";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  tippy("#Home", {
    content: "Home",
    //default
    placement: "right",
  });
  tippy("#Planned", {
    content: "Planned",
    placement: "right",
  });
  tippy("#Ongoing", {
    content: "Ongoing",
    placement: "right",
  });
  tippy("#Done", {
    content: "Done",
    placement: "right",
  });
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
      <Link id="Home" className="navbar-icon" to="/">
        <AiFillHome style={{ color: "var(--HOME)" }} />
      </Link>
      <Link id="Planned" className="navbar-icon" to="/planned">
        <BiSolidNetworkChart style={{ color: "var(--PLANNED)" }} />
      </Link>
      <Link id="Ongoing" className="navbar-icon" to="/ongoing">
        <TbTruckLoading style={{ color: "var(--ONGOING)" }} />
      </Link>
      <Link id="Done" className="navbar-icon" to="done">
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
