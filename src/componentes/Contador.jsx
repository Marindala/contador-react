import React from "react";
import '../hojas-de-estilo/Contador.css';




function Contador({ numClics }) { //desestructuración
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default Contador;