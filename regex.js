export const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

export const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/;

export const regexPasswordFuerte = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

export const regexTelefono = /^\+?\d{7,15}$/;

export const regexDNI = /^\d{7,8}$/;

export const regexURL = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

export const regexCodigoPostal = /^\d{4,6}$/;

export const regexSoloNumeros = /^\d+$/;

export const regexFechaISO = /^\d{4}-\d{2}-\d{2}$/;

export const regexHexColor = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

export const regexNombreCompleto = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,} [A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}$/