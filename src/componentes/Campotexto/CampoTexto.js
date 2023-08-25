
import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props)=>{
    //console.log("Datos: ", props)
    const placeholderModificado= `${props.placeholder}...`

    const {type="text"} = props

    const manejarCambio =(e)=>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input className="campo-color" placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        ></input>
    </div>
}

export default CampoTexto