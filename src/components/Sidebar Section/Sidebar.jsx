import "../../sass/Sidebar.css";
import "react-icons/ai";
import {
  AiFillAccountBook,
  AiFillAmazonCircle,
  AiFillBoxPlot,
  AiFillCaretUp,
  AiFillCloud,
  AiOutlinePieChart,
} from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="logoDiv flex">
        <img src="./logo.png" alt="logo_Image" />
      </div>

      <div className="menu">
        <ul className="navItem">
          <li className="navList">
            <AiOutlinePieChart className="icon" />
          </li>
          <li className="navList">
            <AiTwotoneLock className="icon" />
          </li>
          <li className="navList">
            <AiFillAccountBook className="icon" />
          </li>
          <li className="navList">
            <AiFillAmazonCircle className="icon" />
          </li>
          <li className="navList">
            <AiFillBoxPlot className="icon" />
          </li>
          <li className="navList">
            <AiFillCaretUp className="icon" />
          </li>
          <li className="navList">
            <AiFillCloud className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
