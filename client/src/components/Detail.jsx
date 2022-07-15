import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";

export default function Detail (props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch, props.match.params.id])
    const infCountry = useSelector((state)=> state.detail)

    return (
        <div>
            <br/>
            <NavBar/>
            {
                infCountry.length>0 ?
                <div>
                    <h1>{infCountry[0].name}</h1>
                    <h2>Codigo: {infCountry[0].id}</h2>
                    <img src={infCountry[0].img} alt="" width='500px' height='700px'/>
                    <h2>Continente: {infCountry[0].continent}</h2>
                    <h2>Capital: {infCountry[0].capital}</h2>
                    <h2>Subregion: {infCountry[0].subregion}</h2>
                    <h2>Area: {infCountry[0].area} Km2</h2>
                    <h2>Poblacion: {infCountry[0].population} habitantes</h2>
                    <h4>Actividades: {infCountry[0].activities.length>0 ? infCountry[0].activities.map(el => el.name + (' ')) : "No tiene Actividades"}</h4>
                </div> : 
                <Loading/>
            }
            <Link to="/home">
                <button>Regresar al home</button>
            </Link>
        </div>
    )
}