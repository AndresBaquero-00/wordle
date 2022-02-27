import chalk from 'chalk';
import { inputPalabra } from './input.js';

const LETRAS = 5;

/**
 * Función encargada de colorear la letra de las teclas en caso de que aparezca o no en la palabra.
 * @param {Array} teclado 
 * @param {String} letra 
 * @param {String} coloreada 
 * @returns El teclado coloreado para cada intento
 */
const colorearTeclado = (teclado, letra, coloreada) => {
    for (const fila of teclado) {
        fila.forEach((l, i) => {
            if (l.length > 1) {
                l = l.split('')[5];
            }

            if (letra.includes(l, 0)) {
                fila[i] = `${ coloreada }`;
            }
        });
    }

    return teclado;
}

/**
 * Funcion encargada de mostrar el tablero en pantalla, coloreando cada letra de la palabra
 * digitada en caso que esté en la posicion correcta, incorrecta o no se encuentre.
 * @param {Array} tablero El arreglo que guarda el prototipo de tablero
 */
const mostrarTablero = (tablero) => {
    let teclado = [
        [' ', 'q', 'w', 'e', 'r', 't', ' ', 'y', 'u', 'i', 'o', 'p'],
        [' ', 'a', 's', 'd', 'f', 'g', ' ', 'h', 'j', 'k', 'l', 'ñ'],
        ['ENVIAR', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'BORRAR']
    ];

    for (const intento of tablero) {
        let fila = '';
        for (let i = 0; i < LETRAS; i++) {
            let letra;
            if (intento[i].is && intento[i].correcto) {
                letra = `[${ chalk.green(intento[i].letra) }]`;
                teclado = colorearTeclado(teclado, intento[i].letra, chalk.green(intento[i].letra));
            } else if (intento[i].is) {
                letra = `[${ chalk.magenta(intento[i].letra) }]`;
                teclado = colorearTeclado(teclado, intento[i].letra, chalk.magenta(intento[i].letra));
            } else {
                letra = `[${ chalk.white(intento[i].letra) }]`;
                teclado = colorearTeclado(teclado, intento[i].letra, chalk.red(intento[i].letra));
            }

            fila += letra;
        }
        console.log('     ' + fila);
    }

    console.log();
    for (const fila of teclado) {
        console.log(...fila);
    }
    console.log();
}

/**
 * Función encargada de iniciar el juego.
 */
export const iniciarJuego = async () => {
    const tablero = [];
    const palabraGenerada = 'gatos';
    let intentos = 0;
    let aciertos = 0;

    while (intentos < 6 && aciertos !== LETRAS) {
        const { palabra } = await inputPalabra();
        const intento = [];
        aciertos = 0;

        for (let i = 0; i < LETRAS; i++) {
            let is, correcto;
            if (palabraGenerada.includes(palabra.charAt(i))) {
                if (palabraGenerada.charAt(i) === palabra.charAt(i)) {
                    is = true;
                    correcto = true;
                    aciertos++;
                } else {
                    is = true;
                    correcto = false;
                    aciertos = 0;
                }
            } else {
                is = false;
                correcto = false;
                aciertos = 0;
            }

            intento.push({
                is: is,
                correcto: correcto,
                letra: palabra.charAt(i)
            });
        }

        tablero.push(intento);
        intentos++;

        mostrarTablero(tablero);
    }

    if (aciertos === LETRAS) {
        console.log(`Felicidades. Ha completado la palabra en ${ intentos } intento(s) 😺.`);
    } else {
        console.log(`Has fallado. No te preocupes, en la proxima será 😉.`);
    }
}

export const consultarEstadisticas = () => {

}