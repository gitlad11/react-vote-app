import React from 'react';
import './App.css';
import GraphicsBox from './components/graphicsBox'
import VoteButtons from './components/buttonsBox'

function App() {
  return (
    <div className="App">
     <GraphicsBox/>
     <VoteButtons/>
    </div>
  );
}

export default App;
