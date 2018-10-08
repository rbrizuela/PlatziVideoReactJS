import React from 'react'       //sirve para crear los componentes
import { render } from 'react-dom'    //sirve para ubicarlos en el DOM (renderizarlos)
import Home from '../pages/containers/home.js'
//import Playlist from '../playlist/component/playlist.js'  //los componentes siempre en MAYUS
import data from '../api.json'


const homeContainer = document.getElementById('home-container')
//const holaMundo = <h1>Hola Mundo MUNDIAL!!!!!!!!!</h1> //JSX

//ReactDOM.render(que voy a renderizar, donde lo hare)
//ReactDOM.render(holaMundo, app)
render(<Home data={data} />, homeContainer)
