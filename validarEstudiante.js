import { regexNombre, regexNombreCompleto } from "./regex.js";

function validarEstudiante(estudianteNombre){
    if(!regexNombre.test(estudianteNombre)){
       throw new Error('El nombre no puede llevar números')
    }
    else if (!regexNombreCompleto.test(estudianteNombre)) {
        throw new Error('Introduzca el nombre completo')
    }
}



export default validarEstudiante