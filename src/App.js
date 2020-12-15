import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';


function App() {

  const [prespuesto, guardarPresupuesto] = useState(0)
  const [restate, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(false);

  return (
    <div className="container">
      <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">
        <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}        />

        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
