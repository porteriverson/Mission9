
import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';


// Define an interface for the team structure
interface TeamType {
  school: string;
  name: string;
  state: string;
}

function Welcome() {
  return(
    <h1>College Basketball Teams</h1>
  )
}

function Team({school, name, state}: {school: string, name: string; state:string}) {
  
  return (
    <>
    <h2>{school}</h2>
    <h3>Mascot: {name}</h3>
    <h3>State: {state}</h3>
    </>
  );
}

function TeamList({teams}: {teams: TeamType[]}) {

  return (
    <>
        {teams.map((team) => (
          <Team {...team}/>
        ))}
        ;
    </>
  );
}


function App() {
  return (
    <>
      <Welcome />
      <TeamList teams={teamsData.teams} />
    </>
  );
}

export default App
