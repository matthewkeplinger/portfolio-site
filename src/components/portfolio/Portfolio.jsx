import "./Portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState, useEffect } from "react";
import { ListItem } from "@material-ui/core";


function Portfolio() {
    const [selected, setSelected] = useState("react");

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
                <div className = "item">
                    <img src = 'assets/ecommerce.png' alt = ''/>
                    <h3>React Ecommerce</h3>
                </div>
                <div className = "item">
                    <img src = 'assets/weather.jpg' alt = ''/>
                    <h3>Weather App</h3>
                </div>
                <div className = "item">
                    <img src = 'assets/wildfire.png' alt = ''/>
                    <h3>Wildfire Tracker</h3>
                </div>
                <div className = "item">
                    <img src = 'assets/recipe.png' alt = ''/>
                    <h3>Recipe Search</h3>
                </div>
                <div className = "item">
                    <img src = 'assets/music.jpg' alt = ''/>
                    <h3>Music Library</h3>
                </div>
                <div className = "item">
                    <img src = 'assets/capstone.png' alt = ''/>
                    <h3>My Garage Assistant</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
