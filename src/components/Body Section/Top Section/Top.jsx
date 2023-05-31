import { AiOutlineSearch } from "react-icons/ai";
import "../../../sass/Top.css";
import "react-icons/ai";

const percentage = [
  { id: 1, workTitle:'Complete Works', percent: "40%" },
  { id: 2, workTitle:'Uncomplete Works',percent: "30%" },
  { id: 3, workTitle:'Tasks', percent: "70%" },
  { id: 4, workTitle:'Points', percent: "90%" },
];
const Top = () => {
  return (
    <div className="Top">
      <div className="topDiv flex">
        <div className="titleText">
          <span className="title">Working productivity</span>
          <p>Let`s check your progress</p>
        </div>

        <div className="sectionInput flex">
          <AiOutlineSearch className="icon" />
          <input type="text" placeholder="Search for anything..." />
        </div>
      </div>

      <div className="cardsDiv flex">
        <div className="cards">
          <div className="card yellowCard flex">
            <div className="date">
              <span>Mon</span>
              <h3>18</h3>
            </div>

            <div className="percentage">
              <span className="text">Productive</span>
              <div className="flex">
                <span className="line"></span>
                <span className="pctg">86%</span>
              </div>
            </div>

            <div className="time">
              <div className="text"> Productive Time</div>
              <h2>5h 12m</h2>
            </div>

            <div className="worktime">
              <div className="text"> Time at work</div>
              <h2>5h 45m</h2>
            </div>
          </div>

          <div className="card lightGreenCard flex">
            <div className="date">
              <span>Tue</span>
              <h3>19</h3>
            </div>

            <div className="percentage">
              <span className="text">Productive</span>
              <div className="flex">
                <span className="line"></span>
                <span className="pctg">86%</span>
              </div>
            </div>

            <div className="time">
              <div className="text"> Productive Time</div>
              <h2>5h 12m</h2>
            </div>

            <div className="worktime">
              <div className="text"> Time at work</div>
              <h2>5h 45m</h2>
            </div>
          </div>

          <div className="card darkGreenCard flex">
            <div className="date">
              <span>Wed</span>
              <h3>20</h3>
            </div>

            <div className="percentage">
              <span className="text">Productive</span>
              <div className="flex">
                <span className="line"></span>
                <span className="pctg">86%</span>
              </div>
            </div>

            <div className="time">
              <div className="text"> Productive Time</div>
              <h2>5h 12m</h2>
            </div>

            <div className="worktime">
              <div className="text"> Time at work</div>
              <h2>5h 45m</h2>
            </div>
          </div>
        </div>

        <div className="statsDiv">
          <span className="title">Statistics On October</span>

          <div className="stat">
            {percentage.map((item, i) => (
              <div className="singleStat" key={i}>
                <div className="statInfo flex">
                  <span className="status">{item.workTitle}</span>
                  <span className="status">{item.percent}</span>
                </div>

                <div className="line">
                  {item.id % 2 === 0 ? (
                    <span
                      className="range"
                      style={{
                        width: item.percent,
                        background: "var(--lightGreenColor)",
                      }}
                    ></span>
                  ) : (
                    <span
                      className="range"
                      style={{
                        width: item.percent,
                        background: "var(--darkGreenColor)",
                      }}
                    ></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
