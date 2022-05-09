import React from "react";
import ReactDOM from "react-dom";
//import PrimerApp from "./PrimerApp";

import './index.css';
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#root');

//estandar para identificar a los componentes
//<nombreComp />
ReactDOM.render( < CounterApp value= { 10 } /> , divRoot )
//ReactDOM.render( < PrimerApp saludo="Hola, Soy Goku" /> , divRoot )

//tips para el ejercicio de la seccion 41
//utilizar "rafcp" para generar estructura