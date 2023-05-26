import ProjectCard from "./ProjectCard.js";

import hr from "../assets/line.svg";

export default function Projects() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects & Works</h1>
      <p className="font-light text-gray-400">
        Here are some of my projects and works
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          name="Crypto-App"
          issuedLink="https://crypto-app-morrcarry.vercel.app/"
          GitLink="https://github.com/morrcarry/Crypto-App"
          desc="A web application that provides real-time information and data visualization for cryptocurrency.
                  It allows users to track and monitor cryptocurrency prices, view historical trends, and analyze market data.
                  Tech used: React.js, Chart.js, CoinGecko API, Chakra UI."
        />

        <ProjectCard
          name="Mapty"
          issuedLink="https://mapty-three.vercel.app/"
          GitLink="https://github.com/morrcarry/Mapty"
          desc="A web application for tracking and logging workout activities on an interactive map.
It utilizes the Leaflet.js library to render interactive maps.
utilizes HTML5, CSS3, JavaScript, Leaflet.js, LocalStorage, ES6 Modules."
        />
        <ProjectCard
          name="Keeper-App"
          issuedLink="https://keepers-app-green.vercel.app/"
          GitLink="https://github.com/morrcarry/Keepers-App"
          desc="Developed the clone of Google Keep using Hooks and States in React.js.
Created separate components for Notes, Input Area , Header and Footer.
Added the features to dynamically Add and Delete Notes by passing required parameters to each of the components."
        />
        <ProjectCard
          name="Pig-Game"
          issuedLink="https://pig-game-zeta-eight.vercel.app/"
          GitLink="https://github.com/morrcarry/Pig-Game"
          desc="The Pig Game is a web-based dice game implemented using HTML, CSS, 
          and JavaScript where players take turns rolling the dice to accumulate points and reach a target score.
          The Pig Game is implemented using HTML, CSS, and JavaScript technologies."
        />
      </div>
      <center>
        <img src={hr} alt="hr" />
      </center>
    </div>
  );
}
