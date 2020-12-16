import React, { useState, useEffect } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';


function App() {

  const [prespuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creaergasto, guardarCreargasto] = useState(false)

  useEffect(() => {
    if(creaergasto) {
      // agrega nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      
      guardarCreargasto(false);
    }
  }, [gasto,creaergasto,gastos, restante])

  return (
    <div className="container">
      <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">

        {mostrarpregunta ? (
          <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}        />
        ):(
          <div className="row">
            <div className="one-half column">
              <Formulario 
                guardarGasto={guardarGasto}
                guardarCreargasto={guardarCreargasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={gastos}
              />
              <ControlPresupuesto
                prespuesto={prespuesto}
                restante={restante}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
