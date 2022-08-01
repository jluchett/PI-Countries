import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
import "../CssStyles/Detail.css"

export default function Detail (props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch, props.match.params.id])
    const infCountry = useSelector((state)=> state.detail)

    return (
        <div className="fondo">
            <div>
                <br/>
                <NavBar/>
                <div>
                {infCountry.length>0 ?
                    <div className="containerD1">
                        <div>
                            <img className="flag" src={infCountry[0].img} alt="" width='200px' height='150px'/>
                        </div>
                        <div className="containerCharact">
                            <h1>{infCountry[0].name}</h1>
                            <h2>Codigo: {infCountry[0].id}</h2>
                            <h2>Continente: {infCountry[0].continent}</h2>
                            <h2>Capital: {infCountry[0].capital}</h2>
                            <h2>Subregion: {infCountry[0].subregion}</h2>
                            <h2>Area: {infCountry[0].area} Km2</h2>
                            <h2>Poblacion: {infCountry[0].population} habitantes</h2>
                        </div>
                        <div className="containerCharact">
                        <h4>Actividades: </h4>
                            {infCountry[0].activities.length>0 ? infCountry[0].activities.map((el) =>{return(
                                <div>
                                    <h2>{el.name}</h2>
                                    <h4>{el.difficulty}</h4>
                                    <h4>{el.duration}</h4>
                                    <h4>{el.season}</h4>
                                </div>
                                )} ) : "No tiene Actividades"}
                        </div>
                    </div> : 
                    <Loading/>
                }
                </div>
            </div>
        </div>
    )
}