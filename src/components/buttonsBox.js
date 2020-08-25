import React, {useState,useContext} from 'react'
import './styles.css'

function VoteButtons(props){
	const [vote, setVote] = useState(false)
	const [items , setItems] = useState([1,2,3])
	const Clicker = () => {
		if(vote == false){
			setVote(true)
		} else {
			setVote(false)
		}
	}
	//const listitems = items.map((item) => {
		//return (<div className='Vote'><h6>{props.item}</h6><button onClick={Clicker} className='btn Vote-btn'>{vote == true? 'готово' : 'голос'}</button></div>)
	//})
	return(
		<div className='VoteButtons'>
			<div className='Vote'><h6>Google</h6>
				<button onClick={Clicker} className={vote ==true? 'Vote-btn active' : 'Vote-btn'}>
					{vote == true ? 'готово' : 'голос'}
				</button>
			</div>
			<div className='Vote'><h6>Yandex</h6>
				<button onClick={Clicker} className = {vote == true? 'Vote-btn active': 'Vote-btn'}>
					{vote == true ? 'готово' : 'голос'}
				</button>
			</div>
			<div className='Vote'><h6>.Onion</h6>
				<button onClick={Clicker} className= { vote == true? 'Vote-btn active': 'Vote-btn'}>
					{vote == true ? 'готово' : 'голос'}
				</button>
			</div>
		</div>
		)
}
export default VoteButtons;