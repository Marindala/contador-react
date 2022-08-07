
import './App.css';
import Boton from './componentes/Boton.jsx';
import logo from './imagenes/cont.png'; 
import Contador from './componentes/Contador';
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
   //Tener en cuenta los ; en las funciones flecha
  return (
    <div className='App'> 
        <div className='logo-contenedor'>
        <img className='logo-free'
        src={logo}
        alt='logo'/>
      </div>
      <div className='contenedor-principal'>
          <Contador numClics={numClics}/>
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
      );
    }
    

      
    
    

export default App;

//cambiar comillas para ser consistentes.
// (*) selector universal */