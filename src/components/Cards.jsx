import React from 'react'

export default function Cards(props) {
    const {imagen, titulo, texto} = props
  return (
    <div className='card' style={{width: "18rem"}}>
      <img src={imagen} className='card-img-top img-thumbnail' alt="" />
      <div className='card-body'>
        <h5 className='card-title'>{titulo}</h5>
        <p className='card-text'>{texto}</p>
        <a className='btn btn-primary' href="">ver mas</a>
      </div>
    </div>
  )
}
