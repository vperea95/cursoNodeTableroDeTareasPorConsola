import 'colors';
import inquirer from 'inquirer';
import { validate } from 'uuid';

const Preguntas = [
    {
        type: 'list',
        name: 'Opciones',
        message: `${'Selecciona una Opción:'.red}`,
        choices: [
            { value: '1', name: `${'1.'.green} Crear Tarea` },
            { value: '2', name: `${'2.'.green} Listar Tareas` },
            { value: '3', name: `${'3.'.green} Listar Tareas Completadas` },
            { value: '4', name: `${'4.'.green} Listar Tareas Pendientes` },
            { value: '5', name: `${'5.'.green} Completar tarea(s)` },
            { value: '6', name: `${'6.'.green} Borrar Tarea` },
            { value: '0', name: `${'0.'.green} Salir` }
        ]
    }
];

const PreguntasPausa = [
    {
        type: 'input',
        name: 'Entrada',
        message: `Presione ${'Enter'.green} para continuar`
    }
];

export const inquirerMenu = async () => {
    console.clear();
    console.log('========================================'.green);
    console.log('             Tablero de Tareas          '.white);
    console.log('========================================\n'.green);
    const opciones = await inquirer.prompt(Preguntas);
    return opciones.Opciones;
};



export const pausa = async () => {
    const respuesta = await inquirer.prompt(PreguntasPausa);
}

export const leerInput = async ( message ) =>{
    const pregunta = [
        {
            type:'input',
            name:'Descripcion',
            message,
            validate( value ){
                if (value.length === 0){
                    return 'Por favor debes ingresar una descripcion de la tarea'
                }
                return true
            }
        }
    ]

    const {Descripcion} = await inquirer.prompt(pregunta)
    return Descripcion
}

export const listadoTareasBorrar = async ( tareas = []) =>{
    const choices = tareas.map( (tarea,i) => {
        const idx = `${i + 1}.`.green
        return {
            value:tarea.id,
            name:`${idx} ${tarea.desc}`
        }

    })

    choices.unshift({
        value:'0',
        name:`${'0'} ${'Cancelar'}`
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: `${'Selecciona la tarea a Borrar:'.red}`,
            choices
        }
    ];
    const {id} = await inquirer.prompt(preguntas);
    return id;
    
}


export const confirmar = async ( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok
}
