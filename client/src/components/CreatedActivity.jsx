import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../actions";
import NavBar from "./NavBar";
import "../CssStyles/Activity.css"

function validate(input){
    let errores = {}
    if (!input.name){
        errores.name = 'Se requiere un nombre'
    }else if (input.difficulty < 1 || input.difficulty > 5){
        errores.difficulty = 'Dificultad solo puede ser de 1 a 5'
    }else if (input.duration < 10 || input.duration > 120){
        errores.duration = 'Duracion solo puede ir de 10 a 120 minutos'
    }else if (!input.season){
        errores.season = 'Escoja una temporada'
    }
    return errores;
}

export default function CreateActivity(){
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.copyCountries);
    const [errores,setErrores] = useState({});

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrores(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleCheck(e){
        if (e.target.checked){
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    function handleSelect(e){
        setInput({
            ...input,
            country: [...input.country, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(input))
        alert("Actividad creada!!")
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            country: []
        })
    }

    function handleDelete(el){
        setInput({
            ...input,
            country: input.country.filter(p => p !== el)

        })
    }

    return(
        <div className="activity">
            <div>
            <br/>
                <NavBar/>
                <br/>
                <div className="container-all">
                <h1 id="titulo">New Activity</h1>
                    <form className="form-container" onSubmit={(e)=> handleSubmit(e)}>
                        <div className="divs">
                            <label className="nombres">Nombre: </label>
                            <input className="input-marco"type="text" name="name" value={input.name} onChange={(e)=>handleChange(e)}/>
                            {errores.name && (<p className="error">{errores.name}</p>)}
                        </div>
                        <div className="divs">
                            <label className="nombres">Difficultad(de 1 a 5): </label>
                            <input className="input-number" type="number" name="difficulty" value={input.difficulty} min='1' max='5' onChange={(e)=>handleChange(e)}/>
                            {errores.difficulty && (<p className="error">{errores.difficulty}</p>)}
                        </div>
                        <div className="divs">
                            <label className="nombres">Duracion(minutos):</label>
                            <input className="input-number" type="number" name="duration" value={input.duration} min='10' max='120' onChange={handleChange}/>
                            {errores.duration && (<p className="error">{errores.duration}</p>)}
                        </div>
                        <div className="divs">
                            <label className="nombres">Temporada: </label>
                            <label className="checks"><input type="checkbox" name="Verano" value="Verano" onChange={(e)=>handleCheck(e)}/>Verano </label>
                            <label className="checks"><input type="checkbox" name="Otoño" value="Otoño" onChange={(e)=>handleCheck(e)}/>Otoño </label>
                            <label className="checks"><input type="checkbox" name="Invierno" value="Invierno" onChange={(e)=>handleCheck(e)}/>Invierno </label>
                            <label className="checks"><input type="checkbox" name="Primavera" value="Primavera" onChange={(e)=>handleCheck(e)}/>Primavera </label>
                            {errores.season && (<p className="error">{errores.season}</p>)}
                        </div>
                        <div >
                        <label className="nombres">Select Country:</label>
                        <select onChange={(e)=>handleSelect(e)}>
                            {countries.map((el)=>(
                                <option value={el.name}>{el.name}</option>
                                ))
                            }  
                        </select>
                        </div>
                        <button className="botonCrear" type="submit"> Save Activity </button>
                    </form>
                </div>
                <div className="contenCountry">
                    {input.country.map(el => 
                        <div>
                            <label className="checks">{el}</label>
                            <button className="botonX" onClick={()=> handleDelete(el)}>X</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}