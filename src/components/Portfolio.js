import React from 'react';

const PortfolioEntry = ({ href, name , image }) => {
  return <>
    <div 
      style={{
        backgroundImage: `url(${image})`
        }}
    >
      <a href={href}>{name}</a>
    </div>
  </>;
}

const entries = [
  {
    name: "Html Page",
    href: "https://isaacakanbi.github.io/html_week_1/",
    image: require("../20-react-homework-demo-01.gif")
  },
  {
    name: "Sports Reel App",
    href: "https://phil-stew.github.io/Sports-Reel/",
    image: require("../sport-reels.PNG")
  },
  {
    name: "Toddler-Town App",
    href: "https://toddlertown-cu.herokuapp.com/",
    image: require("../toddler-town.JPG")
  },
  {
    name: "Weather Dashboard App",
    href: "https://isaacakanbi.github.io/Weather_Dashboard/",
    image: require("../weather.PNG")
  },
  {
    name: "Note Taker App",
    href: "https://isaacakanbi-note.herokuapp.com/",
    image: require("../note-taker.JPG")
  },
  {
    name: "Progressive Budget App",
    href: "https://nameless-spire-14609.herokuapp.com/",
    image: require("../offline-budget.JPG")
  }  
]

const Portfolio = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div  className="container flex-row justify-space-between-lg justify-center align-center py-3">
        <h1 className="m-0">My Portfolio</h1>
          {entries.map(entry => <PortfolioEntry href={entry.href} name={entry.name} image={entry.image} className="py-3"/>)}  
      </div>
    </header>
  );
};

export default Portfolio;