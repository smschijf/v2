import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    const icon = document.querySelector(".menuToggle");

    if(icon.classList.contains("menuAnimation")) {
      icon.classList.remove("menuAnimation");
    } else {
      icon.classList.add("menuAnimation");
    }
  };

  return (
    <nav role="navigation">
      <div
        className="menuToggle"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
      </div>
      <ul className={`menu ${open ? "active" : "inactive"}`}>
        <li>
          <a
            href="#projects"
            onClick={() => {
              handleMenuClick();
              setOpen(!open);
            }}
          >
            Projecten
          </a>
        </li>
        <li>
          <a
            href="#aboutMe"
            onClick={() => {
              handleMenuClick();
              setOpen(!open);
            }}
          >
            Over Mij
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              handleMenuClick();
              setOpen(!open);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
