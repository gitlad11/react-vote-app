import React from 'react'
import './styles.css'

import Graphics from './graphics'

class GraphicsBox extends React.Component{
	render(){
		return (
			<div className='GraphicsBox'>
				<Graphics/>
			</div>	
		)
	}
}
export default GraphicsBox;
