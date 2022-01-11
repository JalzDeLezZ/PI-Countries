import React, { useEffect} from "react";
import {Link} from 'react-router-dom';
import {getDetails} from '../actions/index';
import { useDispatch, useSelector } from "react-redux";

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch ()
    useEffect(()=> {
        dispatch(getDetails(props.match.params.id))
    },[dispatch])

    const myCountry= useSelector ((state) => state.detail )


    return (
        <div>

        { myCountry.length > 0?
        <div>
            <h1> {myCountry[0].id}</h1>
            <h1> {myCountry[0].name}</h1>
            <img src ={myCountry[0].image} alt='no hay imagen' />
            <h3> {myCountry[0].continent}</h3>
            <h3> {myCountry[0].capital}</h3>
            <h3> {myCountry[0].subregion}</h3>
            <h3> {(myCountry[0].area)/1000000} millones de KM²</h3>
            <h3> {myCountry[0].population}</h3>
            {myCountry[0].activities.length?myCountry[0].activities.map(el=>(
                <div>      
                <h4>Actividad: {el.name}</h4>
                <h5> Dificultad: {el.difficulty}</h5>
                <h5>Duracion: {el.duration}</h5>
                <h5>Temporada: {el.season}</h5>
            
                </div>
               
            ))
            
            
            : (<h4>No hay Actividades</h4>)}
        </div>  : <p>Loading...</p>  

    
        }

        <Link to='/home'>
            <button>Volver</button>
        </Link>




        </div>

    )


}