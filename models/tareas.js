import Tarea from './tarea.js';


export default class Tareas {
    _listado = {}


    get listarArray() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }


    constructor() {
        this._listado = {}
    }

    borrarTarea( id = '' ){
        let msg = ''
        if(this._listado[id]){
            delete this._listado[id]
            console.log('Tarea Borrada con exito')
        }else{
            console.log('La tarea no exite')
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea
        })
    }


    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    listadoCompleto(){
        console.log()
        this.listarArray.forEach((tarea,i) => {
            const id = `${i + 1}`.green
            const {desc,completadoEn} = tarea
            const estado = (completadoEn) ? `Completada`.green : `Pendiente`.red
            console.log(`${id}. ${desc} :: ${estado}`)

        })
    }

    tareasCompletadas(){
        let contador = 0 
        console.log()
        this.listarArray.forEach((tarea) => {
            if (tarea.completadoEn){
                contador += 1
                const {desc,completadoEn} = tarea
                const estado = (completadoEn) ? `${completadoEn}`.green : `Pendiente`.red
                console.log(`${(contador + '.').green}. ${desc} :: ${estado}`)
            }

        })

    }

    tareasPendientes(){

        let contador = 0 
        console.log()
        this.listarArray.forEach((tarea) => {
            if (!tarea.completadoEn){
                contador += 1
                const {desc,completadoEn} = tarea
                const estado = (completadoEn) ? `Completada`.green : `Pendiente`.red
                console.log(`${(contador + '.').green}. ${desc} :: ${estado}`)
            }

        })

    }

}