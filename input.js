import inquirer from 'inquirer';

export const menuPrincipal = async () => {
    const opciones = {
        name: 'opcion',
        type: 'rawlist',
        message: 'Seleccione su opción: ',
        choices: [
            { value: 1, name: 'Iniciar Sesión' }, 
            { value: 2, name: 'Registrar' },
            { value: 3, name: 'Salir' }
        ]
    }
    return inquirer.prompt(opciones);
}

export const menuJugar = async () => {
    const opciones = {
        name: 'opcion',
        type: 'rawlist',
        message: 'Seleccione su opción: ',
        choices: [
            { value: 1, name: 'Crear nuevo juego' }, 
            { value: 2, name: 'Consultar estadisticas' },
            { value: 3, name: 'Salir del juego' }
        ]
    }
    return inquirer.prompt(opciones);
}

export const inputLogin = async () => {
    const user = {
        name: 'usuario',
        type: 'input',
        message: 'Digite su usuario: '
    }

    const password = {
        name: 'password',
        type: 'password',
        message: 'Digite su contraseña: '
    }

    return inquirer.prompt([user, password]);
}

export const inputRegistrar = async () => {
    const nombres = {
        name: 'nombres',
        type: 'input',
        message: 'Digite su nombre: '
    }

    const user = {
        name: 'usuario',
        type: 'input',
        message: 'Digite su usuario: '
    }

    const password = {
        name: 'password',
        type: 'password',
        message: 'Digite su contraseña: '
    }

    const confirmarPassword = {
        name: 'confirmarPassword',
        type: 'password',
        message: 'Confirme su contraseña: '
    }

    return inquirer.prompt([nombres, user, password, confirmarPassword]);
}

export const inputPalabra = async () => {
    const palabra = {
        name: 'palabra',
        type: 'input',
        message: 'Digite una palabra de 5 letras: '
    }
    return inquirer.prompt(palabra);
}