import React, {useState} from 'react'
import Error from './Error';

const Formulario = () => {

    const [gasto, guardarGasto] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad ) || gasto.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);
        // construir el gasto

        // pasar el gasto al componente principal


        // resetear el form
        
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
                    value={gasto}
                    onChange={e=> guardarGasto(e.target.value)}
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
 
export default Formulario;