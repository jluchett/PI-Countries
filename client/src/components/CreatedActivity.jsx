import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";


export default function CreateActivity(){
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.countries);
    const [input, setInput] = useState({
        name: "",
        difficulty: 1,
        duration: 10,
        season: "",
        country: []
    })
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    return(
        <div>
            <Link to='/home'><button>Volver a Home</button></Link>
            <h1>Crear Actividad</h1>
            <form action="">
                    
            </form>
        </div>
    )
}