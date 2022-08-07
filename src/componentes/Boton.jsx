import React from "react";



function Boton ({texto, esBotonDeClic, manejarClic}) { //se puede pasar props o destructuring como en este caso sino{props.texto}
  return(
    <button 
       className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
       onClick={manejarClic}>
       {texto}
    </button>
  );
}

export default Boton;