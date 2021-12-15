import "./Works.scss"
import {  useState } from "react"

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            line1: "Education",
            line2: "B.S. in Information Technology, 3.52 GPA",
            line3: "Georgia Southern University, Savannah, GA ",
            line4: "August 2017-July 2021",
            line5: "Activities: Order of the Sword and Shield Honor Society, National Society of Collegiate Scholars",
            img: "./assets/education.png"
        },
        {
          id: "2",
          line1: "Relevant Training",
          line2: "Full Stack Software Developer Course",
          line3: "DevCodeCamp, Milwaukee, WI",
          line4: "July 2021-October 2021",
          line5: "Relevant Technologies: API Design, MySQL, MS SQL Server, Javascript, React.js, Python, Django, C#, ASP.net, HTML, CSS",
          img: "./assets/coder.png"
      },
        {
            id: "3",
            line1: "Most Recent Job",
            line2: "Functional Analyst, Nine Line Apparel",
            line3: "May 2019-July 2021",
            line4: "Relevant Technologies: SQL, C#, SAP BusinessOne, Dell Boomi, Network hardware",
            line5: "Roles: SQL Admin, SAP Admin, Dell Boomi Professional Integration Developer/API Developer",
            img: "./assets/analyst.png"
        },
        {
            id: "4",
            line1: "Previous Job",
            line2: "Senior Explosive Ordnance Disposal Team Leader, United States Army",
            line3: "September 2007-July 2017",
            line4: "Identify, Render Safe, and Dispose of unexploded ordnance, improvised explosive devices, and chemical munitions",
            line5: "Support United States Special Operations Forces, United States Secret Service, and Local Law Enforcement Agencies",
            img: "./assets/army.png"
        },
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="about">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {data.map((d) => (
              <div className="container">
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.img} alt="" />
                      </div>
                      <h2>{d.line1}</h2>
                      <h3><b>{d.line2}</b></h3>
                      <p>{d.line3}</p>
                      <p>{d.line4}</p>
                      <p>{d.line5}</p>
                    </div>
                  </div>
                  <div className="right">
                    <img
                      src="./assets/puzzle.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src="assets/arrow.png"
            className="arrow left"
            alt=""
            onClick={() => handleClick("left")}
          />
          <img
            src="assets/arrow.png"
            className="arrow right"
            alt=""
            onClick={() => handleClick()}
          />
        </div>
      );
    }

export default Works
