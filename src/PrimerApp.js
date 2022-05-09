import React from "react";
import { Fragment } from "react";
import PropTypes from 'prop-types';
//Otra forma de especificar un Fragment
//<> para abrir
//</> para cerrar


//Functional components

const PrimerApp = ( { saludo, subtitulo } ) => {

    //const no funciona con booleanos
    //const saludo = ' Hola mundo const ';

    //console.log( props );

    //const no funciona con objetos, no son hijos de react
    //const saludo = {
    //    nombre: 'bimbo tostado',
    //    edad: 24,
    //}
    return (
        <Fragment>
            <h1> { saludo } </h1>
            {/*<pre> { JSON.stringify( saludo, null, 3 ) } </pre>*/}
            <p> { subtitulo }</p>
        </Fragment>
        );  
        
    }
    PrimerApp.propTypes = {
        saludo: PropTypes.string.isRequired
    }

    PrimerApp.defaultProps = {
        subtitulo: 'Soy un subtitulo'
    }

export default PrimerApp;