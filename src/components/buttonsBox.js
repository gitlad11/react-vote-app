import React, {useState,useEffect} from 'react'
import './styles.css'
import Graphics from './graphics'

function VoteButtons(props){
	const [items , setItems] = useState([1,2,3])
	//const Clicker = () => {
		//if(vote == false){
			//setVote(true)
		//} else {
			//setVote(false)
		//}
		//}
	
	//const listitems = items.map((item) => {
		//return (<div className='Vote'><h6>{props.item}</h6><button onClick={Clicker} className='btn Vote-btn'>{vote == true? 'готово' : 'голос'}</button></div>)
	//})
	return(
		<div className='VoteButtons'>
			<div className='Vote'><h6>Google</h6>
				<button onClick={props.firstState} className={props.vote ==true? 'Vote-btn active' : 'Vote-btn'}>
					{props.vote == true ? 'готово' : 'голос'}
				</button>
			</div>
			<div className='Vote'><h6>Yandex</h6>
				<button onClick={props.secondState} className = {props.vote == true? 'Vote-btn active': 'Vote-btn'}>
					{props.vote == true ? 'готово' : 'голос'}
				</button>
			</div>
			<div className='Vote'><h6>.Onion</h6>
				<button onClick={props.thirdState} className= {props.vote == true? 'Vote-btn active': 'Vote-btn'}>
					{props.vote == true ? 'готово' : 'голос'}
				</button>
			</div>
		</div>
		)
}
export default VoteButtons;