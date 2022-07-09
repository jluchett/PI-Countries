import React from "react";

export default function Card({name, img, id, continent}){
    return(
        <div>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <img src={img} alt="img not found" width="200px" height="250px" />
            <h5>{continent}</h5>
        </div>
    )
};
