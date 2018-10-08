import React , { Component } from 'react'
import Media from './media.js'
import './playlist.css'
/*
import Play from '../../icons/components/play.js'
import Pause from '../../icons/components/pause.js'
import Volume from '../../icons/components/volume.js'
import FullScreen from '../../icons/components/fullScreen.js'
*/

function Playlist (props) {
	return (
		<div className='Playlist'>
			{
				props.playlist.map ( item => {
					return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
				})
			}
		</div>
	)
}





/*

function Playlist (props) {

	const { categories } = props.data
	
	return (//despues del return siempre un tag html?
		<div className='Category'>
			{categories.map( item => {
				return (
					<div key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>

						<Play size={25} color='green'/>
						<Pause size={25} color='gray'/>
						<Volume size={25} color='red'/>
						<FullScreen size={25} color='blue'/>

						<div className="Playlist">
						{
							item.playlist.map( item => {
								return (  
									<Media {...item} key={item.id} />    
								)
							})
						}
						</div>
					</div>
				)
			})}
		</div>
	)
}


function Playlist (props) {
	   
	const playlist = props.data.categories[0].playlist

	return (
		<div className='Playlist'>
			<Play size={25} color='green'/>
			<Pause size={25} color='gray'/>
			<Volume size={25} color='red'/>
			<FullScreen size={25} color='blue'/>
			{
				playlist.map((item) => {
					return <Media {...item} key={item.id}/>
				})
			}
		</div>
	)
}

class Playlist extends Component {
	render() {
	   
		const playlist = this.props.data.categories[0].playlist

		return (
		<div className='Playlist'>
			{
				playlist.map((item) => {
					return <Media {...item} key={item.id}/>
				})
			}
		</div>
		)
	}
}

class Playlist extends Component{
	render() {
		const { categories } = this.props.data
		
		return (//despues del return siempre un tag html?
			<div className='Category'>
				{
					categories.map( item => {
						return (
							<div key={item.id}>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<div className="Playlist">
								{
									item.playlist.map( item => {
										return (  
											<Media {...item} key={item.id} />    
										)
									})
								}
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}
*/

export default Playlist