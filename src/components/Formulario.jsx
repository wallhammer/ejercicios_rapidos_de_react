import React ,{useState} from 'react'

export default function Formulario() {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            console.log("campo vacio")
        }
        if (!edad.trim()) {
            console.log("campo vacio")
        }
        
    }

  return (
    <div className="container">
        <form onSubmit={validar} className="form-group d-flex flex-column"
                placeholder='nombre' 
                className="form-control mb-3 w-50 mx-auto"
                type="text"
                onChange={(e) => { setNombre(e.target.value)}}
            />
            <input 
                placeholder='edad' 
                className="form-control mb-3 w-50 mx-auto" 
                type="text" name="" id="" 
                onChange={ (e) =>{
                    setEdad(e.target.value)
                }}
            />
            <input 
                className="btn btn-info btn-block mb-3 w-25 mx-auto" 
                type="submit" 
            />
        <form/>
    </div>
  )
}
