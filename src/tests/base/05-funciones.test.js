import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
        //toEqual
        //espera que el objeto tenga las mismas propiedades y los mismos valores
    })

    test('getUserActivo', () => {

        const name = 'Agustin'

        const user = getUsuarioActivo(name);

        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        });

    })
})