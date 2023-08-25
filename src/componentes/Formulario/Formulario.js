import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../Campotexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props)=>{

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo]= useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor]= useState("")

    //nos ahorramos de escribir props
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e)=> {
        e.preventDefault()
        console.log("Manejar envio")
        let datosAEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="nombre" 
                placeholder="Ingresa tu nombre" 
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
                />
            <CampoTexto  
                titulo="puesto" 
                placeholder="Ingresa tu puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <CampoTexto  
                titulo="foto" 
                placeholder="Ingresa el enlace tu foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones
             valor={equipo}
             actualizarEquipo={actualizarEquipo}
             equipos={props.equipos}
            ></ListaOpciones>
            <Boton texto="Crear Colaborador"></Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresa el titulo" 
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
                />
            <CampoTexto  
                titulo="Color" 
                placeholder="Ingresa el color en Hexadecimal" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />
                <Boton texto="Crear Equipo"></Boton>
                </form>
    </section>
}

export default Formulario