import utils from "./utils.js";

/* regex */
const regexNombreYApellido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/;

/* "base de datos" */
const estudiantesNombresCompletos = [
  { nombre: "Ruben", apellido: "Moreno", notas: [9, 8, 9], promedio: 8.67 },
  { nombre: "Victor", apellido: "Espinosa", notas: [8, 6, 7], promedio: 7 },
  { nombre: "Nuria", apellido: "Figueroa", notas: [9, 8, 9], promedio: 8.67 },
  { nombre: "Lucas", apellido: "Martinez", notas: [10, 9, 8], promedio: 9 },
  { nombre: "Sofia", apellido: "Mendoza", notas: [10, 10, 10], promedio: 10 }
];

/* funcino para capitalizar el nombre */
function capitalizarNombre(str) {
  return str
  .toLowerCase()
  .split(" ")
  .map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1))
  .join(" ");
}
/* funcion para ingreso */
function ingresoConIntentos(mensaje, regex, maxIntentos = 3) {
  let intentos = 0;
  let entrada;

  while (intentos < maxIntentos) {
    entrada = utils.prompt(mensaje).trim();
    if (regex.test(entrada)) return entrada;

    console.log("Formato invalido. Prueba de nuevo");
    intentos ++;
  }

  throw new Error ("Limite de intentos alcanzdo")
}

/* funcion principal */
function editarNombreEstudiante () {
  let estudiante;

  /* ingreso nombre y apellido actual con regex  */
  let nombreActual, apellidoActual;

  try {
    nombreActual = ingresoConIntentos("INgresa el nombre actual: ", regexNombreYApellido);
    apellidoActual = ingresoConIntentos("Ingresa el apellido actual: ", regexNombreYApellido);

    /* por si ingresa alguna letra intermedia mayuscula */
    nombreActual = capitalizarNombre(nombreActual);
    apellidoActual = capitalizarNombre(apellidoActual);

    /* busco el estudiante */
    estudiante = estudiantesNombresCompletos.find (
      (est) =>
        est.nombre === nombreActual && est.apellido === apellidoActual
    );
    /* no lo encuentra entonces se corta(¿deberia dar mas oportunidades?)*/
    if (!estudiante) throw new Error("NO existe el estudiante con ese nombre");
  } catch (error) {
    console.log(error.message);
    return;
  }

  const nombreAnterior = `${estudiante.nombre} ${estudiante.apellido}`;

  /* ahora si paso todo puede ingresar el nombre nuevo  */
  let nuevoNombre, nuevoApellido;

  try {
    nuevoNombre = ingresoConIntentos("Ingresa el nuevo nombre: ", regexNombreYApellido);
    nuevoApellido = ingresoConIntentos("INgresa el nuevo apellido: ", regexNombreYApellido)
  } catch (error) {
    console.log(error.message);
    return;
  }
  
  /* actualizacion y capitalizar nombre */
  estudiante.nombre = capitalizarNombre(nuevoNombre);
  estudiante.apellido = capitalizarNombre(nuevoApellido);

  /* muestro resultado */
  console.log("Nombre actualizado corretamente");
  console.log(`Anterior : ${capitalizarNombre(nombreAnterior)}`);
  console.log(`Nuevo : ${estudiante.nombre} ${estudiante.apellido}`);
  /* base de datos actualizada */
  console.table(estudiantesNombresCompletos)
}

editarNombreEstudiante();
