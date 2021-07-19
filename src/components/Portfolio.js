import React from 'react';

const PortfolioEntry = ({ href, name , github, image }) => {
  return <>
    <div
      style={{
        backgroundImage: `url(${image})`
        }}
    >
     <ul>
       <li> <a href={href}>{name}</a> </li>

      <li><a href={github}> Git Repository</a> </li>
      </ul>
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
    <header className="align-center">
      <h1 className="card-columns">My Portfolio</h1>
      <card  style={{height: '40rem', width:'30rem'}} className="card-colums row w-50">
        
          {entries.map(entry => <PortfolioEntry href={entry.href} name={entry.name} image={entry.image} github={entry.github}/>)}  
      </card>
    </header>
  );
};

export default Portfolio;