import React from 'react'

export default function Bienvenida(props) {

    const {nombre} = props
  return (
    <div>
      <h2>Bienvenido {nombre}</h2>
    </div>
  )
}
