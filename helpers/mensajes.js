require('colors');


const mostarMenu = async() =>{
    return new Promise((resolve) => {
        
        console.clear()
        console.log('========================================'.blue)
        console.log('         Seleccione una Opcion         '.blue)
        console.log('========================================\n'.blue)
    
    
        console.log(`${ '1.'.blue } Crear Tarea`)
        console.log(`${ '2.'.blue } Listar Tareas`)
        console.log(`${ '3.'.blue } Listar Tareas Completadas`)
        console.log(`${ '4.'.blue } Listar Tareas Pendientes`)
        console.log(`${ '5.'.blue } Completar tarea(s)`)
        console.log(`${ '6.'.blue } Borrar Tarea`)
        console.log(`${ 'o.'.blue } Salir \n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Seleccione una Opcion: `.green,(Opcion)=>{
            readline.close();
            resolve(Opcion)
        })
    })


    


}

const pausa = async()=>{
    return new Promise((resolve, reject) => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\n Presione ${ 'ENTER'.green } para continuar`,(Opcion)=>{
            readline.close();
            resolve()
        })
    })

}

module.exports = {
    mostarMenu,
    pausa
}