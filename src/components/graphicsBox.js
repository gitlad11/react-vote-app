import React from 'react'
import './styles.css'

import Graphics from './graphics'

class GraphicsBox extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='GraphicsBox'>
				<Graphics first = {this.props.first} second = {this.props.second} third = {this.props.third}/>
			</div>	
		)
	}
}
export default GraphicsBox;
