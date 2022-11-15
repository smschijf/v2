import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav role="navigation">
      <div className="menuToggle" onClick={()=>{setOpen(!open)}}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`menu ${open? 'active' : 'inactive'}`}>
        <li>
          <a href="#projects" onClick={()=>{setOpen(!open)}}>Projecten</a>
        </li>
        <li>
          <a href="#aboutMe" onClick={()=>{setOpen(!open)}}>Over Mij</a>
        </li>
        <li>
          <a href="#contact" onClick={()=>{setOpen(!open)}}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
