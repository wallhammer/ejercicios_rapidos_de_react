import React, {Fragment, fragment, useState} from 'react'
import Contador from './Contador'

export default function Listado() {

    const [numero, setNumero] = useState([<Contador></Contador>,2,"hola",4,5,6])

    const Agregar = (dato) => {
        setNumero([numero, 1])
    }

    const Quitar =()=>{
        setNumero(numero.slice(0,-1))
    }
    const Restar = () => {

    }

  return (
    <Fragment>
        <ul>
            {
                numero.map((item, index) =>
                    <li key={index}>
                        {item}
                    </li>
                )
            }
        </ul>
        <input type="text" name="" id="" />
        <button onClick={Agregar}>Agregar</button>
        <button onClick={Quitar}>Quitar</button>
    </Fragment>
  )
}


