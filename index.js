import { menuPrincipal, menuJugar, inputLogin, inputRegistrar } from './input.js';
import { iniciarJuego } from './juego.js';

async function iniciarSesion() {
    let opcion = await inputLogin();
    await jugar();
}

async function registrar() {
    let opcion = await inputRegistrar();
}

async function jugar() {
    let opcion;
    do {
        opcion = await menuJugar();
        switch(opcion.opcion) {
            case 1:
                console.clear();
                await iniciarJuego();
                break;
            case 2:
                console.clear();
                consultarEstadisticas();
                break;
            default:
                break;
        }
    } while(opcion.opcion !== 3);
}

async function main() {
    let opcion;
    do {
        opcion = await menuPrincipal();
        switch(opcion.opcion) {
            case 1:
                console.clear();
                await iniciarSesion();
                break;
            case 2:
                console.clear();
                await registrar();
                break;
            default:
                console.log('Terminando programa...');
                break;
        }
    } while(opcion.opcion != 3);
}

main();