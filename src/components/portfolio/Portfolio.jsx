import "./Portfolio.scss"

function Portfolio() {
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className = "active">React/Javascript</li>
                <li>Python/Django</li>
                <li>Java</li>
                <li>C# and ASP.net</li>
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
