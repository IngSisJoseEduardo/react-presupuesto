import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';


const ControlPresupuesto = ({prespuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {prespuesto}
            </div>
            <div className={revisarPresupuesto(prespuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.protoType = {
    prespuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default ControlPresupuesto;