export function sumWithClosure(firstNum) {
    // La función sumWithClosure toma el primer número y devuelve una función interna
    return function(secNum) {
      // La función interna toma el segundo número y realiza la suma con el primer número
      // Si el segundo número no está definido, se considera como cero utilizando el operador de fusión nula (??)
      return firstNum + (secNum ?? 0);
    }
  }
  
  sumWithClosure(2)(3);
  // Llamamos a la función sumWithClosure con el primer número (2) y luego encadenamos otra llamada con el segundo número (3)
  // La función interna suma ambos números y devuelve el resultado (5)
  