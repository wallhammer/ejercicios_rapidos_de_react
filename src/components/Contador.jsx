import React, { Fragment, useState, useEffect } from "react";

export const Contador = () => {
  
    const [numero, setNumero] = useState(0)
    const Aumentar = () =>{
        setNumero(numero +1)
    }
    const Reducir = () =>{
        setNumero(0)
    }

    useEffect(() =>{
        setTimeout(() => {
            Aumentar()
        }, 1000)
    })
  

    return(
        <div className="mt-5 d-flex flex-column">
            <h2>Cantidad del contador: {numero}</h2>
            <button className="btn btn-info mx-auto" onClick={Reducir}>Reset</button>
        </div>
    )
}

export default Contador