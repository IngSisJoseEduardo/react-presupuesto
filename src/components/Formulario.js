import React, {useState} from 'react'
import shortid from 'shortid';
import PropTypes from 'prop-types';

import Error from './Error';

const Formulario = ({guardarGasto, guardarCreargasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);
        // construir el gasto
        const gastoObj = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        console.log('Gasto', gastoObj);
        // pasar el gasto al componente principal
        guardarGasto(gastoObj)
        guardarCreargasto(true);


        // resetear el form
        guardarNombre('');
        guardarCantidad('');
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            {error? <Error mensaje="Ambos campos son  obligatorios" />: null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=> guardarNombre(e.target.value)}
                />
            </div>
            
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="300"
                    value={cantidad}
                    onChange={e => guardarCantidad(Number(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agegar Gasto"/>
        </form>
    );
}

Formulario.protoType= {
    guardarGasto: PropTypes.func.isRequired,
    guardarCreargasto: PropTypes.func.isRequired
}
export default Formulario;