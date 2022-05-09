import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState( value ); //useState devuelve un arreglo [], con dos posiciones

    //handledAdd
    const handleAdd = (e) => {
        //primera forma de realizar, utilizar esta por preferencia
        setCounter( counter + 1 );
        //segunda forma, mediante una funcion
        //setCounter( (c) => c + 1 );
    }

    const handleReset = (e) => {
        setCounter( value );
    }

    const handleSubtract = (e) => {
        setCounter( counter - 1 );
    }

    return ( 
         <Fragment>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={  handleAdd }>+1</button>
            <button onClick={  handleReset }>reset</button>
            <button onClick={  handleSubtract }>-1</button>
         </Fragment>   

        )
    }
    CounterApp.propTypes = {
        value: PropTypes.number
    }
export default CounterApp;

//implicitamente la funcion onClick recibe un 
//argumento, llamado e, que referencia a el evento