import {Routes, Route, Link } from 'react-router-dom'

export default function NavBar() {
    return (
     <div>
        <h1>Welcome to the Puppy Bowl!!</h1>
        <div id="navbar">
          <Link to="/AllPlayers">Meet the Players!</Link>
          <Link to="/NewPlayerForm">Add a player to the game!</Link>
          <Link to="/SinglePlayer">Single Player</Link>
        </div>
    </div>
    );
  }