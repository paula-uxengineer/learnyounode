import {sumarArgumentos} from './baby-steps'; 

test('Suma de argumentos de línea de comandos', () => {
    const mockArgs = ['node', 'nombreDelScript.js', '3', '5', '7'];

    expect(sumarArgumentos(mockArgs)).toBe(15);
});
