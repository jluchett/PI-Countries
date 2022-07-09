import React from "react";
import {Link} from 'react-router-dom';
//https://i.pinimg.com/originals/6d/33/85/6d3385a5632c025f40c647b555ee06bf.png
export default function LandingPage(){
    return(
        <div>
            <h1>Bienvenidos a la pagina de Paises del Mundo</h1>
            <Link to ='/home'>
                <button>Visitar</button>
            </Link>
        </div>
    )

}