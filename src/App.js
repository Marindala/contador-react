
import './App.css';
import Boton from './componentes/Boton.jsx';
import logo from './imagenes/logopng.png';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log('Clic');
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  }

  return (
    <div className='App'> 
      <div className='logo-contenedor'>
        <img className='logo-free'
        src={logo}
        alt='logo'/>
        <div className='contenedor-principal'>
          <Boton
           texto='Clic'
           esBotonDeClic={true}
           manejarClic={manejarClic}/>
          <Boton
           texto='Reiniciar'
           esBotonDeClic={false}
           manejarClic={reiniciarContador} />
        </div>

      </div>
    
    </div>
  );
}

export default App;

//cambiar comillas para ser consistentes.
 /* (*) selector universal */