import React from "react";

export default function Paginado({countryPerPage, allCountries, paginado}){
    const pageNumbers = []

    for(let i=0; i <= Math.ceil(allCountries/countryPerPage);i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className="paginado">
                { pageNumbers && 
                pageNumbers.map(number =>(
                   
                    <button onClick={() => paginado(number)}>{number}</button>
                    
                ))}
            </ul>
        </nav>
    )

}