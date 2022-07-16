import React from "react";
import "../CssStyles/Card.css"
import { Link } from "react-router-dom"


export default function Card({name, img, id, continent}){
    return(
        <div className="countryCard">
            <Link className="countryCardLink" to={'/country/' + id}>
                <div className="countryCardDetail">
                    <img className="flag" src={img} alt="img not found"/>
                    <div id="nameCountry">{name.toUpperCase()}</div>
                    <div className="containerCont">
                        <span id="nameContinent">{continent}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
};