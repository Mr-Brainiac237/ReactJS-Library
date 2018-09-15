import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const songs = [
  {
    title: "South Park",
    id: "south-park",
    author: "Kyle",
    url: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
  },
  {
    title: "Thunder Cats",
    id: "thundercats",
    author: "Moonra",
    url:
      "https://assets.breatheco.de/apis/sound/files/videogame/fx_zelda_recorder.wav"
  },
  {
    title: "X-Men",
    id: "x-men",
    author: "Profesor",
    url: "https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
  }
];

function App() {
  return (
    <div className="player">
      <section className="content">
        <div className="tracks">
          <div className="track">
            <div className="track__number">1</div>
            <div className="track__title featured">
              <span className="title">Song 1</span>
              <span className="feature">By boby</span>
            </div>
            <div className="track__length">12 min</div>
          </div>
        </div>
      </section>
      <section className="current-track">
        <div className="current-track__actions">
          <a className="skipbackward">
            <i className="fas fa-caret-square-left" />
          </a>
          <a>
            <i className="fas fa-play" />
          </a>
          <a>
            <i className="fas fa-pause-circle" />
          </a>
          <a className="skipforward">
            <i className="fas fa-caret-square-right" />
          </a>
        </div>
      </section>
      <audio controls />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
