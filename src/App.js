import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';


function App() {

  const [mostrarFormulario, actulizarMostrar] = useState(false)

  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/Txitxe36.png",
      nombre: "Miguel García",
      puesto: "Estudiante",
      fav:true
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/Txitxe36.png",
      nombre: "Miguel García",
      puesto: "Estudiante",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Movil",
      foto: "https://github.com/Txitxe36.png",
      nombre: "Miguel García",
      puesto: "Estudiante",
      fav:false
    }
  ])

  const [equipos, actualizarEuipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0fe2"
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuidv4(),
      titulo: "Ux y Design",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuidv4(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ])


  const like = (id)=>{
    const colaboradorLikeado = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradorLikeado)
  }

  const cambiarMostrar = () => {
    actulizarMostrar(!mostrarFormulario)
  }

  //registrar un nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    //spread operator -- creamos una copia de los valores actuales y dsp le agregamos un colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador: ",id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id!==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEuipos(equiposActualizados)
  }

  //crear equipo
  const crearEquipo= (nuevoEquipo)=>{
      console.log(nuevoEquipo)
      actualizarEuipos([...equipos,{...nuevoEquipo,id:uuidv4()}])
  }

  //ternario --> consicion ? seMuestra : noSeMuestra
  return (
    <div>
      <Header></Header>
      {/*mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)*/
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }


      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>

      {equipos.map((equipo) => {
        return <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        ></Equipo>
      })}

      <Footer />

    </div>

  );
}

export default App;
