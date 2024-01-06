import React from "react";
import Weather from "./Weather";
import "./App.css";
import background from "./image/colourful-sunset.png";

export default function App() {
  return (
    <div className="App">
      <div
        className="App-body"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <Weather defaultCity="Cape Town" />
        </div>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/chandr%C3%A9-lesch-07962714a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chandré Lesch
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ChandreLesch/Weather-React-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://voluble-salamander-1f15d2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
