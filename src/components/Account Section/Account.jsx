import { BsThreeDots } from "react-icons/bs";
import "../../sass/Account.css";
import { LuEdit } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
const Account = () => {
  return (
    <div className="Account">
      <div className="icons flex">
        <span>
          <BiChevronRight className="icon" />
        </span>
        <span>
          <BsThreeDots className="icon" />
        </span>
      </div>

      <div className="accountDetails">
        <div className="userInfo flex">
          <span className="userAvatar">
            <AiOutlineUser className="icon" />
          </span>
          <span className="name">John Wick</span>
          <span className="position">London, England</span>
          <button className="btn flex">
            <LuEdit className="icon" />
            Edit Detail
          </button>
        </div>

        <div className="workingHours">
          <div className="workStart">
            <p>Work starts</p>
            <p >9:00 am</p>
          </div>
          <div className="workEnd">
            <p>Work starts</p>
            <p>9:00 am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
