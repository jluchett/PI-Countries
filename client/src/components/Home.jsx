import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, filterCountryByContinent, orderByName } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home (){
    const dispatch = useDispatch()
    const allCountries = useSelector ((state) => state.countries)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countryPerPage, setCountryPerPage] = useState(6)
    const indexLastCountry = currentPage * countryPerPage
    const indexFirstCountry = indexLastCountry - countryPerPage
    const currentCountry = allCountries.slice(indexFirstCountry,indexLastCountry)

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }


    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    function handledClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    function hanledSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    
    function handleFilterContin(e){
        dispatch(filterCountryByContinent(e.target.value))
        setCurrentPage(1)
    }

    return(
        <div>
            <Link to='/activity'>Crear Activity</Link>
            <h1>PAISES DEL MUNDO</h1>
            <button onClick={e => {handledClick(e)}}>
                Cargar paises nuevamente
            </button>
            <div>
                <select onChange={e => hanledSort(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange={e => handleFilterContin(e)}>
                    <option value='All'>Todos</option>
                    <option value='Africa'>Africa</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                </select>
                <Paginado 
                countryPerPage={countryPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
                />
                <SearchBar/>
                {currentCountry?.map((c)=>{
                    return(
                        <fragment>
                            <Link to={'/home/' + c.id}>
                                <Card name={c.name} img={c.img} id={c.id} continent={c.continent} key={c.id}/>
                            </Link>
                        </fragment>
                    )
                })
                }
            </div>
        </div>
    )

}