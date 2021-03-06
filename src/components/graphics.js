import React, { useEffect } from 'react'
import './styles.css'


function Graphics(props){
	
	const numbers = [10,9,8,7,6,5,4,3,2,1]

	const number = numbers.map((number) =>{
		return (
			<p key={number.toString()}>{number}</p>
			)
	},)
	return (
		<div className='Graphics'>
		<div className='Graphics-numbers'>{number}</div>

			<div className='column-container'>
				<p className='column-text'>Google</p>
				<div style={{ height: props.first }} className='first column'></div>
			</div>
			<div className='column-container'>
				<p className='column-text'>Yandex</p>
			<div style={{ height : props.second }} className='second column'></div>
			</div>
			<div className='column-container'>
				<p className='column-text'>.Onion</p>
			<div style={{ height : props.third }} className='third column'></div>
			</div>
		</div>
	)
}
export default Graphics