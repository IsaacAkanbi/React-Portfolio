import React from 'react';
import '../style/home.css';
const PortfolioEntry = ({ href, name , github, image }) => {
  return <>
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`
        }}
    >
      <div>
     <ul className="list-group">
       <li > <a href={href}>{name}</a> </li>

      <li ><a href={github}> Git Repository</a> </li>
      </ul>
      </div> 
    </div>
  </>;
}

const entries = [
  {
    name: "Code Game",
    href: "https://isaacakanbi.github.io/code-game/",
    image: require("../code-game.gif"),
    github: "https://github.com/IsaacAkanbi" 
  },
  {
    name: "Sports Reel App",
    href: "https://isaacakanbi.github.io/Sports-Reel/",
    image: require("../sports-reel.jpg"),
    github: "https://github.com/IsaacAkanbi/Sports-Reel"
  },
  {
    name: "Toddler-Town App",
    href: "https://toddlertown-cu.herokuapp.com/",
    image: require("../toddler-town.gif"),
    github: "https://github.com/IsaacAkanbi/Toddler-Town"
  },
  {
    name: "Weather Dashboard App",
    href: "https://isaacakanbi.github.io/Weather_Dashboard/",
    image: require("../weather-app.gif"),
    github: "https://github.com/IsaacAkanbi/Weather_Dashboard"
  },
  {
    name: "Work Day Scheduler App",
    href: "https://isaacakanbi.github.io/daily-planner-04/",
    image: require("../work-day-scheduler.gif"),
    github: "https://github.com/IsaacAkanbi/daily-planner-04"
  },
  {
    name: "Note Taker App",
    href: "https://isaacakanbi-note.herokuapp.com/",
    image: require("../note-taker.JPG"),
    github: "https://github.com/IsaacAkanbi/Note-Taker"
  },
  {
    name: "Progressive Budget App",
    href: "https://nameless-spire-14609.herokuapp.com/",
    image: require("../offline-budget.gif"),
    github: "https://github.com/IsaacAkanbi/Offline-Budget-Tracker"
  }  
]

const Portfolio = () => {
  return (
    <div className="card" style={{width:"sm-12"}}>
      <div class="card-body">
        <h5>My Portfolio</h5>

        <div className="card-deck" >
          {entries.map((entry) => (
            <PortfolioEntry
              href={entry.href}
              name={entry.name}
              image={entry.image}
              github={entry.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// "w-100 col-12 card-deck py-4  d-flex" style={{height: '40rem', width:'30rem'}}
export default Portfolio;