import fs from 'fs'
const archivo = './media/data.json'

export const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data))
}


export const LeerDB = () => {
    if (!fs.existsSync(archivo)) {
        console.log('Archivo no exite');
        return null
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    const data = JSON.parse(info)

    return data

}