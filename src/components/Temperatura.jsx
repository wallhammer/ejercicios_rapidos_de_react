import React, {Fragment, useState } from 'react'

export default function Temperatura() {

    const [Temperatura, setTemperatura] = useState(19)
    const subir = () =>{
        setTemperatura(Temperatura + 1)
    }
    const Bajar = () =>{
        setTemperatura(Temperatura - 1)
    }
  return (
    <Fragment className="container">
      <h2>La Temperatura es: {Temperatura}</h2>
      <p>
        {
            Temperatura > 21 ? "Hace calor" : "hace frio"
        }
      </p>
      <div className='d-flex flex-column mx-auto w-50'>
        <button className="btn btn-success btn-block mb-2 " onClick={subir}>Aumentar Temperatura</button>
        <button className="btn btn-success btn-block mb-2 " onClick={Bajar}>Reducir Temperatura</button>
      </div>
    </Fragment>
  )
}
