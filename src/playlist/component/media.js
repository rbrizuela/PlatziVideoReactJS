import React , { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'
 
class Media extends PureComponent {
	//con el constructor mas el bind del evento funcionaria para 
	//que el contexto sea this pero....
	//si a la fx handleClick la convierto en una arrow function =>
	//esto estaria solucionado porque siempre su contexto es this
	/*
	//ES6: se utiliza constructor , super , etc
	constructor (props) {
		super (props)
		this.state = {
			author: props.author
		}
	}
   */
	//ES7: solo se declara el estado
	/*
	state = {
		author: 'Roberto'
	}
	//se utiliza setState para cambiar el valor de la propiedad
	*/
	
	handleClick = (event) => {
		this.props.openModal(this.props)
	}

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,//valido que sean string
	title: PropTypes.string.isRequired,//valido que sean string y obligatorio que se informe
	author: PropTypes.string,//valido que sean string
	type: PropTypes.oneOf(['video','audio']) //valido que sean 'video' o 'audio'
}

export default Media