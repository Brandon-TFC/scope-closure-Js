const sumWithClosure = (firstNum) => {
    if (typeof firstNum !== 'undefined') {  // Comprobamos si el primer número está definido
      return (secondNum) => {  // Devolvemos una función que toma el segundo número
        if (typeof secondNum !== 'undefined') {  // Comprobamos si el segundo número está definido
          return firstNum + secondNum;  // Sumamos el primer número y el segundo número
        } else {
          return firstNum;  // Si el segundo número no está definido, devolvemos solo el primer número
        }
      };
    } else {
      return 0;  // Si el primer número no está definido, devolvemos 0
    }
  };
  
  console.log(sumWithClosure(2)(3));   // Imprime 5
  console.log(sumWithClosure(90)());  // Imprime 90
  