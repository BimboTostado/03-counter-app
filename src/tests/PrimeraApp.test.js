import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimerApp from "../PrimerApp";


describe('Pruebas en <PrimeraApp />', () => {

   /*  test('Debe mostrar el mensaje "Hola, soy goku"', ()=> {

        const saludo = 'Hola, soy goku';

        const { getByText } = render( <PrimerApp saludo={ saludo } /> )

        expect( getByText(saludo) ).toBeInTheDocument();
    }); */

    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimerApp saludo={ saludo } /> )

        expect( wrapper ).toMatchInlineSnapshot()
    });

    test('Debe mostrar el subtitulo enviado por props', ()=>{

        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimerApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );

        const textoParrafo = wrapper.find(`p`).text();
        
        expect( textoParrafo ).toBe( subtitulo );
    })
})