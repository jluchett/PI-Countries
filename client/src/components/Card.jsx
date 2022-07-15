import React from "react";
import "../CssStyles/Card.css"
import { Link } from "react-router-dom"


export default function Card({name, img, id, continent}){
    return(
        <div className="cardCountry">
            <Link to={'/country/' + id}>
                <div>
                    <div>{name.toUpperCase()}</div>
                    <img src={img} alt="img not found" width="92%" height="150px" />
                    <span>{continent}</span>
                </div>
            </Link>
        </div>
    )
};
