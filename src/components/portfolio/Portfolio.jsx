import "./Portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState, useEffect } from "react";
import { reactPortfolio, pythonPortfolio, aspPortfolio, javaPortfolio } from "../../data.js"


function Portfolio() {
    const [selected, setSelected] = useState("react");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "react",
            title: "React/Javascript",
        },
        {
            id:"python",
            title: "Python/Django",
        },
        {
            id:"asp",
            title: "C# and ASP.net",
        },
        {
            id:"java",
            title: "Java"
        }
    ]

    useEffect(()=>{
        switch(selected){
            case "react":
                setData(reactPortfolio);
                break;
            case "python":
                setData(pythonPortfolio);
                break;
            case "asp":
                setData(aspPortfolio);
                break;
            case "java":
                setData(javaPortfolio);
                break;
            default:
                setData(reactPortfolio);
        }
    }, [selected]);
    
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title = {item.title} 
                    active = {selected === item.id} 
                    setSelected = {setSelected}
                    id = {item.id} />
                ))}

            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className = "item">
                            <a href = {d.url} target="_blank" rel="noreferrer">
                                <img src = {d.img} alt = ''/>
                            </a>
                            <h3>{d.title}</h3>
                                
                            

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
