import React , {useState }from 'react';
import './App.css';
import GraphicsBox from './components/graphicsBox'
import VoteButtons from './components/buttonsBox'

function App() {

  const [first, setFirst] = useState(10)
  const [second , setSecond] = useState(10)
  const [third, setThird] = useState(10)
  const [vote, setVote] = useState({
    voted : false,
    choice : ''
  })

  const firstState = () =>{
    if(vote.voted === false)
    setFirst(first + 10)
    setVote({
      voted : true,
      choice : 'first'

    })
  }
  const secondState = () =>{
    if(vote.voted === false)
    setSecond(second + 10)
    setVote({
      voted : true,
      choice : 'second'

    })
  }
  const thirdState = () =>{
    if(vote.voted === false)
    setThird(third + 10)
    setVote({
      voted : true,
      choice : 'third'
    
    })
  }

  return (
    <div className="App">
     <GraphicsBox first ={first}  second = {second} third = {third}/>
     <VoteButtons vote = {vote.voted} firstState = {firstState} secondState={secondState} thirdState={thirdState}/>
    </div>
  );
}

export default App;
