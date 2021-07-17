import React from 'react';

const Portfolio = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">My Portfolio</h1> 
        <ul className="nav nav-tabs">
                <li> <a href="https://isaacakanbi.github.io/html_week_1/"> Html Page</a> </li>
                <li> <a href="https://isaacakanbi.github.io/code-game/"> Code Game</a> </li>
                <li> <a href="https://isaacakanbi.github.io/daily-planner-04/"> Daily Planner</a> </li>
                <li> <a href="https://isaacakanbi.github.io/Weather_Dashboard/"> Weather Dashboard</a> </li>
                <li> <a href="https://phil-stew.github.io/Sports-Reel/"> Project 1: Sports-reel</a> </li>
                <li> <a href="https://isaacakanbi.github.io/PasswordGenerator-03/"> Password Generator</a> </li>
                <li> <a href="https://isaacakanbi.github.io/professional-readme-generator/"> Professional Readme
                        Generator</a> </li>
        </ul>
      </div>
    </header>
  );
};

export default Portfolio;