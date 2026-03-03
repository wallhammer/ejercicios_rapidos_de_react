import React, {useState} from 'react'
import uniqid from 'uniqid'
import { FaRegTrashAlt } from "react-icons/fa";
import { BsDisplay } from 'react-icons/bs';

export default function Listadonombres() {

    const [nombre, setNombre] = useState('')
    const [listanombres, setListaNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id,setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) =>{
        e.preventDefault()
        if(!nombre.trim()){
            setError('El campo nombre esta vacio')
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre: nombre
        }
        setListaNombres([...listanombres, nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deletNombre = (id)=>{
        const nuevaArray = listanombres.filter(item => item.id !== id)
        setListaNombres(nuevaArray)
    }

    const editar = (item) =>{
        
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editarNombre = (e) =>{
        e.preventDefault()
        const NuevoArray = listanombres.map( item => item.id == id ? {id:id, tituloNombre:nombre} : item)
        setListaNombres(NuevoArray)
        setModoEdicion(false)
        setNombre('')
    }

  return (
    <div>
      <h2>Aplicacion CRUD basica</h2>
      <div className='row'>
        <div className='col'>
            <h2 >Listado de nombres</h2>
            <ul className='list-group'>
                {
                    listanombres.map(item =>

                         <li 
                         key={item.id} 
                         className='list-group-item mb-3 '>
                            <div className='d-inline'>
                                <p className='float-start'>{item.tituloNombre}</p>
                                
                                    <button 
                                        className='btn float-end' 
                                        style={{ color: "white", backgroundColor: "#333" }}
                                        onClick={() => {deletNombre(item.id)}}>
                                            <FaRegTrashAlt style={{ color: "white" }}/>
                                    </button>

                                    <button  
                                        className='btn btn-info float-end me-1'
                                        onClick={() =>{
                                            editar(item)
                                            // document.getElementById(item.id).style.display ='block'
                                        }}
                                        >Editar
                                    </button>
                                    <form id={item.id} className='form-group' style={{display:'none'}}>
                                                <input type="text" className='form-control' placeholder='editar nombre' value={nombre }/>
                                                <input className='btn btn-info btn-block mt-3 ' type="submit" placeholder='registrar Nombre' />
                                    </form>
                                   
                            </div>
                         </li>)
                }
            </ul>
        </div>
        <div className='col'>
            <h2>Formulario para añadir nombres</h2>
            <form onSubmit={modoEdicion ? editarNombre : addNombre} className='form-group d-flex flex-column'>
                <input 
                    onChange={(e) =>{
                        setNombre(e.target.value)
                    }} className='form-control' 
                    type="text" 
                    placeholder='introducir nombre' 
                    value={nombre}
                />

                <input 
                    className='btn btn-info btn-block mt-3 ' 
                    type="submit" 
                    placeholder='registrar Nombre' 
                    value={modoEdicion ? 'Editar Nombre' : 'Registrar Nombre'}
                />
            </form>
                {                        
                    error != null ?(
                            <div className='alert alert-danger my-3'>{error}</div>
                        ):
                        (
                            <div></div>
                        )
                }
        </div>
      </div>
    </div>
  )
}
