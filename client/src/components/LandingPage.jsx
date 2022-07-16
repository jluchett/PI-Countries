import React from "react";
import {Link} from 'react-router-dom';
import '../CssStyles/LandingPage.css'


export default function LandingPage(){
    return(
        <div className="principal">
            <div className="contenedor">
                <h1>WELCOME TO COUNTRIES WEB</h1>
                <br/>
                <Link to ='/home'>
                    <button className="botonE">ENTER</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )

}