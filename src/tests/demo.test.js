// 1- me posiciono en mi carpeta del proyecto
// 2- ejecuto el comando npm test
// comprueba todos los archivos .test.js

//nota
//cada vez que realice cambios se va a ejecutar nuevamente el test

describe('Pruebas en el archivo demo.test.js', ()=> {
    test( 'deben de ser iguales los string', () => {

        // 1. inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
    
        expect( mensaje ).toBe( mensaje2 );
        
    } ) 
})

