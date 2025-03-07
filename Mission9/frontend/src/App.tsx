import React, { useState } from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

// Define an interface for the team structure
interface TeamType {
  school: string;
  name: string;
  state: string;
  city: string;
}


// Welcome Message for the top of the page
function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

// Builds a grid out of the other team cards
function TeamGrid({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 equal-width columns
        gap: '16px', // space between grid items
        padding: '16px',
        width: '100%',
        maxWidth: '1200px', // optional: prevents grid from becoming too wide
        margin: '0 auto', // centers the grid
      }}
    >
      {children}
    </div>
  );
}

// Defines what a team component looks like
function Team({
  school,
  name,
  state,
  city,
}: {
  school: string;
  name: string;
  state: string;
  city: string;
}) {

  // initialize the variable for hovering over the card
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="team-card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: isHovered ? '#D3D3D3' : 'white', // Change background on hover
        transition: 'background-color 0.3s ease', // Smooth transition
        transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Optional: slight scale effect
      }}
      // manipulate based on where the mouse is.
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    {/* The layout of the actual card with the name, mascot, and location */}
      <h2
        style={{
          margin: '0 0 10px 0',
          fontSize: '1.5em',
          color: '#333',
        }}
      >
        {school}
      </h2>
      <div style={{ marginBottom: '8px', color: '#666' }}>
        <h3>
          <strong>Mascot:</strong> {name}
        </h3>
      </div>
      <div style={{ color: '#666' }}>
        <h3>
          <strong>Location:</strong> {city}, {state}
        </h3>
      </div>
    </div>
  );
}


// Mapping and spreading to get each team from the json file to print out
function TeamList({ teams }: { teams: TeamType[] }) {
  return (
    <>
      {teams.map((team) => (
        <Team {...team} />
      ))}
    </>
  );
}


// the actual app function that runs the other components
function App() {
  return (
    <>
      <Welcome />
      <TeamGrid>
        <TeamList teams={teamsData.teams} />
      </TeamGrid>
    </>
  );
}

export default App;
