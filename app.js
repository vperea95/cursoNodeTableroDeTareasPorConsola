
import 'colors';
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, listadoCheckTareas } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
import { LeerDB, guardarDB } from './helpers/crearArchivos.js';


const main = async () => {

    let opcion = '';

    const tareas = new Tareas()
    const tareasBD = LeerDB()

    if(tareasBD){
        tareas.cargarTareasFromArray(tareasBD)
    }

    do {
        opcion = await inquirerMenu();

        switch (opcion) {
            case '1':
                const descripcion = await leerInput('Descripcion:')
                tareas.crearTarea(descripcion)
            break;

            case '2':
                tareas.listadoCompleto()                
            break;

            case '3':
                tareas.tareasCompletadas()                
            break;
            case '4':
                tareas.tareasPendientes()                
            break;
            case '5':
                const checkTareas = await listadoCheckTareas(tareas.listarArray)
                tareas.completarTarea(checkTareas)
            break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listarArray)
                if (id !== '0'){
                    const confirmacion = await confirmar( `${'¿ Confirma el Borrado de la Tarea ?'.red}`)
                    if(confirmacion){
                        tareas.borrarTarea(id)
                    }
                }
            break;
        }

        guardarDB(tareas.listarArray)

        if (opcion !== '0'){
            await pausa();
        }
    } while (opcion !== '0');
};

main();
