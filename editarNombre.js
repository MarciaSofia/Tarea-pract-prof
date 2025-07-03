import utils from "./utils.js";
import validarEstudiante from "./validarEstudiante.js";
// array de estudiantes (base de datos)
const estudiantesNombresCompletos = [
  { nombre: "Rubén", apellido: "Moreno", notas: [9, 8, 9], promedio: 8.67 },
  { nombre: "Víctor", apellido: "Espinosa", notas: [8, 6, 7], promedio: 7 },
  { nombre: "Nuria", apellido: "Figueroa", notas: [9, 8, 9], promedio: 8.67 },
  { nombre: "Lucas", apellido: "Martínez", notas: [10, 9, 8], promedio: 9 },
  { nombre: "Sofía", apellido: "Mendoza", notas: [10, 10, 10], promedio: 10 },
];

/* function validacionIngreso(mensaje, regex) {
    let ingreso;
    do {
        ingreso = utils.prompt(mensaje);
        if (!regex.test(ingreso)) {
            console.log("Intenta nuevamennte");
        }
    } while (!regex.test(ingreso));
    return ingreso
}
 */

//ingreso de hasta 3 veces y validacion (funcion validar estudiante)
function ingresoIntentos(mensaje, validar, maxIntentos = 3) {
  let intentos = 0;
  let entrada;

  while (intentos < maxIntentos) {
    entrada = utils.prompt(mensaje);
    try {
      validar(entrada);
      return entrada;
    } catch (error) {
      console.log(`${error.message}`);
      intentos++;
    }
  }

  throw new Error("Limite de intentos agotado");
}

/* 
!!!FALTA VERIFICACION
function editarNombreEstudiantes() {
    const nombreActual = utils.prompt("Ingresa el nombre completo actual del estudiante: ");
    //corrobor existe el etudiante?
    const estudiante = estudiantesNombresCompletos.find(est => `${est.nombre} ${est.apellido}`.toLowerCase() === nombreActual.toLowerCase());
    // mal ingresado
    if (!estudiante) {
        console.log("No existe el estduante.");
        return;
    }
    //existe
    const nuevoNombre = utils.prompt("Nuevo nombre: ");
    const nuevoApellido = utils.prompt("Nuevo apellido: ");
    //modificacion
    estudiante.nombre = nuevoNombre;
    estudiante.apellido = nuevoApellido;
    
    console.log(estudiante);
    
}
*/

function editarNombreEstudiantes() {
  let estudiante;
  let nombreActual;

  //ingreso de estudiante y validacion
  try {
    nombreActual = ingresoIntentos("Ingresa el nombre actual del estudiante: ", validarEstudiante);
    //busqueda
    estudiante = estudiantesNombresCompletos.find((est) => `${est.nombre} ${est.apellido}`.toLowerCase() === nombreActual.toLowerCase());
    //FALTA : que me de mas de una oportunidad al ingresar un nombre que pasa la validacion pero que no existe(mejorar en funcion validar)
    if (!estudiante) {
      throw new Error ("No existe el estudiante");
    }
  } catch (error) {
    console.log(`${error.message}`);
    return;
  }
  //guardo el nombre para mostrarloa l final ?
  const nombreAnterior = `${estudiante.nombre} ${estudiante.apellido}`;
  //ingreso de nuevo nombre
  let nuevoNombreCompleto;
  try {
    nuevoNombreCompleto = ingresoIntentos("Ingresa el nuevo nombre del estudiante: ", validarEstudiante);
  } catch (error) {
    console.log(`${error.message}`);
    return;
  }

  //separar nombre completo para guardar cada valor en una variable distinta
  const [nuevoNombre, ...apellidos] = nuevoNombreCompleto.split(" ");
  const nuevoApellido = apellidos.join(" ");

  //carga del nuevo nombre
  //FALTA CAPITALIZAR POR SI EL INGRESO ES EN MINUSCULAS
  estudiante.nombre = nuevoNombre;
  estudiante.apellido = nuevoApellido;

  console.log("Nombre actulizado");
  console.log(`Nombre anterior: ${nombreAnterior}`);
  console.log(`NOmbre nuevo: ${nuevoNombre} ${nuevoApellido}`);
}

editarNombreEstudiantes();
