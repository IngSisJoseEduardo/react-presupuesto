import React,  {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPrespuesto = e => {
        guardarCantidad(Number(e.target.value));
    };

    // submit para definir el presupuesto
    const agregarPrespuesto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad )) {
            guardarError(true);
            return;
        }

        // si pasa la validacion
        guardarError(false);

        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    };

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error mensaje="El presupuesto es incorrecto"/> :null}
            <form
                onSubmit={agregarPrespuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPrespuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;