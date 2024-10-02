import "./NavBar.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { ImSpinner3 } from "react-icons/im";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <div className="icons-group">
              <span className="icon">
                <RiTwitterXLine />
              </span>
              <span className="icon">
                <FaInstagram />
              </span>
              <span className="icon">
                <FaLinkedinIn />
              </span>
              <span className="icon">
                <IoBasketballOutline />
              </span>
            </div>
          </li>
          <li className="nav-item">
            <div className="spinner-group">
              <span className="spinner-img">
                <ImSpinner3 style={{ color: "#D3D4D8" }} />
              </span>
              <span className="spinner-text">Comet</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="lines-group">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
