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
        <ul className="d-flex alig-item-center justify-content-between">
          <li className="nav-item ">
            <div>
              <span className="ms-2">
                <RiTwitterXLine />
              </span>
              <span className="ms-2">
                <FaInstagram />
              </span>
              <span className="ms-2">
                <FaLinkedinIn />
              </span>
              <span className="ms-2">
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
