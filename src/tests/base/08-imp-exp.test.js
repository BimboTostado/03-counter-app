import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id) 
        
        expect( heroe ).toBe( heroeData );
    })

    test('debe retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);
        
        expect( heroe ).toBe( undefined );
    })

    test('debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === 'DC' );

        expect( heroes ).toEqual( heroesData )
    })

    test('debe retornar un arreglo, con los heroes de marvel, de tamaño 2', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    })
})