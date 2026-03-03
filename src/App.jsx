
import React from 'react';
import './App.css';
import Contador from './components/Contador';
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';
import Formulario from './components/Formulario';
import Listadonombres from './components/Listadonombres';
import Bienvenida from './components/Bienvenida';
import Cards from './components/Cards';

function App() {
  return (
    <div className="mt-5 container">
        <h1>Propiedades se los componentes</h1>
        <hr />
        <div className='row'>
          <div className='col'>
            <Cards
              imagen="https://loremipsum.imgix.net/2uTVCl4WzwqJP5ywFNzukO/8acb2b2cf872f3f5706c4bd63295ba31/placekitten.jpeg?w=1280&q=60&auto=format,compress"
              titulo="Titulo card 1"
              texto="Texto de la card 1"
            />
          </div>
          <div className='col'>
            <Cards
              imagen="https://loremipsum.imgix.net/2uTVCl4WzwqJP5ywFNzukO/8acb2b2cf872f3f5706c4bd63295ba31/placekitten.jpeg?w=1280&q=60&auto=format,compress"
              titulo="Titulo card 2"
              texto="Texto de la card 2"
            />
          </div>
          <div className='col'>
            <Cards
              imagen="https://loremipsum.imgix.net/2uTVCl4WzwqJP5ywFNzukO/8acb2b2cf872f3f5706c4bd63295ba31/placekitten.jpeg?w=1280&q=60&auto=format,compress"
              titulo="Titulo card 3"
              texto="Texto de la card 3"
            />
          </div>
        </div>
        <div className='container'>
          <Contador/>
        </div>
        <div>
          <Listado></Listado>
        </div>

    </div>
  );
}

export default App;
